import * as S from './SkinDiagnosis.styles';
import skinIcon from '../../assets/skinResult.svg';
import { useLocation, useNavigate } from 'react-router-dom';
import { SkinResultState } from '../../services/skinTypeService';

function SkinDiagnosisResult() {
  const location = useLocation();
  const navigate = useNavigate();
  // 피부 타입 진단하기 페이지에서 받아오는 진단 결과
  const state = (location.state as SkinResultState) || {};
  const skinType = state?.skinType;
  const memberName = state?.memberName;

  return (
    <S.Layout>
      <S.Title>나의 피부 타입 진단 결과</S.Title>

      <S.ResultLayout>
        <img src={skinIcon} alt="skin-icon" style={{ width: '110px' }} />
        <S.Result $skinType={skinType}>
          {memberName} 님의 피부타입은, <br />
          <S.SkinTypeColor $skinType={skinType}>{skinType}</S.SkinTypeColor> 입니다
        </S.Result>
      </S.ResultLayout>
      <S.BtnLayout>
        <S.Btn type="save" onClick={() => navigate('/')}>
          진단 완료하기
        </S.Btn>
      </S.BtnLayout>
    </S.Layout>
  );
}

export default SkinDiagnosisResult;
