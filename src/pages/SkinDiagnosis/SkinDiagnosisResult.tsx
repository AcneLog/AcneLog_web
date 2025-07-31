import * as S from './SkinDiagnosis.styles';
import skinIcon from '../../assets/skinResult.svg';
import { useState } from 'react';
import BasicModal from '../../components/common/BasicModal';
import { useLocation } from 'react-router-dom';
import NotFound from '../NotFound';

function SkinDiagnosisResult() {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(false);

  // 피부 타입 진단하기 페이지에서 받아오는 진단 결과
  const { skinType } = location.state || {};

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
      message: '저장하시겠습니까?',
      confirmLink: `/`,
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

  // 만약, 잘못된 경로로 들어올 시 not found 페이지로 이동
  if (!skinType) {
    return <NotFound />;
  }

  return (
    <S.Layout>
      <S.Title>나의 피부 타입 진단 결과</S.Title>

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
        <S.Btn type="save" onClick={openSaveModal}>
          저장하기
        </S.Btn>
        <S.Btn type="home" onClick={openHomeModal}>
          홈
        </S.Btn>
      </S.BtnLayout>

      <BasicModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        message={modalConfig.message}
        confirmLink={modalConfig.confirmLink}
      />
    </S.Layout>
  );
}

export default SkinDiagnosisResult;
