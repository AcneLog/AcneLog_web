import { useNavigate } from 'react-router-dom';
import * as S from './SkinDiagnosis.styles';
import XBtn from '../../assets/xIcon.svg';
import skinIcon from '../../assets/skinResult.svg';
import { useState } from 'react';
import BasicModal from '../../components/common/BasicModal';

function SkinDiagnosisResult() {
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const skinType = '건성';

  const handleSave = () => {
    // 저장 로직 (비동기 처리 가능)
    setModalOpen(true); // 모달 열기
  };

  const handleConfirm = () => {
    setModalOpen(false);
    navigate('/'); // 홈으로 이동
  };

  return (
    <S.Layout>
      <S.TitleLayout>
        <S.X_Icon onClick={() => navigate('/my')}>
          <img src={XBtn} alt="x-button" />
        </S.X_Icon>
        <S.Title>나의 피부 타입 진단하기</S.Title>
      </S.TitleLayout>
      <S.ResultLayout>
        <img src={skinIcon} alt="skin-icon" style={{ width: '110px' }} />
        <S.Result skinType={skinType}>
          {' '}
          {/* [TODO] api: 사용자 이름 */}
          홍길동 님의 피부타입은, <br />{' '}
          <S.SkinTypeColor skinType={skinType}>{skinType}</S.SkinTypeColor> 입니다
        </S.Result>
      </S.ResultLayout>
      <S.BtnLayout>
        <S.Btn type="save" onClick={handleSave}>
          저장하기
        </S.Btn>
        <S.Btn type="home" onClick={() => navigate('/')}>
          홈
        </S.Btn>
      </S.BtnLayout>
      <BasicModal open={modalOpen} onClose={() => setModalOpen(false)} onConfirm={handleConfirm} />
    </S.Layout>
  );
}

export default SkinDiagnosisResult;
