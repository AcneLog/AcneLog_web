import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './Result.styles';
import BasicModal from '../../components/common/BasicModal';
import { useState } from 'react';
import { acneTypeMap } from '../../constants/acneTypeMap';
import { AnalysisResult } from '../../services/diagnosisService';
import { myLogPublicService } from '../../services/myLogservice';

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const result = location.state?.result as AnalysisResult | null;
  const openHomeModal = () => setModalOpen(true);
  // 예 버튼 동작
  const handleConfirm = () => {
    setModalOpen(false);
    navigate('/');
  };
  // 아니오 버튼 동작
  const handleReject = async () => {
    try {
      if (!result) return;
      await myLogPublicService.patchMyLogPublic(result.analysisId, false);
    } catch (e) {
      console.error(e);
    } finally {
      setModalOpen(false);
      navigate('/');
    }
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
          <S.YellowBadge style={{ color: 'red' }}>
            {acneTypeMap[result.acneType as keyof typeof acneTypeMap]}
          </S.YellowBadge>
          일 확률이 가장 높습니다.
        </div>
        <S.Description>
          <h4 style={{ color: '#17171b', marginBottom: '0.5rem' }}>
            ☝🏻 ' {acneTypeMap[result.acneType as keyof typeof acneTypeMap]}' 이란?
          </h4>
          {result.description}
        </S.Description>
      </S.InfoSection>

      <S.Title>치료 및 관리 가이드</S.Title>
      <S.TreatmentSection>
        <S.BlackBadge>치료법</S.BlackBadge>
        {/* <div className="treatment-title">{result.careMethod}</div> */}
        <div>{result.careMethod}</div>
      </S.TreatmentSection>

      <S.ManagementSection>
        <S.BlackBadge>관리 가이드</S.BlackBadge>
        <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
          <li>{result.guide}</li>
        </ul>
      </S.ManagementSection>

      <S.Title>이 영상 추천해요!</S.Title>
      <S.RecommendSection>
        {result.videoList.map((video, idx) => (
          <S.ImgDiv
            className="product-item"
            key={video.videoId}
            onClick={() => window.open(video.videoUrl, '_blank')}
          >
            <img src={video.thumbnailUrl} alt={`추천 영상 ${idx + 1}`} />
            <p>{video.videoTitle}</p>
          </S.ImgDiv>
        ))}
      </S.RecommendSection>

      <S.Title>이 제품 추천해요!</S.Title>
      <S.RecommendSection>
        {result.productList.map((product, idx) => (
          <S.ImgDiv
            className="product-item"
            key={product.productId}
            onClick={() => window.open(product.productUrl, '_blank')}
          >
            <img src={product.productImage} alt={`추천 제품 ${idx + 1}`} />
            <p>{product.productName}</p>
          </S.ImgDiv>
        ))}
      </S.RecommendSection>

      <S.ButtonSection>
        <S.BlackButton onClick={openHomeModal}>홈으로 돌아가기</S.BlackButton>
      </S.ButtonSection>

      <BasicModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        message="진단 결과를 공개하시겠습니까?"
        onConfirm={handleConfirm}
        onReject={handleReject}
      />
    </S.Content>
  );
};

export default Result;
