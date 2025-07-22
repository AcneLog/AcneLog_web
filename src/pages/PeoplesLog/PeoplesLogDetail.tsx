import { useParams } from 'react-router-dom';
import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './PeoplesLogDetail.styles';
import { diagnosisDetailMap } from './peoplesLogDetailDummyData';

const PeolesLogDetail = () => {
  const goToPage = useCustomNavigate();
  const { id } = useParams();
  const data = diagnosisDetailMap[id!]; // `id`는 'log1' 같은 문자열

  if (!data) return <p>데이터 없음</p>;

  return (
    <S.Content>
      <S.CloseButton onClick={() => goToPage('/peoplesLog')}>&times;</S.CloseButton>

      <S.Image src={data.imageUrl} alt="피부 사진" />

      <S.InfoSection>
        <S.BlueBadge>진단명</S.BlueBadge>
        {data.diagnosisName}
        <br />

        <section>
          <p>
            <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '1rem 0' }} />
          </p>
        </section>
        <S.DetailList>
          <S.BlackBadge>피플명</S.BlackBadge> {data.userNickname}
          <br />
          <S.BlackBadge>피부 타입</S.BlackBadge> {data.skinType}
          <br />
          <S.BlackBadge>진단일</S.BlackBadge> {data.diagnosedAt}
        </S.DetailList>
        <S.Description>
          <h3>☝️ '{data.diagnosisName}'이란?</h3>
          <br />
          {data.acneDescription}
        </S.Description>
      </S.InfoSection>

      <S.Title>치료 및 관리 가이드</S.Title>
      <S.Section>
        <S.BlackBadge>치료법</S.BlackBadge>
        <br />
        {data.treatment.title}
        <br />
        {data.treatment.description}
      </S.Section>

      <S.Section>
        <S.BlackBadge>관리 가이드</S.BlackBadge>
        {data.managementTips.map((tip) => (
          <ul>
            <S.YellowBadge>✔ {tip.title}</S.YellowBadge>
            <li>{tip.description}</li>
          </ul>
        ))}
      </S.Section>

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
      <br />
      <br />
    </S.Content>
  );
};

export default PeolesLogDetail;
