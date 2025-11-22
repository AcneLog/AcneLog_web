import { useNavigate } from 'react-router-dom';
import * as S from './MyLog.styles';
<<<<<<< HEAD
import { useEffect, useState } from 'react';
=======
import { useState } from 'react';
import {
  dummyData,
  diagnosisNameMap,
  dummyDataByA,
  dummyDataByB,
  dummyDataByC,
  dummyDataByD,
} from '../PeoplesLog/peoplesLogDummyData';
>>>>>>> 5dc804d39c739a7b3e9217ca4abbc37dd92c09c5
import { Pagination } from '@mui/material';
import { myLogService, MyLogResponse } from '../../services/myLogservice';
import { acneTypeMap, categoryToTypeMap, categories, Category } from './acneTypeMap';

function MyLog() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState<Category>('전체');
  const [myLogResponse, setMyLogResponse] = useState<MyLogResponse | null>(null);

  const fetchMyLogData = async () => {
    try {
      const type = categoryToTypeMap[selectedCategory];
      const data = await myLogService.getMyLog(type, {
        page,
        size: 4,
      });

      setMyLogResponse(data);
    } catch (err) {
      console.error('API 호출 오류:', err);
    }
=======
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const categories = ['전체', '화농성', '염증성', '좁쌀', '모낭염'];

  // [TODO] dummyData로 임시 지정
  const getCurrentData = () => {
    if (selectedCategory === '화농성') return dummyDataByA;
    if (selectedCategory === '염증성') return dummyDataByB;
    if (selectedCategory === '좁쌀') return dummyDataByC;
    if (selectedCategory === '모낭염') return dummyDataByD;
    return dummyData;
>>>>>>> 5dc804d39c739a7b3e9217ca4abbc37dd92c09c5
  };

  useEffect(() => {
    fetchMyLogData();
  }, [page, selectedCategory]);

  // Hook 아래에서 조건부 렌더
  if (!myLogResponse) return null;

  const { content, totalPages, totalElements } = myLogResponse;

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <S.Layout>
      <S.Title>총 {totalElements}번의 진단</S.Title>
      <S.CategoryBox>
        {categories.map((cat) => (
          <S.Category
            key={cat}
            $isSelected={selectedCategory === cat}
            onClick={() => {
              setSelectedCategory(cat);
              setPage(1);
            }}
          >
            {cat}
          </S.Category>
        ))}
      </S.CategoryBox>
      {content.length === 0 ? (
        <p>진단 기록이 없습니다.</p>
      ) : (
        <S.LogList>
          {content.map((log) => (
            <S.LogItem key={log.analysisId} onClick={() => navigate(`/myLog/${log.analysisId}`)}>
              <S.LogImage src={log.imageUrl} alt={log.acneType} />
              <S.LogBox>
                <S.LogName type="black">
                  <S.RoundBox type="name">진단명</S.RoundBox>
                  {acneTypeMap[log.acneType as keyof typeof acneTypeMap] || '알 수 없음'}
                </S.LogName>
                <S.LogName type="gray">
                  <S.RoundBox type="date">진단일</S.RoundBox>
                  {log.createdAt ? log.createdAt.slice(0, 10).replace(/-/g, '.') : '날짜 없음'}
                </S.LogName>
                <S.LogName type="gray">
                  <S.RoundBox type="show">공개 여부</S.RoundBox>
                  {log.isPublic ? '공개' : '비공개'}
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
export default MyLog;
