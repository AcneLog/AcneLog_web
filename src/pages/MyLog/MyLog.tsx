import { useNavigate } from 'react-router-dom';
import * as S from './MyLog.styles';
import { useEffect, useState } from 'react';
import { diagnosisNameMap } from '../PeoplesLog/peoplesLogDummyData';
import { Pagination } from '@mui/material';
import { myLogService, MyLogResponse } from '../../services/myLogservice';

const categories = ['전체', '화농성', '염증성', '좁쌀'] as const;
type Category = (typeof categories)[number];

const categoryToTypeMap = {
  전체: 'ALL',
  화농성: 'PUSTULES',
  염증성: 'PAPULES',
  좁쌀: 'COMEDONES',
} as const;

function MyLog() {
  const navigate = useNavigate();

  // 모든 Hook은 조건문보다 위에 있어야 함
  const [page, setPage] = useState(1);
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
  };

  useEffect(() => {
    fetchMyLogData();
  }, [page, selectedCategory]);

  // Hook 아래에서 조건부 렌더
  if (!myLogResponse) return null;

  const { content, totalPages } = myLogResponse;

  const filteredList = content.map((item) => ({
    id: item.analysisId,
    image: item.imageUrl,
    name: item.acneType,
    date: item.createdAt?.slice(0, 10) ?? '0000-00-00',
    show: item.isPublic,
  }));

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  return (
    <S.Layout>
      <S.Title>총 번의 진단</S.Title>
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

      <S.LogList>
        {filteredList.map((log) => (
          <S.LogItem key={log.id} onClick={() => navigate(`/myLog/${log.id}`)}>
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
