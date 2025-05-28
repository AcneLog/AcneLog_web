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
          <h2>피플즈 로그</h2>
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
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              <img src="img/샵아이콘.svg" width="20%" /> <span>화농성 여드름</span>
            </div>
            <S.PostCountText>게시글 10개</S.PostCountText>
          </S.PeoplesLogItm>
          <S.PeoplesLogItm>
            <img src="img/여드름2.svg" width="100%" />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              <img src="img/샵아이콘.svg" width="20%" /> <span>염증성 여드름</span>
            </div>
            <S.PostCountText>게시글 15개</S.PostCountText>
          </S.PeoplesLogItm>
          <S.PeoplesLogItm>
            <img src="img/여드름3.svg" width="100%" />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              <img src="img/샵아이콘.svg" width="20%" /> <span>좁쌀 여드름</span>
            </div>
            <S.PostCountText>게시글 10개</S.PostCountText>
          </S.PeoplesLogItm>
        </S.PeoplesLogList>
      </S.PeoplesLogSection>
      <S.TodaysYoutubeSection>
        <S.TodaysYoutubeHeader>
          <h2>오늘의 유튜브</h2>
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
          <h2>오늘의 추천템</h2>
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
