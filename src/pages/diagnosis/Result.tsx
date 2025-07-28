import { useParams } from 'react-router-dom';
import * as S from './Result.styles';
import { resultMap } from './resultDummyData';
import { useState } from 'react';
import BasicModal from '../../components/common/BasicModal';

const Result = () => {
  const { id } = useParams(); // 주소창에서 /result/:id 를 가져옴
  const result = resultMap[id!]; // id에 해당하는 결과 불러오기

  // 모달 적용
  const [modalOpen, setModalOpen] = useState(false);
  const [modalConfig, setModalConfig] = useState<{
    message: string;
    confirmLink: string;
  }>({
    message: '',
    confirmLink: '/',
  });

  // 저장 버튼 모달
  const openSaveModal = () => {
    setModalConfig({
      message: '진단 결과를 저장하시겠습니까?',
      confirmLink: `/myLog`,
    });
    setModalOpen(true);
  };

  // 홈 버튼 모달
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
      <S.Title style={{ margin: '0 auto 2rem', width: 'fit-content' }}>진단 결과 확인하기</S.Title>

      <S.Image src={result.imageUrl} alt="사용자 업로드 이미지" />
      <hr style={{ border: 'none', borderTop: '0.1rem dotted #ccc', margin: '2rem 0' }} />

      <S.InfoSection>
        <S.BlackBadge>진단결과</S.BlackBadge>
        이미지 분석 결과,{'    '}
        <S.YellowBadge style={{ color: 'red' }}>{result.diagnosisName}</S.YellowBadge>일 확률이 가장
        높습니다.
        <S.Description>
          <h3 style={{ color: 'black' }}>☝️ '{result.diagnosisName}'이란?</h3>
          <br />
          {result.acneDescription}
        </S.Description>
      </S.InfoSection>

      <S.Title>치료 및 관리 가이드</S.Title>
      <S.TreatmentSection>
        <S.BlackBadge>치료법</S.BlackBadge>
        <br />
        {result.treatment.title}
        {result.treatment.description}
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

      {/* 모달 컴포넌트 */}
      <BasicModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        message={modalConfig.message}
        confirmLink={modalConfig.confirmLink}
      />

      <br />
      <br />
      <br />
      <br />
    </S.Content>
  );
};

export default Result;
