import { useNavigate } from 'react-router-dom';
import * as S from './SkinDiagnosis.styles';
import XBtn from '../../assets/xIcon.svg';
import skinIcon from '../../assets/skinResult.svg';

function SkinDiagnosisResult() {
  const navigate = useNavigate();
  return (
    <S.Layout>
      <S.TitleLayout>
        <S.X_Icon onClick={() => navigate('/my')}>
          <img src={XBtn} alt="x-button" />
        </S.X_Icon>
        <S.Title>나의 피부 타입 진단하기</S.Title>
      </S.TitleLayout>
      <S.ResultLayout>
        <img src={skinIcon} alt="skin-icon" style={{ width: '100px' }} />
        <S.Result>
          홍길동 님의 피부타입은, <br /> <span style={{ color: 'red' }}>지성</span>입니다
        </S.Result>
      </S.ResultLayout>
    </S.Layout>
  );
}

export default SkinDiagnosisResult;
