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
  flex-direction: row;
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
    width: 100%;
    height: 8.75rem;
    object-fit: cover;
    border-radius: 1rem;
  }
  p {
    font-size: 0.875rem; // 14px 정도
    line-height: 1.2;
    text-align: center;

    /* 글자 길이 일정하게 표시 */
    display: -webkit-box;
    -webkit-line-clamp: 2; // 2줄까지만 표시
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
export const SharpIcon = styled.span`
  img {
    width: 1.7rem;
    height: 1.7rem;
  }
`;
//피플즈로그 게시물 개수
export const PostCountText = styled.p`
  font-size: 0.75rem;
  color: #737373;
  margin-right: 1.4rem;
  font-weight: normal;
`;

export const TodaysItemItm = styled.div`
  font-size: 1rem;
  width: 100%;
  cursor: pointer;
  img {
    width: 100%;
    height: 8.75rem; // 이미지 영역
    object-fit: cover; // 영역에 맞게 자르기
    border-radius: 1rem;
  }
  p {
    margin-top: 0.5rem;
    font-size: 0.875rem; // 14px 정도
    line-height: 1.2;
    text-align: center;

    /* 글자 길이 일정하게 표시 */
    display: -webkit-box;
    -webkit-line-clamp: 2; // 2줄까지만 표시
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  margin-bottom: 6.25rem;
  text-align: center;
`;
