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
`;

export const Image = styled.img`
  width: 50%;
  height: 70%;
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
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  display: inline-block;
  font-size: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;
export const BlackBadge = styled.div`
  background: black;
  color: white;
  padding: 0.6rem 1.3rem;
  border-radius: 20px;
  display: inline-block;
  font-size: 1rem;
  margin-right: 1rem;
  margin-bottom: 1rem;
`;

export const YellowBadge = styled.div`
  background-color: rgba(246, 246, 161, 0.61);
  color: black;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  padding-top: 0.2rem;
`;
export const Title = styled.h2`
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
  border: 0.15rem dotted #ccc;
  font-size: 1rem;
  font-weight: normal;
  color: gray;
  font-weight: normal;
  margin: 1rem 0 4rem;
`;

export const TreatmentSection = styled.section`
  margin-bottom: 2rem;
  font-weight: normal;
`;
export const ManagementSection = styled.section`
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
  background: #3b82f6;
  color: white;
  border-radius: 0.7rem;
  padding: 1rem;
  border: none;
  width: 8rem;
  height: 3rem;
`;
export const BlackButton = styled.button`
  background: #0e0e0eff;
  color: white;
  border-radius: 0.7rem;
  padding: 1rem;
  border: none;
  width: 8rem;
  height: 3rem;
`;
