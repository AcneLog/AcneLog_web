import styled from 'styled-components';

interface CategoryProps {
  isSelected: boolean;
}

interface LogTextProps {
  type: 'name' | 'date';
}

// [TODO] 실제 enum 타입으로 변경
interface LogItemProps {
  name: 'A' | 'B' | 'C';
}

// 전체 레이아웃
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem 8rem 3rem;
  gap: 1.2rem;
`;

// 피플즈로그 타이틀
export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

// 카테고리 박스
export const CategoryBox = styled.div`
  display: flex;
  gap: 0.5rem;
`;

// 카테고리
export const Category = styled.button<CategoryProps>`
  padding: 0.7rem 1.7rem;
  border-radius: 1rem;
  border: none;
  cursor: pointer;

  background-color: ${({ isSelected, theme }) => (isSelected ? 'black' : theme.mainGrey)};
  color: ${({ isSelected }) => (isSelected ? 'white' : 'black')};
`;

// 2x2 grid box
export const LogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 100%;
  box-sizing: border-box;
`;

// 각 아이템 박스
// [TODO] 실제 enum 타입으로 변경
export const LogItem = styled.li<LogItemProps>`
  border: 2px solid
    ${({ name }) => {
      switch (name) {
        case 'A':
          return '#FFBFBF';
        case 'B':
          return '#A6E0FF';
        case 'C':
          return '#C9C9C9';
        default:
          return '#ccc';
      }
    }};
  border-radius: 1rem;
  padding: 2rem 1.5rem;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1.5rem;
  cursor: pointer;
`;

// 진단명, 진단일 담는 박스
export const LogBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

// 진단명, 진단일 텍스트
export const LogName = styled.div<LogTextProps>`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  color: ${({ type }) => (type === 'name' ? 'black' : 'gray')};
  font-weight: ${({ type }) => (type === 'name' ? 'bold' : 'normal')};
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
  height: 12rem;
  object-fit: cover;
  border-radius: 0.5rem;
`;

// 진단명, 진단일 라운드 틀
export const RoundBox = styled.div`
  font-size: 0.7rem;
  font-weight: bold;
  border-radius: 1rem;
  color: white;
  background: black;
  padding: 0.3rem 1rem;
`;
