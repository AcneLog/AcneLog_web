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
  margin-bottom: 3.5rem;
`;

export const BlueBadge = styled.div`
  background: #3182f6;
  color: white;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  width: 6.5rem;
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
  color: #17171b;
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
  font-size: 1rem;
  margin-bottom: 1rem;
  div {
    margin-bottom: 1rem;
  }
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
    font-size: 1rem;
    width: 100%;
    color: gray;
  }
`;

export const CustomRadio = styled.label`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  margin-right: 1rem;
  gap: 0.5rem;

  input[type='radio'] {
    appearance: none;
    -webkit-appearance: none;
    width: 18px;
    height: 18px;
    background-color: #d2cfcfff;
    border-radius: 4px;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  input[type='radio']:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 3px;
    transform: translateY(-50%);
    width: 10px;
    height: 10px;
    background-color: #17171b;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
  }
`;
