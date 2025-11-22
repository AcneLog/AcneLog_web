import { useNavigate, useParams } from 'react-router-dom';
import * as S from './PeoplesLogDetail.styles';
import xIcon from '../../assets/xIcon.svg';
import { useEffect, useState } from 'react';
import { peoplesLogDetailService, PeopleslogItem } from '../../services/peopleslogService';
const PeolesLogDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [peopleslogDetail, setPeopleslogDetail] = useState<PeopleslogItem | null>(null);
  useEffect(() => {
    const fetchPeopleslogData = async () => {
      try {
        const data = await peoplesLogDetailService.peopleslogMyLogDetail(id!);
        setPeopleslogDetail(data);
      } catch (err) {
        console.error('API 호출 오류:', err);
      }
    };

    fetchPeopleslogData();
  }, [id]);
  if (!peopleslogDetail) return <p>데이터 없음</p>;
  const data = peopleslogDetail;
  return (
    <S.Content>
      <S.CloseButton onClick={() => navigate(-1)}>
        <img src={xIcon} />
      </S.CloseButton>

      <S.Image src={data.imageUrl} alt="피부 사진" />

      <S.InfoSection>
        <S.DetailList>
          <li>
            <S.BlueBadge>진단명</S.BlueBadge>
            {data.acneType}
          </li>
          <hr style={{ border: 'none', borderTop: '0.1rem dashed #ccc', margin: '0rem 0 2rem' }} />
          <li>
            <S.BlackBadge>피플명</S.BlackBadge>
            <S.DiagnosisValue>{data.userName ? data.userName : '사용자 이름'}</S.DiagnosisValue>
          </li>
          <S.BlackBadge>피부 타입</S.BlackBadge>
          <S.DiagnosisValue>{data.skinType}</S.DiagnosisValue>
          <li>
            <S.BlackBadge>진단일</S.BlackBadge>{' '}
            <S.DiagnosisValue>{data.createdAt}</S.DiagnosisValue>
          </li>
        </S.DetailList>
        <S.Description>
          <h4 style={{ color: '#17171b', marginBottom: '0.5rem' }}>☝🏻 '{data.acneType}'이란?</h4>
          {data.description}
        </S.Description>
      </S.InfoSection>

      <S.Title>치료 및 관리 가이드</S.Title>
      <S.TreatmentSection>
        <S.BlackBadge>치료법</S.BlackBadge>
        <div>{data.careMethod}</div>
      </S.TreatmentSection>

      <S.ManagementSection>
        <S.BlackBadge>관리 가이드</S.BlackBadge>
        {data.guide}
        <S.YellowBadge>✔ {data.guide}</S.YellowBadge>
        <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
          <li>{data.guide}</li>
        </ul>
      </S.ManagementSection>

      <S.Title>이 영상 추천해요!</S.Title>
      <S.RecommendSection>
        {data.videoList.map((video, idx) => (
          <div
            className="product-item"
            key={video.videoId}
            onClick={() => window.open(video.videoUrl, '_blank')}
          >
            <img src={video.thumbnailUrl} alt={`추천 영상 ${idx + 1} `} />
            <p> {video.videoTitle}</p>
          </div>
        ))}
      </S.RecommendSection>

      <S.Title>이 제품 추천해요!</S.Title>
      <S.RecommendSection>
        {data.productList.map((product, idx) => (
          <div
            className="product-item"
            key={product.productId}
            onClick={() => window.open(product.productUrl, '_blank')}
          >
            <img src={product.productImage} alt={`추천 제품 ${idx + 1}`} />
            <p>{product.productName}</p>
          </div>
        ))}
      </S.RecommendSection>
    </S.Content>
  );
};

export default PeolesLogDetail;
