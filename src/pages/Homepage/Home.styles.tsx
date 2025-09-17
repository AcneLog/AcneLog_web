import styled from 'styled-components';

//섹션 공통
export const HomeSection = styled.div`
  padding: 1rem;
  width: 100%;
`;

//헤더 공통
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.65rem;
`;

//리스트 공통
export const List = styled.div`
  display: flex;
  gap: 0.55rem;
  overflow-x: auto;
`;
//전체보기 버튼
export const PeoplesLogButton = styled.button`
  background: none;
  border: none;
  font-size: 0.875rem;
  color: #888;
  cursor: pointer;
`;

//아이템-공통부분
export const Itm = styled.div`
  font-size: 1rem;
  width: 100%;
  text-align: center;
  cursor: pointer;
  img {
    padding: 0.2rem;
    border-radius: 1rem;
  }
`;

//피플즈로그 게시물 개수
export const PostCountText = styled.p`
  font-size: 0.75rem;
  color: #737373;
  margin-left: -2.5rem;
  margin-top: -0.4rem;
`;

export const TodaysItemItm = styled.div`
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
  img {
    padding: 0.2rem;
    border-radius: 0.75rem;
  }
  margin-bottom: 6.25rem;
`;
