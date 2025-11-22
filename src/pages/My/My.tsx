import * as S from './My.styles';
import useCustomNavigate from '../../hooks/useNavigate';
import Switch from '@mui/material/Switch';
import { useIsAuthed, useAuth } from '../../auth/authStore';
import { useEffect, useState } from 'react';
import { userService } from '../../services/userService';

function My() {
  const goToPage = useCustomNavigate();
  const isLoggedIn = useIsAuthed();
  const [name, setName] = useState<string>('사용자');
  const logout = useAuth((s) => s.logout);

  // [TODO] api: 사용자 피부타입
  const skinType = '건성';

  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      try {
        const res = await userService.getProfile();
        setName(res.name ?? '사용자');
      } catch (e) {
        console.error('프로필 불러오기 실패:', e);
      }
    })();
  }, [isLoggedIn]);

  return (
    <S.MainContainer>
      <S.SidebarContainer_1>
        <S.Title>마이</S.Title>
        <S.GreyBox>
          {!isLoggedIn ? (
            <>
              <h2>로그인해주세요</h2>
              <S.LoginBtn onClick={() => goToPage('/login')}>로그인 / 회원가입 {'>'}</S.LoginBtn>
            </>
          ) : (
            <>
              <S.GreyBoxLogin $skinType={skinType}>
                <h2>{name} 님, 반갑습니다</h2>
                <p>
                  나의 피부타입은 '
                  <S.SkinTypeColor $skinType={skinType}>{skinType}</S.SkinTypeColor>'
                </p>
              </S.GreyBoxLogin>
              <S.dashedLine />
              <div>
                {/* [TODO] api: 피부타입 검사일 */}
                <S.blackBoxText>최근 검사일 2025-04-11</S.blackBoxText>
                <S.blackBox onClick={() => goToPage('/skin')}>나의 피부 타입 진단하기</S.blackBox>
              </div>
            </>
          )}
        </S.GreyBox>
      </S.SidebarContainer_1>
      <S.dashedLine />
      <S.SidebarContainer_2>
        {!isLoggedIn ? (
          <>
            <p style={{ cursor: 'pointer' }} onClick={() => goToPage('/myLog')}>
              나의 진단로그
            </p>
            <p style={{ cursor: 'pointer' }} onClick={() => goToPage('/skin')}>
              나의 피부 타입 진단하기
            </p>
            <p style={{ cursor: 'pointer' }} onClick={() => goToPage('/notice')}>
              공지사항
            </p>
          </>
        ) : (
          <>
            <p style={{ cursor: 'pointer' }} onClick={() => goToPage('/myLog')}>
              나의 진단로그
            </p>
            <p style={{ cursor: 'pointer' }} onClick={() => goToPage('/notice')}>
              공지사항
            </p>
            <S.switchBar>
              <p>알림 수신 여부</p>
              <Switch />
            </S.switchBar>
            <p style={{ cursor: 'pointer' }}>개인정보보호처리방침</p>
          </>
        )}
      </S.SidebarContainer_2>
      {isLoggedIn && <S.bottomInfo onClick={logout}>로그아웃</S.bottomInfo>}
    </S.MainContainer>
  );
}

export default My;
