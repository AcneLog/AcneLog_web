import { useLocation } from 'react-router-dom';
import * as S from './Result.styles';
import BasicModal from '../../components/common/BasicModal';
import { Result as ResultType } from './resultDummyData';
import { useState } from 'react';

const Result = () => {
  const location = useLocation();
  const result = location.state?.result as ResultType | undefined;

  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState({
    message: '',
    confirmLink: '/',
  });

  const openSaveModal = () => {
    setModalConfig({
      message: '진단 결과를 저장하시겠습니까?',
      confirmLink: `/myLog`,
    });
    setModalOpen(true);
  };

  const openHomeModal = () => {
    setModalConfig({
      message: '진단 결과가 저장되지 않습니다. \n그래도 나가시겠습니까?',
      confirmLink: '/',
    });
    setModalOpen(true);
  };

  if (!result) return <p>결과를 찾을 수 없습니다.</p>;

  return (
    <S.Content>
      <S.TitleSection>
        <h2>진단 결과 확인하기</h2>
      </S.TitleSection>

      <S.Image src={result.imageUrl} alt="업로드 이미지" />
      <hr style={{ border: 'none', borderTop: '0.1rem dashed #ccc', margin: '2rem 0 2rem' }} />
      <S.InfoSection>
        <div style={{ fontWeight: 'normal' }}>
          <S.BlackBadge>진단결과</S.BlackBadge> 이미지 분석 결과,
          <S.YellowBadge style={{ color: 'red' }}>{result.diagnosisName}</S.YellowBadge>일 확률이
          가장 높습니다.
        </div>
        <S.Description>
          <h4 style={{ color: '#17171b', marginBottom: '0.5rem' }}>
            ☝🏻 '{result.diagnosisName}' 이란?
          </h4>
          {result.acneDescription}
        </S.Description>
      </S.InfoSection>

      <S.Title>치료 및 관리 가이드</S.Title>
      <S.TreatmentSection>
        <S.BlackBadge>치료법</S.BlackBadge>
        <div className="treatment-title">{result.treatment.title}</div>
        <div>{result.treatment.description}</div>
      </S.TreatmentSection>

      <S.ManagementSection>
        <S.BlackBadge>관리 가이드</S.BlackBadge>
        {result.managementTips.map((tip) => (
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
        {result.recommendedVideos.map((video, idx) => (
          <div className="product-item" key={video.id}>
            <img src={video.thumbnailUrl} alt={`추천 영상 ${idx + 1}`} />
            <p>{video.title}</p>
          </div>
        ))}
      </S.RecommendSection>

      <S.Title>이 제품 추천해요!</S.Title>
      <S.RecommendSection>
        {result.recommendedProducts.map((product, idx) => (
          <div className="product-item" key={product.id}>
            <img src={product.imageUrl} alt={`추천 제품 ${idx + 1}`} />
            <p>{product.name}</p>
          </div>
        ))}
      </S.RecommendSection>

      <S.ButtonSection>
        <S.BlueButton onClick={openSaveModal}>저장하기</S.BlueButton>
        <S.BlackButton onClick={openHomeModal}>홈으로 돌아가기</S.BlackButton>
      </S.ButtonSection>

      <BasicModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        message={modalConfig.message}
        confirmLink={modalConfig.confirmLink}
      />
    </S.Content>
  );
};

export default Result;
