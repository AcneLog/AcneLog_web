import * as S from './Notice.styles';
import leftBtn from '../../assets/leftIcon.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Notice, noticeService } from '../../services/noticeService';

function NoticePage() {
  const navigate = useNavigate();
  const [noticeData, setNoticeData] = useState<Notice[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await noticeService.getNoticeList();
        setNoticeData(data);
      } catch (e) {
        console.error('공지사항 목록 불러오기 실패', e);
      }
    })();
  }, []);
  const handleClick = (id: number) => {
    navigate(`/notice/${id}`);
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
        {noticeData.map((notice) => (
          <S.Notice type="main" key={notice.boardId} onClick={() => handleClick(notice.boardId)}>
            <S.NoticeTitle type="main">{notice.title}</S.NoticeTitle>
            <div style={{ display: 'flex' }}>
              <S.NoticeDetailText>{notice.updatedAt.split('T')[0]}</S.NoticeDetailText>
            </div>
          </S.Notice>
        ))}
      </S.TableLayout>
    </S.Layout>
  );
}

export default NoticePage;
