import styled from 'styled-components';

// 공고페이지 : main, 공고상세페이지 : detail
interface PageType {
  type: 'main' | 'detail';
}

// [공고페이지] 전체 레이아웃
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 3rem 8rem 3rem;
  gap: 0.5rem;
`;

// [공고상세페이지] 전체 레이아웃
export const Layout_Detail = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1rem 3rem 8rem 3rem;
`;

// [공고페이지] 타이틀 레이아웃
export const TitleLayout = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 5rem;
  border-bottom: 1.5px solid black;
`;

// [공고상세페이지] 타이틀 레이아웃
export const Title_Detail_Layout = styled.div`
  display: flex;
  flex-direction: column;
`;

// [공고페이지] 타이틀
export const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  width: 90%;
`;

// 공지사항 왼쪽 아이콘
export const LeftIcon = styled.div`
  width: 5%;
  padding-top: 0.5rem;
  img {
    width: 100%;
    height: 1.7rem;
    cursor: pointer;
  }
`;

// [공고페이지] 테이블 레이아웃
export const TableLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 0.2rem;
`;

// 개별 행
export const Notice = styled.div<PageType>`
  display: flex;
  flex-direction: column;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.3);
  gap: 0.8rem;
  padding: 1rem;
  cursor: ${({ type }) => (type === 'main' ? 'pointer' : 'default')};
`;

// 개별 행의 제목
export const NoticeTitle = styled.p<PageType>`
  font-size: ${({ type, theme }) => (type === 'main' ? theme.fontSize.xxs : theme.fontSize.xs)};
`;

// 개별 행의 글쓴이/날짜
export const NoticeDetailText = styled.p`
  padding-right: 0.3rem;
  color: ${({ theme }) => theme.greyFont1};
  font-weight: normal;
  font-size: 1rem;
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

// [공고상세페이지] 공고 내용
export const NoticeContent = styled.div`
  padding: 1rem;
  font-weight: normal;
  line-height: 1.8;
`;

// 페이지네이션 레이아웃
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;
