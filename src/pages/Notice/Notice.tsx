import * as S from './Notice.styles';
import leftBtn from '../../assets/leftIcon.svg';
import Pagination from '@mui/material/Pagination';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Notice, NoticeListResponse, noticeService } from '../../services/noticeService';

function NoticePage() {
  const navigate = useNavigate();
  const [noticeData, setNoticeData] = useState<Notice[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(1);
  const size = 10; // 한 페이지당 공지사항 수

  useEffect(() => {
    const apiPage = page - 1;
    (async () => {
      try {
        const res: NoticeListResponse = await noticeService.getNoticeList(apiPage, size);

        setNoticeData(res.content);
        setTotalPages(res.totalPages);
      } catch (e) {
        console.error('공지사항 목록 불러오기 실패', e);
      }
    })();
  }, [page]);

  const handleClick = (id: number) => {
    navigate(`/notice/${id}`);
  };
  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  return (
    <S.Layout>
      <S.TitleLayout>
        <S.LeftIcon onClick={() => navigate(-1)}>
          <img src={leftBtn} alt="left-icon" />
        </S.LeftIcon>
        <S.Title>공지사항</S.Title>
      </S.TitleLayout>

      <S.TableLayout>
        {noticeData &&
          noticeData.map((notice) => (
            <S.Notice type="main" key={notice.boardId} onClick={() => handleClick(notice.boardId)}>
              <S.NoticeTitle type="main">{notice.title}</S.NoticeTitle>
              <div style={{ display: 'flex' }}>
                <S.NoticeDetailText>{notice.updatedAt.split('T')[0]}</S.NoticeDetailText>
              </div>
            </S.Notice>
          ))}
      </S.TableLayout>

      <S.PaginationWrapper>
        <Pagination count={totalPages} page={page} onChange={handlePageChange} />
      </S.PaginationWrapper>
    </S.Layout>
  );
}

export default NoticePage;
