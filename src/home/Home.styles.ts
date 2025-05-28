import styled from 'styled-components';

export const BannerSection = styled.div`
  padding: 16px;
  width: 100%;
`;
export const PeoplesLogSection = styled.div`
  padding: 16px;
  width: 100%;
`;
export const PeoplesLogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  h2 {
    font-size: 16px;
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
    font-size: 14px;
    color: #888;
    cursor: pointer;
  }
`;
export const PeoplesLogList = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
`;
export const PeoplesLogItm = styled.div`
  border: 10px black;
  fontsize: ${({ theme }) => theme.fontSize.xs};
  width: 100%;
  img {
    padding: 0.2rem;
    border-radius: 12px;
  }
`;
export const TodaysYoutubeSection = styled.div`
  padding: 16px;
  width: 100%;
`;
export const TodaysYoutubeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  h2 {
    font-size: 16px;
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
    font-size: 14px;
    color: #888;
    cursor: pointer;
  }
`;
export const TodaysYoutubeList = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
`;
export const TodaysYoutubeItm = styled.div`
  border: 10px black;
  fontsize: ${({ theme }) => theme.fontSize.xs};
  width: 100%;
  img {
    padding: 0.2rem;
    border-radius: 12px;
  }
`;
export const TodaysItemSection = styled.div`
  padding: 16px;
  width: 100%;
`;
export const TodaysItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;

  h2 {
    font-size: 16px;
    font-weight: bold;
  }

  button {
    background: none;
    border: none;
    font-size: 14px;
    color: #888;
    cursor: pointer;
  }
`;
export const TodaysItemList = styled.div`
  display: flex;
  gap: 12px;
  overflow-x: auto;
`;
export const TodaysItemItm = styled.div`
  border: 10px black;
  fontsize: ${({ theme }) => theme.fontSize.xs};
  width: 100%;
  img {
    padding: 0.2rem;
    border-radius: 12px;
  }
`;
