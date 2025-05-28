import styled from 'styled-components';

export const BannerSection = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const PeoplesLogSection = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const PeoplesLogHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;

  button {
    background: none;
    border: none;
    font-size: 0.875rem;
    color: #888;
    cursor: pointer;
  }
`;

export const PeoplesLogList = styled.div`
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
`;

export const PeoplesLogItm = styled.div`
  font-size: 1rem;
  width: 100%;
  text-align: center;
  img {
    padding: 0.2rem;
    border-radius: 0.75rem;
  }
`;
export const PostCountText = styled.p`
  font-size: 0.75rem;
  color: #555;
  margin-left: -2.5rem;
`;

export const TodaysYoutubeSection = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const TodaysYoutubeHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const TodaysYoutubeList = styled.div`
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
`;

export const TodaysYoutubeItm = styled.div`
  border: 0.625rem black;
  font-size: 1rem;
  width: 100%;

  img {
    padding: 0.2rem;
    border-radius: 0.75rem;
  }
`;

export const TodaysItemSection = styled.div`
  padding: 1rem;
  width: 100%;
`;

export const TodaysItemHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const TodaysItemList = styled.div`
  display: flex;
  gap: 0.75rem;
  overflow-x: auto;
`;

export const TodaysItemItm = styled.div`
  font-size: 1rem;
  width: 100%;

  img {
    padding: 0.2rem;
    border-radius: 0.75rem;
  }
  margin-bottom: 6.25rem;
`;
