import styled from 'styled-components';

interface ButtonType {
  type: 'save' | 'home';
}

interface SkinTypeProps {
  skinType: string;
}

export const getColor = (skinType: string) => {
  if (skinType === '건성') return '#4E8CFF';
  if (skinType === '지성') return '#FF2D57';
  if (skinType === '수부지') return '#34A853';
  return '#888';
};

// 전체 레이아웃
export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem 8rem 3rem;
  gap: 4rem;
`;

// 타이틀
export const Title = styled.h1`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.sm};
  padding-top: 1.5rem;
`;

// 피부타입 관련 레이아웃
export const ResultLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

// 피부타입
export const Result = styled.div<SkinTypeProps>`
  font-size: ${({ theme }) => theme.fontSize.sm};
  text-align: center;
  font-weight: bold;
  line-height: 1.5;
`;

// 버튼 레이아웃
export const BtnLayout = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding-top: 1rem;
  margin-bottom: 4rem;
`;

// 버튼
export const Btn = styled.button<ButtonType>`
  padding: 1rem;
  border-radius: 1rem;
  border: none;
  color: white;
  width: 10rem;
  background: ${({ type, theme }) => (type === 'save' ? theme.roundBlue : 'black')};
  font-size: 1rem;
  cursor: pointer;
`;

// 피부타입 별 색상 적용
export const SkinTypeColor = styled.span<{ skinType: string }>`
  color: ${({ skinType }) => getColor(skinType)};
  font-weight: 900;
  background: linear-gradient(
    to bottom,
    transparent 60%,
    rgba(255, 255, 0, 0.5) 60%,
    rgba(255, 255, 0, 0.5) 100%
  );
  display: inline;
`;

// [피부 타입 진단하기] 전체 레이아웃
export const SkinLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 0.5rem 2rem;
  justify-content: center;
  align-items: center;
`;

// [피부 타입 진단하기] 타이틀 레이아웃
export const TitleLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

// x 아이콘
export const X_Icon = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  img {
    width: 10%;
    height: 1.6rem;
    cursor: pointer;
  }
`;

// [피부 타입 진단하기] 문항 박스 모아둔 전체 레이아웃
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// [피부 타입 진단하기] 문항 박스
export const QuestionCard = styled.div`
  border: 0.5px dashed ${({ theme }) => theme.subGrey};
  border-radius: 15px;
  padding: 2rem;
`;

// [피부 타입 진단하기] 문항 제목
export const QuestionText = styled.div`
  display: flex;
  gap: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  line-height: 1.3;
`;

// [피부 타입 진단하기] radio 레이아웃
export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1rem 1rem 0 1rem;
  font-weight: normal;
`;

// [피부 타입 진단하기] radio 텍스트
export const Label = styled.label`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 0.95rem;

  input[type='radio'] {
    accent-color: ${({ theme }) => theme.roundBlue};
    width: 1.1rem;
    height: 1.1rem;
  }

  // 라디오 버튼 선택 시 스타일링
  input[type='radio']:checked + span {
    color: ${({ theme }) => theme.roundBlue};
    font-weight: bold;
  }
`;

// [피부 타입 진단하기] 제출하기 버튼
export const SubmitButton = styled.button`
  width: 50%;
  padding: 1rem;
  background-color: black;
  color: white;
  border-radius: 12px;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  cursor: pointer;
  margin-top: 1.5rem;
  margin-bottom: 10rem;
`;
