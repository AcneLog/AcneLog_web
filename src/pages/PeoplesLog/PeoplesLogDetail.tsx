import { useNavigate, useParams } from 'react-router-dom';
import * as S from './PeoplesLogDetail.styles';
import { diagnosisDetailMap } from './peoplesLogDetailDummyData';
import xIcon from '../../assets/xIcon.svg';
const PeolesLogDetail = () => {
  const { id } = useParams();
  const data = diagnosisDetailMap[id!]; // `id`는 'log1' 같은 문자열
  const navigate = useNavigate();

  if (!data) return <p>데이터 없음</p>;

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
            {data.diagnosisName}
          </li>
          <hr style={{ border: 'none', borderTop: '0.1rem dashed #ccc', margin: '0rem 0 2rem' }} />
          <li>
            <S.BlackBadge>피플명</S.BlackBadge>
            <S.DiagnosisValue>{data.userNickname}</S.DiagnosisValue>
          </li>
          <S.BlackBadge>피부 타입</S.BlackBadge>
          <S.DiagnosisValue>{data.skinType}</S.DiagnosisValue>
          <li>
            <S.BlackBadge>진단일</S.BlackBadge>{' '}
            <S.DiagnosisValue>{data.diagnosedAt}</S.DiagnosisValue>
          </li>
        </S.DetailList>
        <S.Description>
          <h4 style={{ color: 'black', marginBottom: '0.5rem' }}>☝🏻 '{data.diagnosisName}'이란?</h4>
          {data.acneDescription}
        </S.Description>
      </S.InfoSection>

      <S.Title>치료 및 관리 가이드</S.Title>
      <S.TreatmentSection>
        <S.BlackBadge>치료법</S.BlackBadge>
        <div className="treatment-title">{data.treatment.title}</div>
        <div>{data.treatment.description}</div>
      </S.TreatmentSection>

      <S.ManagementSection>
        <S.BlackBadge>관리 가이드</S.BlackBadge>
        {data.managementTips.map((tip) => (
          <div key={tip.title}>
            <div style={{ marginBottom: '0.5rem' }}>
              <S.YellowBadge>✔ {tip.title}</S.YellowBadge>
            </div>
            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
              <li>{tip.description}</li>
            </ul>
          </div>
        ))}
      </S.ManagementSection>

      <S.Title>이 영상 추천해요!</S.Title>
      <S.RecommendSection>
        {data.recommendedVideos.map((video, idx) => (
          <div className="product-item" key={video.id}>
            <img src={video.thumbnailUrl} alt={`추천 영상 ${idx + 1} `} />
            <p> {video.title}</p>
          </div>
        ))}
      </S.RecommendSection>

      <S.Title>이 제품 추천해요!</S.Title>
      <S.RecommendSection>
        {data.recommendedProducts.map((product, idx) => (
          <div className="product-item" key={product.id}>
            <img src={product.imageUrl} alt={`추천 제품 ${idx + 1}`} />
            <p>{product.name}</p>
          </div>
        ))}
      </S.RecommendSection>
    </S.Content>
  );
};

export default PeolesLogDetail;
