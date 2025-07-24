import { useParams } from 'react-router-dom';
import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './MyLogDetail.styles';
import { MyLogDetailMap } from './MyLogDetailDummyData';
import { useState } from 'react';

const MyLogDetail = () => {
  const goToPage = useCustomNavigate();
  const { id } = useParams();
  const data = MyLogDetailMap[id!];
  const [isPublic, setIsPublic] = useState<'공개' | '비공개'>('공개');
  if (!data) return <p>데이터 없음</p>;

  return (
    <S.Content>
      <S.CloseButton onClick={() => goToPage('/peoplesLog')}>&times;</S.CloseButton>

      <S.Image src={data.imageUrl} alt="피부 사진" />

      <hr style={{ border: 'none', borderTop: '1px solid #ccc', margin: '1rem 0' }} />
      <S.InfoSection>
        <S.DetailList>
          <S.BlackBadge>진단일</S.BlackBadge> {data.diagnosedAt}
          <br />
          <S.BlackBadge>공개 여부</S.BlackBadge>
          <S.CustomRadio className="custom-radio">
            <input
              type="radio"
              name="visibility"
              value="공개"
              checked={isPublic === '공개'}
              onChange={() => setIsPublic('공개')}
            />
            공개
          </S.CustomRadio>
          <S.CustomRadio style={{ marginLeft: '1rem' }} className="custom-radio">
            <input
              type="radio"
              name="visibility"
              value="비공개"
              checked={isPublic === '비공개'}
              onChange={() => setIsPublic('비공개')}
            />
            비공개
          </S.CustomRadio>
          <br />
          <S.BlueBadge>진단명</S.BlueBadge>
          {data.diagnosisName}
          <br />
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

export default MyLogDetail;
