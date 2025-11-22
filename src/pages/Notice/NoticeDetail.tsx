// import { useParams } from 'react-router-dom';
import * as S from './Notice.styles';
import XBtn from '../../assets/xIcon.svg';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Notice, noticeDetailService } from '../../services/noticeService';

function NoticeDetail() {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<Notice | null>(null);
  useEffect(() => {
    (async () => {
      try {
        if (!id) return;
        const boardId = Number(id);
        const data = await noticeDetailService.getNoticeDetail(boardId);
        setData(data);
      } catch (e) {
        console.error('공지사항 상세내용 불러오기 실패', e);
      }
    })();
  }, [id]);
  const navigate = useNavigate();

  return (
    <S.Layout_Detail>
      <S.Title_Detail_Layout>
        <S.X_Icon onClick={() => navigate(-1)}>
          <img src={XBtn} alt="x-button" />
        </S.X_Icon>
        <S.Notice type="detail">
          <S.NoticeTitle type="detail">{data?.title}</S.NoticeTitle>
          <div style={{ display: 'flex', paddingLeft: '0.1rem' }}>
            <S.NoticeDetailText> 아크네주인장 </S.NoticeDetailText>
            <S.NoticeDetailText>{data?.updatedAt.split('T')[0]}</S.NoticeDetailText>
          </div>
        </S.Notice>
      </S.Title_Detail_Layout>
      <S.NoticeContent>{data?.content}</S.NoticeContent>
    </S.Layout_Detail>
  );
}

export default NoticeDetail;
