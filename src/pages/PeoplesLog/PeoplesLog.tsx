import * as S from './PeoplesLog.styles';
import Pagination from '@mui/material/Pagination';
import React, { useState } from 'react';
import {
  dummyData,
  diagnosisNameMap,
  dummyDataByA,
  dummyDataByB,
  dummyDataByC,
  dummyDataByD,
} from './peoplesLogDummyData';
import { useNavigate } from 'react-router-dom';

function PeoplesLog() {
  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const categories = ['전체', '화농성', '염증성', '좁쌀', '모낭염'];

  // [TODO] dummyData로 임시 지정
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
            isSelected={selectedCategory === cat}
            onClick={() => {
              setSelectedCategory(cat);
              setPage(1);
            }}
          >
            {cat}
          </S.Category>
        ))}
      </S.CategoryBox>

      <S.LogList>
        {logList.map((log, idx) => (
          <S.LogItem
            name={log.name as 'A' | 'B' | 'C'}
            key={idx}
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
