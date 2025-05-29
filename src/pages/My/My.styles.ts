import styled from 'styled-components';

interface SkinTypeProps {
  skinType: string;
}

export const getColor = (skinType: string) => {
  if (skinType === '건성') return '#4E8CFF';
  if (skinType === '지성') return '#FF2D57';
  if (skinType === '수부지') return '#34A853';
  return '#888';
};

// 전체 컨테이너
export const MainContainer = styled.div`
  padding: 2rem 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// 점선 기준 위 컨테이너
export const SidebarContainer_1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

// 점선 기준 아래 컨테이너 (메뉴)
export const SidebarContainer_2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  p {
    font-size: ${({ theme }) => theme.fontSize.xms};
  }
`;

// '마이' 텍스트
export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

// 회색 박스
export const GreyBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  width: 100%;
  padding: 2.2rem 2rem;
  background-color: ${({ theme }) => theme.mainGrey};
  border-radius: 0.8rem;

  p {
    font-size: 0.9rem;
    font-weight: 800;
    color: ${({ theme }) => theme.greyFont1};
  }
`;

// [로그인X] 로그인 / 회원가입 버튼 텍스트
export const LoginBtn = styled.p`
  font-size: 0.9rem;
  font-weight: 800;
  color: ${({ theme }) => theme.greyFont1};
  cursor: pointer;
`;

// [로그인O] 회색 박스 컨테이너
export const GreyBoxLogin = styled.div<SkinTypeProps>`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  align-items: flex-end;
  p {
    color: black;
  }
`;

// 피부타입에 따른 텍스트 색상 효과
export const SkinTypeColor = styled.span<{ skinType: string }>`
  color: ${({ skinType }) => getColor(skinType)};
  font-weight: 900;
`;

// 로그아웃 버튼
export const bottomInfo = styled.p`
  color: ${({ theme }) => theme.greyFont1};
  font-size: 0.8rem;
  text-decoration: underline;
  cursor: pointer;
`;

// [로그인O] '나의 피부 타입 진단하기' 버튼
export const blackBox = styled.div`
  width: 100%;
  background: black;
  border-radius: 0.5rem;
  color: white;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  font-weight: bold;
`;

// [로그인O] '최근 검사일' 텍스트
export const blackBoxText = styled.div`
  color: black;
  font-size: 0.6rem;
  padding: 0.3rem;
`;

// [로그인O] '알림 수신 여부' 메뉴 컨테이너
export const switchBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
