import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 10rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background-color: #17171b;
  color: white;
  font-family: 'Playfair Display', serif;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.xs};
  // position: sticky;
  // top: 0;
  z-index: 10;
`;

export const HeaderListBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  p {
    font-size: ${({ theme }) => theme.fontSize.xxs};
  }
`;

export const Menu = styled.p<{ isActive?: boolean }>`
  font-family: 'Pretendard';
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -1.8rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2.8rem;
    height: 1.3rem;
    background-color: white;
    border-radius: 3.2rem 3.2rem 0 0;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -1.3rem;
    left: 50%;
    transform: translate(-50%, 25%);
    width: 0.8rem;
    height: 0.8rem;
    background-color: #17171b;
    border-radius: 3.2rem;
    opacity: ${({ isActive }) => (isActive ? 1 : 0)};
    z-index: 2;
  }
`;

export const WhiteBox = styled.div`
  background: #fcfcfc;
  width: 100%;
  height: 1.5rem;
  border-top-left-radius: 15rem;
  border-top-right-radius: 15rem;
`;
