import styled from 'styled-components';

export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 50%;
  width: 100%;
  background-color: ${({ theme }) => theme.mainGrey};
  text-align: center;
  padding: 0.8rem;
  box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.1);
  transform: translateX(-50%);
  max-width: 600px;
  display: flex;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

export const ContainerBox = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;
`;

export const PointerBox = styled.div`
  cursor: pointer;
  img {
    cursor: pointer;
  }
`;
