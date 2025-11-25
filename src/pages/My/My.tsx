import * as S from './My.styles';
import useCustomNavigate from '../../hooks/useNavigate';
import { useIsAuthed, useAuth } from '../../auth/authStore';
import { useEffect, useState } from 'react';
import { userService } from '../../services/userService';
import { skinTypeMap } from '../../constants/acneTypeMap';

function My() {
  const goToPage = useCustomNavigate();
  const isLoggedIn = useIsAuthed();
  const [name, setName] = useState<string>('사용자');
  const logout = useAuth((s) => s.logout);

  const [skinType, setSkinType] = useState<string>('');
  const [surveyTime, setsurveyTime] = useState<string>('');
  const hasSkinType = !!skinType;

  useEffect(() => {
    if (!isLoggedIn) return;

    (async () => {
      try {
        const res = await userService.getProfile();
        setName(res.name ?? '사용자');
        setSkinType(res?.skinType);
        setsurveyTime(res?.surveyTime);
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
                {hasSkinType ? (
                  <p>
                    나의 피부타입은 '
                    <S.SkinTypeColor $skinType={skinType}>
                      {skinTypeMap[skinType as keyof typeof skinTypeMap]}
                    </S.SkinTypeColor>
                    '
                  </p>
                ) : (
                  <S.showText>피부타입을 진단해보세요!</S.showText>
                )}
              </S.GreyBoxLogin>
              <S.dashedLine />
              {hasSkinType ? (
                <div>
                  <S.blackBoxText>최근 검사일 {surveyTime}</S.blackBoxText>
                  <S.blackBox onClick={() => goToPage('/skin')}>나의 피부 타입 진단하기</S.blackBox>
                </div>
              ) : (
                <div>
                  <S.blackBox onClick={() => goToPage('/skin')}>나의 피부 타입 진단하기</S.blackBox>
                </div>
              )}
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
            <p style={{ cursor: 'pointer' }}>개인정보보호처리방침</p>
          </>
        )}
      </S.SidebarContainer_2>
      {isLoggedIn && <S.bottomInfo onClick={logout}>로그아웃</S.bottomInfo>}
    </S.MainContainer>
  );
}

export default My;
