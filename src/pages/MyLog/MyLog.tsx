import { useNavigate } from 'react-router-dom';
import * as S from './MyLog.styles';
import { useState } from 'react';
import {
  dummyData,
  diagnosisNameMap,
  dummyDataByA,
  dummyDataByB,
  dummyDataByC,
  dummyDataByD,
} from '../PeoplesLog/peoplesLogDummyData';
import { Pagination } from '@mui/material';

function MyLog() {
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
      <S.Title>총 4번의 진단</S.Title>
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
          <S.LogItem key={idx} onClick={() => navigate(`/myLog/${log.id}`)}>
            <S.LogImage src={log.image} alt={log.name} />
            <S.LogBox>
              <S.LogName type="black">
                <S.RoundBox type="name">진단명</S.RoundBox>
                {diagnosisNameMap[log.name]}
              </S.LogName>
              <S.LogName type="gray">
                <S.RoundBox type="date">진단일</S.RoundBox>
                {log.date.replace(/-/g, '.')}
              </S.LogName>
              <S.LogName type="gray">
                <S.RoundBox type="show">공개 여부</S.RoundBox>
                {log.show ? '공개' : '비공개'}
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

export default MyLog;
