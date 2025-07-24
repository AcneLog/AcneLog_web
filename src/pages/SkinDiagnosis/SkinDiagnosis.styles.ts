import styled from 'styled-components';

interface ButtonType {
  type: 'save' | 'home';
}

interface SkinTypeProps {
  skinType: string;
}

export const getColor = (skinType: string) => {
  if (skinType === '건성') return '#4E8CFF';
  if (skinType === '지성') return '#FF2D57';
  if (skinType === '수부지') return '#34A853';
  return '#888';
};

// 전체 레이아웃
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem 8rem 3rem;
  gap: 4.5rem;
`;

// [공고상세페이지] 타이틀 레이아웃
export const TitleLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// x 아이콘
export const X_Icon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  img {
    width: 10%;
    height: 1.5rem;
    cursor: pointer;
  }
`;

// [공고페이지] 타이틀
export const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.base};
`;

// [공고상세페이지] 타이틀 레이아웃
export const ResultLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

// [공고상세페이지] 타이틀 레이아웃
export const Result = styled.div<SkinTypeProps>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: center;
  font-weight: bold;
  line-height: 1.5;
`;

//
export const BtnLayout = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

export const Btn = styled.button<ButtonType>`
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  color: white;
  width: 10rem;
  background: ${({ type, theme }) => (type === 'save' ? theme.roundBlue : 'black')};
  font-size: 1rem;
  cursor: pointer;
`;

export const SkinTypeColor = styled.span<{ skinType: string }>`
  color: ${({ skinType }) => getColor(skinType)};
  font-weight: 900;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    rgba(255, 255, 0, 0.5) 60%,
    rgba(255, 255, 0, 0.5) 100%
  );
  display: inline;
`;
