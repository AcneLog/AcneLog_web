import styled from 'styled-components';

// 전체 레이아웃
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem 8rem 3rem;
  gap: 4rem;
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
export const Result = styled.div`
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: center;
  font-weight: bold;
  line-height: 1.5;
`;
