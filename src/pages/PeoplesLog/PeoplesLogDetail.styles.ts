import styled from 'styled-components';

export const CloseButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  img {
    width: 10%;
    height: 1.5rem;
    cursor: pointer;
  }
`;

export const Content = styled.div`
  padding: 3rem;
  width: 100%;
  margin-bottom: 3rem;
  line-height: 1.6;
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
  background: black;
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
export const DiagnosisValue = styled.span`
  font-weight: normal;
`;

export const Description = styled.div`
  background: transparent;
  padding: 1rem;
  border-radius: 1rem;
  border: 0.1rem dashed #ccc;
  font-size: 1rem;
  font-weight: normal;
  color: #737373;
  margin-bottom: 4rem;
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
