import styled from 'styled-components';
import { breakpoints } from '../../styles/theme';
interface CategoryProps {
  $isSelected: boolean;
}

interface LogTextProps {
  type: 'black' | 'gray';
}

// 박스 안 라운드 타입
interface BoxType {
  type: 'name' | 'date' | 'show';
}

// 전체 레이아웃
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem 8rem 3rem;
  gap: 1.2rem;
`;

// 타이틀
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xms};
`;

// 카테고리 박스
export const CategoryBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

// 카테고리
export const Category = styled.button<CategoryProps>`
  padding: 0.6rem 0;
  width: 5.5rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;

  background-color: ${({ $isSelected, theme }) => ($isSelected ? '#17171b' : theme.mainGrey)};
  color: ${({ $isSelected }) => ($isSelected ? 'white' : '#17171b')};
`;

// 2x2 grid box
export const LogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 100%;
  box-sizing: border-box;
  @media (max-width: ${breakpoints.mobile}) {
    grid-template-columns: 1fr;
`;

// 각 아이템 박스
// [TODO] 실제 enum 타입으로 변경
export const LogItem = styled.li`
  border: 1px solid #b3cdf1ff;
  border-radius: 1.5rem;
  padding: 1.5rem;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.3rem;
  cursor: pointer;
  &:hover {
    background: #f1f4f8;
  }
`;

// 진단명, 진단일 담는 박스
export const LogBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

// 진단명, 진단일 텍스트
export const LogName = styled.div<LogTextProps>`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: ${({ type }) => (type === 'black' ? '#17171b' : 'gray')};
  font-weight: ${({ type }) => (type === 'black' ? 'bold' : 'normal')};
`;

// 페이지네이션 레이아웃
export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

// 아이템 박스 내부 이미지
export const LogImage = styled.img`
  width: 100%;
  height: 10rem;
  object-fit: cover;
  border-radius: 1rem;
`;

// 라운드 틀
export const RoundBox = styled.div<BoxType>`
  font-size: 0.75rem;
  width: 4rem;
  font-weight: bold;
  border-radius: 1rem;
  color: #17171b;
  padding: 0.4rem 0.5rem;
  background: ${({ type }) => {
    switch (type) {
      case 'name':
        return '#d1bbffff';
      case 'date':
        return '#80C4FF';
      case 'show':
        return '#B2DCFF';
      default:
        return 'black';
    }
  }};
`;

export const NoDataBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 6rem 0rem;
  gap: 2rem;
`;
