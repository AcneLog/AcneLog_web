import styled from 'styled-components';

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 3rem;
  position: absolute;
  right: 38%;
  top: 15%;
`;

export const Content = styled.div`
  padding: 3rem;
  width: 100%;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

export const Image = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 12px;
  display: block;
  margin: 0 auto 2rem;
`;

export const InfoSection = styled.section`
  margin-bottom: 2rem;
`;

export const BlueBadge = styled.div`
  background: #3182f6;
  color: white;
  width: 6.5rem;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  display: inline-block;
  font-size: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;
export const BlackBadge = styled.div`
  background: #17171b;
  color: white;
  width: 6.5rem;
  padding: 0.5rem 0.8rem;
  border-radius: 20px;
  display: inline-block;
  font-size: 1rem;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const YellowBadge = styled.span`
  display: inline-block;
  background-color: rgba(246, 246, 161, 0.61);
  color: #17171b;
  font-size: 15px;
  font-weight: bold;
  padding-top: 0.2rem;
`;
export const TitleSection = styled.div`
  font-size: 1.3rem;
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
`;
export const Title = styled.div`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;
export const DetailList = styled.ul`
  list-style: none;
  padding-bottom: 2rem;
  margin: 8px 0;
  font-size: 1rem;
`;

export const Description = styled.div`
  background: transparent;
  padding: 1rem;
  border-radius: 1rem;
  border: 0.1rem dashed #ccc;
  font-size: 1rem;
  font-weight: normal;
  color: #737373;
  margin: 1rem 0 4rem;
`;

export const TreatmentSection = styled.section`
  margin-bottom: 2rem;
  font-weight: normal;
  .treatment-title {
    margin-bottom: 1rem;
    font-weight: bold;
  }
`;
export const ManagementSection = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
  font-weight: normal;
  ul,
  ol {
    margin-bottom: 1rem;
  }

  li {
    font-size: 1rem;
    font-style: normal;
    margin-bottom: 2rem;
  }
`;
export const RecommendSection = styled.section`
  display: flex;
  flex-direction: row;
  cursor: pointer;
  gap: 12px;
  margin-bottom: 1rem;

  .product-item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 100%;
    height: 80%;
    border-radius: 14px;
  }
  p {
    width: 100%;
    color: gray;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
export const BlueButton = styled.button`
  cursor: pointer;
  background: #3b82f6;
  color: white;
  border-radius: 1rem;
  padding: 1rem;
  border: none;
  width: 10rem;
  height: 3rem;
  font-size: 1rem;
`;
export const BlackButton = styled.button`
  cursor: pointer;
  background: #0e0e0eff;
  color: white;
  border-radius: 1rem;
  padding: 1rem;
  border: none;
  width: 10rem;
  height: 3rem;
  font-size: 1rem;
`;
export const ImgDiv = styled.div`
  width: 10rem; // 고정 가로
  height: 12.5rem; // 고정 세로 (이미지 + 텍스트)
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;

  img {
    width: 100%;
    height: 8.75rem; // 이미지 영역
    object-fit: cover; // 영역에 맞게 자르기
    border-radius: 0.5rem;
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
`;
