import { useLocation } from 'react-router-dom';
import * as S from './Header.styles';
import useCustomNavigate from '../../hooks/useNavigate';

function Header() {
  const location = useLocation();
  const goToPage = useCustomNavigate();

  return (
    <S.HeaderContainer>
      <p style={{ padding: '1rem', cursor: 'pointer' }} onClick={() => goToPage('/')}>
        AcneLog
      </p>
      <S.HeaderListBox>
        <S.Menu
          $isActive={location.pathname.startsWith('/diagnosis')}
          onClick={() => goToPage('/diagnosis')}
        >
          아크네 진단
        </S.Menu>
        <S.Menu $isActive={location.pathname === '/'} onClick={() => goToPage('/')}>
          홈
        </S.Menu>
        <S.Menu
          $isActive={location.pathname.startsWith('/myLog')}
          onClick={() => goToPage('/myLog')}
        >
          나의 진단로그
        </S.Menu>
      </S.HeaderListBox>
      <S.WhiteBox />
    </S.HeaderContainer>
  );
}
export default Header;
