import * as S from './Home.styles';
import useCustomNavigate from '../hooks/useNavigate';

function Home() {
  const goToPage = useCustomNavigate();

  return (
    <div>
      <S.BannerSection>
        <img src="img/배너.svg" width="100%" />
      </S.BannerSection>
      <S.PeoplesLogSection>
        <S.PeoplesLogHeader>
          <h1>피플즈 로그</h1>
          <button
            style={{ cursor: 'pointer', color: 'gray' }}
            onClick={() => goToPage('/peoplesLog')}
          >
            전체보기
          </button>
        </S.PeoplesLogHeader>
        <S.PeoplesLogList>
          <S.PeoplesLogItm>
            <img src="img/여드름관리.svg" width="100%" />
            <p>
              <img src="img/샵아이콘.svg" width="20%" /> 화농성 여드름
              <br />
              <p>게시글 10개</p>
            </p>
          </S.PeoplesLogItm>
          <S.PeoplesLogItm>
            <img src="img/여드름2.svg" width="100%" />
            <p>
              <img src="img/샵아이콘.svg" width="20%" /> 염증성 여드름
            </p>
          </S.PeoplesLogItm>
          <S.PeoplesLogItm>
            <img src="img/여드름3.svg" width="100%" />
            <p>
              <img src="img/샵아이콘.svg" width="20%" /> 좁쌀 여드름
            </p>
          </S.PeoplesLogItm>
        </S.PeoplesLogList>
      </S.PeoplesLogSection>
      <S.TodaysYoutubeSection>
        <S.TodaysYoutubeHeader>
          <h1>오늘의 유튜브</h1>
        </S.TodaysYoutubeHeader>
        <S.TodaysYoutubeList>
          <S.TodaysYoutubeItm>
            <img src="img/유튜브1.svg" width="100%" />
            <p>2025.ver 좁쌀여드름</p>
          </S.TodaysYoutubeItm>
          <S.TodaysYoutubeItm>
            <img src="img/유튜브2.svg" width="100%" />
            <p>2025.ver 좁쌀여드름</p>
          </S.TodaysYoutubeItm>
          <S.TodaysYoutubeItm>
            <img src="img/유튜브3.svg" width="100%" />
            <p>2025.ver 좁쌀여드름</p>
          </S.TodaysYoutubeItm>
        </S.TodaysYoutubeList>
      </S.TodaysYoutubeSection>
      <S.TodaysItemSection>
        <S.TodaysItemHeader>
          <h1>오늘의 추천템</h1>
        </S.TodaysItemHeader>
        <S.TodaysItemList>
          <S.TodaysItemItm>
            <img src="img/쿠팡1.svg" width="100%" />
            <p>이지덤 뷰티</p>
          </S.TodaysItemItm>
          <S.TodaysItemItm>
            <img src="img/쿠팡2.svg" width="100%" />
            <p>이지덤 뷰티</p>
          </S.TodaysItemItm>
          <S.TodaysItemItm>
            <img src="img/쿠팡3.svg" width="100%" />
            <p>이지덤 뷰티</p>
          </S.TodaysItemItm>
        </S.TodaysItemList>
      </S.TodaysItemSection>
    </div>
  );
}

export default Home;
