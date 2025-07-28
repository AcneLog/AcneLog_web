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
  padding: 0.3rem 1.2rem;
  border-radius: 20px;
  display: inline-block;
  font-size: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.1rem;
`;
export const BlackBadge = styled.div`
  background: black;
  color: white;
  padding: 0.3rem 1.2rem;
  border-radius: 20px;
  display: inline-block;
  font-size: 1rem;
  margin-right: 1rem;
  margin-bottom: 0.5rem;
`;

export const YellowBadge = styled.div`
  background-color: rgba(255, 255, 0, 0.3);
  color: black;
  display: inline-block;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 0.3rem;
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
  background: #f8f8f8;
  padding: 1rem;
  border-radius: 1rem;
  font-size: 1rem;
  color: gray;
`;
export const Section = styled.section`
  margin-bottom: 2rem;
  ul,
  ol {
    margin-bottom: 1rem;
  }

  li {
    font-size: 1rem;
    margin-bottom: 1rem;
    margin-left: 1rem;
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
    background-color: black;
    border-radius: 2px;
    align-items: center;
    justify-content: center;
  }
`;
