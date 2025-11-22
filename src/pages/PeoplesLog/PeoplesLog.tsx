import * as S from './PeoplesLog.styles';
import Pagination from '@mui/material/Pagination';
import React, { useEffect, useMemo, useState } from 'react';
import {
  dummyData,
  diagnosisNameMap,
  dummyDataByA,
  dummyDataByB,
  dummyDataByC,
  dummyDataByD,
} from './peoplesLogDummyData';
import { useNavigate, useSearchParams } from 'react-router-dom';

function PeoplesLog() {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);
<<<<<<< HEAD
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const categories = ['전체', '화농성', '염증성', '좁쌀'];
  // [TODO] dummyData로 임시 지정
=======

  const CATEGORY_MAP = {
    전체: 'all',
    화농성: 'pustules',
    염증성: 'papules',
    좁쌀: 'comedones',
    모낭염: 'follicultis',
  };
  const REVERSE_CATEGORY_MAP = Object.fromEntries(
    Object.entries(CATEGORY_MAP).map(([kr, en]) => [en, kr])
  );
  const categories = useMemo(() => ['전체', '화농성', '염증성', '좁쌀', '모낭염'], []);
  const urlAcneType = searchParams.get('acneType');
  const categoryByUrl = urlAcneType ? REVERSE_CATEGORY_MAP[urlAcneType] : undefined;
  const initialCategory =
    categoryByUrl && categories.includes(categoryByUrl) ? categoryByUrl : '전체';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);

  useEffect(() => {
    const currentUrlCode = searchParams.get('acneType');
    const categoryFromUrl = currentUrlCode ? REVERSE_CATEGORY_MAP[currentUrlCode] : '전체';
    const newCategory = categories.includes(categoryFromUrl) ? categoryFromUrl : '전체';

    if (selectedCategory !== newCategory) {
      setSelectedCategory(newCategory);
      setPage(1);
    }
  }, [searchParams]);

>>>>>>> 5dc804d39c739a7b3e9217ca4abbc37dd92c09c5
  const getCurrentData = () => {
    if (selectedCategory === '화농성') return dummyDataByA;
    if (selectedCategory === '염증성') return dummyDataByB;
    if (selectedCategory === '좁쌀') return dummyDataByC;
    if (selectedCategory === '모낭염') return dummyDataByD;
    return dummyData;
  };

  const { logList, totalPages } = getCurrentData()[page];

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
              if (cat === '전체') {
                setSearchParams({});
              } else {
                const englishCode = CATEGORY_MAP[cat as keyof typeof CATEGORY_MAP];
                setSearchParams({ acneType: englishCode });
              }
            }}
          >
            {cat}
          </S.Category>
        ))}
      </S.CategoryBox>

      <S.LogList>
        {logList.map((log) => (
          <S.LogItem
            name={log.name as 'A' | 'B' | 'C'}
            key={log.id}
            onClick={() => navigate(`/peoplesLog/${log.id}`)}
          >
            <S.LogImage src={log.image} alt={log.name} />
            <S.LogBox>
              <S.LogName type="name">
                <S.RoundBox type="name">진단명</S.RoundBox>
                {diagnosisNameMap[log.name]}
              </S.LogName>
              <S.LogName type="date">
                <S.RoundBox type="date">진단일</S.RoundBox>
                {log.date.replace(/-/g, '.')}
              </S.LogName>
            </S.LogBox>
          </S.LogItem>
        ))}
      </S.LogList>

      <S.PaginationWrapper>
        <Pagination count={totalPages} page={page} onChange={handlePageChange} />
      </S.PaginationWrapper>
    </S.Layout>
  );
}

export default PeoplesLog;
