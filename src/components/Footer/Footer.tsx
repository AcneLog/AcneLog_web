import * as S from './Footer.styles';
import Home from '../assets/footerHome.svg';
import My from '../assets/footerMy.svg';
import useCustomNavigate from '../../hooks/useNavigate';

function Footer() {
  const goToPage = useCustomNavigate();

  return (
    <S.FooterContainer>
      <S.ContainerBox>
        <S.PointerBox onClick={() => goToPage('/')}>
          <img src={Home} alt="Home-button" style={{ width: '2rem' }} />
          <p>홈</p>
        </S.PointerBox>
      </S.ContainerBox>
      <S.ContainerBox>
        <S.PointerBox onClick={() => goToPage('/my')}>
          <img src={My} alt="My-button" style={{ width: '1.3rem' }} />
          <p>마이</p>
        </S.PointerBox>
      </S.ContainerBox>
    </S.FooterContainer>
  );
}
export default Footer;
