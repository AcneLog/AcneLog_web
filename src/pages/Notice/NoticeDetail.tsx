// import { useParams } from 'react-router-dom';
import * as S from './Notice.styles';
import XBtn from '../../assets/xIcon.svg';
import { useNavigate } from 'react-router-dom';

function NoticeDetail() {
  // [TODO] 더미데이터 (삭제 예정)
  const data = {
    id: 1,
    title: '서비스 점검 안내',
    content:
      '2025년 7월 25일 새벽 2시에 점검이 있습니다. 2025년 7월 25일 새벽 2시에 점검이 있습니다. 2025년 7월 25일 새벽 2시에 점검이 있습니다. 2025년 7월 25일 새벽 2시에 점검이 있습니다.',
    author: '관리자',
    date: '2025-07-24',
  };

  const navigate = useNavigate();
  //   const { id } = useParams<{ id: string }>();

  return (
    <S.Layout_Detail>
      <S.Title_Detail_Layout>
        <S.X_Icon onClick={() => navigate(-1)}>
          <img src={XBtn} alt="x-button" />
        </S.X_Icon>
        <S.Notice type="detail">
          <S.NoticeTitle type="detail">{data.title}</S.NoticeTitle>
          <div style={{ display: 'flex', paddingLeft: '0.1rem' }}>
            <S.NoticeDetailText>{data.author} | </S.NoticeDetailText>
            <S.NoticeDetailText>{data.date}</S.NoticeDetailText>
          </div>
        </S.Notice>
      </S.Title_Detail_Layout>
      <S.NoticeContent>{data.content}</S.NoticeContent>
    </S.Layout_Detail>
  );
}

export default NoticeDetail;
