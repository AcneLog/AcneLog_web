import styled from 'styled-components';

type BtnType = 'kakao' | 'google';

const BTN_STYLES: Record<BtnType, { bg: string; border: string }> = {
  kakao: { bg: '#fee500', border: 'none' },
  google: { bg: '#fff', border: '1px solid rgb(182, 175, 175)' },
};

interface LoginBtnProps {
  type: BtnType;
  $isSmall?: boolean;
}

export const MainContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 5rem 4rem;
  gap: 3.5rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${({ theme }) => theme.fontSize.sm};
  font-weight: bold;
  gap: 0.5rem;
`;

export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const LoginBtn = styled.div<LoginBtnProps>`
  display: flex;
  gap: 1.7rem;
  width: 100%;
  justify-content: ${({ $isSmall }) => ($isSmall ? 'center' : 'none')};
  align-items: center;
  padding: ${({ $isSmall }) => ($isSmall ? '1.3rem' : '1.3rem 4rem')};
  background: ${({ type }) => BTN_STYLES[type].bg};
  font-size: ${({ theme }) => theme.fontSize.xxs};
  border: ${({ type }) => BTN_STYLES[type].border};
  border-radius: 0.5rem;
  cursor: pointer;
  img {
    width: 1.5rem;
  }
`;
