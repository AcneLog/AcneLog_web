import * as S from './Notice.styles';
import leftBtn from '../../assets/leftIcon.svg';
import { useNavigate } from 'react-router-dom';

function Notice() {
  // [TODO] 더미데이터 (삭제 예정)
  const noticeData = [
    { id: 1, title: '서비스 점검 안내', author: '아크네로그장', date: '2025-07-24' },
    { id: 2, title: '신규 기능 출시', author: '아크네로그장', date: '2025-07-20' },
    { id: 3, title: '이용약관 변경 안내', author: '아크네로그장', date: '2025-07-15' },
    { id: 4, title: '서비스 점검 안내', author: '아크네로그장', date: '2025-07-24' },
    { id: 5, title: '신규 기능 출시', author: '아크네로그장', date: '2025-07-20' },
    { id: 6, title: '이용약관 변경 안내', author: '아크네로그장', date: '2025-07-15' },
  ];

  const navigate = useNavigate();

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
          <S.Notice type="main" key={notice.id} onClick={() => handleClick(notice.id)}>
            <S.NoticeTitle type="main">{notice.title}</S.NoticeTitle>
            <div style={{ display: 'flex' }}>
              <S.NoticeDetailText>{notice.author} | </S.NoticeDetailText>
              <S.NoticeDetailText>{notice.date}</S.NoticeDetailText>
            </div>
          </S.Notice>
        ))}
      </S.TableLayout>
    </S.Layout>
  );
}

export default Notice;
