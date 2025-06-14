import styled from 'styled-components';

export const UploadBox = styled.div`
  width: 100%;
  padding: 1.5rem;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;

  span {
    font-size: 0.75rem;
    color: #888;
    margin-left: 0.5rem;
  }
`;

export const UploadLabel = styled.label`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 240px;
  height: 320px;
  margin: 0 auto 1rem;
  border: 2px dashed #ccc;
  background-color: #f5f5f5;
  border-radius: 0.5rem;
  font-size: 2rem;
  color: #aaa;
`;

export const PreviewWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;

export const PreviewImage = styled.img`
  width: 240px;
  height: 320px;
  object-fit: cover;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: -0.5em;
  right: 8.5rem;
  width: 2rem;
  height: 2rem;
  background: grey;
  border-radius: 1rem;
  border: none;
  font-size: 1.75rem;
  color: white;
  cursor: pointer;
`;

export const GuideBox = styled.div`
  font-size: 0.75rem;
  text-align: left;
  border: 1px solid #eee;
  padding: 0.75rem;
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.greyFont1};
  margin-bottom: 1.5rem;

  ul {
    padding-left: 1.5rem;
    list-style: disc;
    font-weight: normal;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export const ActionButton = styled.button<{ primary?: boolean }>`
  background-color: ${(props) => (props.primary ? '#3b82f6' : '#000')};
  color: white;
  padding: 0.5rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  margin-bottom: 6.25rem;
`;
