import * as S from './PeoplesLog.styles';
import Pagination from '@mui/material/Pagination';
import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { peoplelogService, PeopleslogResponse } from '../../services/peopleslogService';
import noData from '../../assets/noData.svg';
import {
  acneTypeMap,
  categories,
  CATEGORY_MAP,
  Category,
  REVERSE_CATEGORY_MAP,
} from '../../constants/acneTypeMap';

function PeoplesLog() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = (() => {
    const urlCode = searchParams.get('acneType');
    return urlCode ? REVERSE_CATEGORY_MAP[urlCode.toUpperCase()] : '전체';
  })();
  const [selectedCategory, setSelectedCategory] = useState<Category>(initialCategory);
  const [page, setPage] = useState(1);
  const [peoplelogResponse, setPeopleslogResponse] = useState<PeopleslogResponse | null>(null);
  // URL 파라미터 변경 시 카테고리 동기화
  useEffect(() => {
    const currentUrlCode = searchParams.get('acneType');
    const categoryFromUrl = currentUrlCode
      ? REVERSE_CATEGORY_MAP[currentUrlCode.toUpperCase()]
      : '전체';
    if (categoryFromUrl !== selectedCategory) {
      setSelectedCategory(categoryFromUrl as Category);
      setPage(1);
    }
  }, [searchParams]);
  // 데이터 fetch
  useEffect(() => {
    const fetchPeopleslogData = async () => {
      try {
        const type =
          selectedCategory === '전체'
            ? 'all'
            : CATEGORY_MAP[selectedCategory as keyof typeof CATEGORY_MAP]; // 소문자 값
        const data = await peoplelogService.getPeopleslog(type, { page, size: 4 });
        setPeopleslogResponse(data);
      } catch (err) {
        console.error('API 호출 오류:', err);
      }
    };

    fetchPeopleslogData();
  }, [selectedCategory, page]);

  if (!peoplelogResponse) return <div>로딩중...</div>;

  const { content, totalPages } = peoplelogResponse;

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <S.Layout>
      <S.Title>피플즈 로그</S.Title>

      <S.CategoryBox>
        {categories.map((cat) => (
          <S.Category
            key={cat}
            $isSelected={selectedCategory === cat}
            onClick={() => {
              setPage(1);
              setSelectedCategory(cat);
              if (cat === '전체') {
                setSearchParams({});
              } else {
                setSearchParams({ acneType: CATEGORY_MAP[cat as keyof typeof CATEGORY_MAP] });
              }
            }}
          >
            {cat}
          </S.Category>
        ))}
      </S.CategoryBox>
      {content.length === 0 ? (
        <S.NoDataBox>
          <img src={noData} alt="no-data-icon" style={{ width: '5rem' }} />
          <p>아직 로그를 올린 피플이 없어요</p>
        </S.NoDataBox>
      ) : (
        <S.LogList>
          {content.map((log) => (
            <S.LogItem
              key={log.analysisId}
              name={log.acneType as 'ALL' | 'PUSTULES' | 'PAPULES' | 'COMEDONES' | 'FOLLICULITIS'}
              onClick={() => navigate(`/peoplesLog/${log.analysisId}`)}
            >
              <S.LogImage src={log.imageUrl} alt={log.acneType} />
              <S.LogBox>
                <S.LogName type="name">
                  <S.RoundBox type="name">진단명</S.RoundBox>

                  {acneTypeMap[log.acneType as keyof typeof acneTypeMap] || '알 수 없음'}
                </S.LogName>
                <S.LogName type="date">
                  <S.RoundBox type="date">진단일</S.RoundBox>
                  {log.createdAt ? log.createdAt.slice(0, 10).replace(/-/g, '.') : '날짜 없음'}
                </S.LogName>
              </S.LogBox>
            </S.LogItem>
          ))}
        </S.LogList>
      )}

      <S.PaginationWrapper>
        <Pagination count={totalPages} page={page} onChange={handlePageChange} />
      </S.PaginationWrapper>
    </S.Layout>
  );
}

export default PeoplesLog;
