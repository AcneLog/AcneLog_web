import styled from 'styled-components';

//섹션 공통
export const HomeSection = styled.div`
  padding: 1rem 1rem 2rem 1rem;
  width: 100%;
`;

//헤더 공통
export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.65rem;
  padding: 0 0.7rem;
`;

//리스트 공통
export const List = styled.div`
  display: flex;
  gap: 0.4rem;
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
    margin-bottom: 0.3rem;
    border-radius: 1.7rem;
  }
`;

//피플즈로그 게시물 개수
export const PostCountText = styled.p`
  font-size: 0.75rem;
  color: #737373;
  margin-right: 2.5rem;
  margin-top: -0.2rem;
  font-weight: normal;
`;

export const TodaysItemItm = styled.div`
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
  img {
    border-radius: 1.7rem;
  }
  margin-bottom: 6.25rem;
  text-align: center;
`;
