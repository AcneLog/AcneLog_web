import * as S from './Login.styles';
import Kakao from '../../assets/kakao.svg';
import Google from '../../assets/google.svg';
import { useMediaQuery } from '@mui/material';
import { authService } from '../../services/authService';

const LOGIN_ORIGIN = import.meta.env.VITE_ORIGIN;

function Login() {
  const isSmall = useMediaQuery('(max-width:530px)');

  const handleLogin = async (provider: 'kakao' | 'google') => {
    try {
      const redirectUri = `${LOGIN_ORIGIN}/login/callback/${provider}`;
      const url = await authService.getAuthorizeUrl(provider, redirectUri);
      window.location.assign(url);
    } catch (e) {
      console.error(e);
      alert('로그인에 실패했습니다.');
    }
  };

  return (
    <S.MainContainer>
      <S.TextContainer>
        <p>3초만에 로그인하고</p>
        <p>AcneLog를 시작해보세요!</p>
      </S.TextContainer>
      <S.BtnContainer>
        <S.LoginBtn type="kakao" $isSmall={isSmall} onClick={() => handleLogin('kakao')}>
          <img src={Kakao} alt="kakao" />
          <span>{isSmall ? '카카오 로그인하기' : '카카오로 3초만에 로그인하기'}</span>
        </S.LoginBtn>
        <S.LoginBtn type="google" $isSmall={isSmall} onClick={() => handleLogin('google')}>
          <img src={Google} alt="google" />
          <span>{isSmall ? '구글 로그인하기' : '구글 계정으로 3초만에 로그인하기'}</span>
        </S.LoginBtn>
      </S.BtnContainer>
    </S.MainContainer>
  );
}

export default Login;
