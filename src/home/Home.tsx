import * as S from './Home.styles';
import useCustomNavigate from '../hooks/useNavigate';
import { acneImages } from './homeDummyData';

function Home() {
  const goToPage = useCustomNavigate();

  return (
    <div>
      <S.HomeSection>
        <img src="src/assets/img/배너.svg" width="100%" />
      </S.HomeSection>
      <S.HomeSection>
        <S.Header>
          <h2>피플즈 로그</h2>
          <S.PeoplesLogButton
            style={{ cursor: 'pointer', color: 'gray' }}
            onClick={() => goToPage('/peoplesLog')}
          >
            전체보기
          </S.PeoplesLogButton>
        </S.Header>
        <S.List>
          {acneImages.map((item) => (
            <S.Itm key={item.id}>
              <img src={item.src} width="100%" />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                }}
              >
                <img src="../../assets/img/샵아이콘.svg" width="20%" />
                <span>{item.description}</span>
              </div>
              <S.PostCountText>게시글 10개</S.PostCountText>
            </S.Itm>
          ))}
        </S.List>
      </S.HomeSection>
      <S.HomeSection>
        <S.Header>
          <h2>오늘의 유튜브</h2>
        </S.Header>
        <S.List>
          <S.Itm>
            <img src="img/유튜브1.svg" width="100%" />
            <p>2025.ver 좁쌀여드름</p>
          </S.Itm>
          <S.Itm>
            <img src="img/유튜브2.svg" width="100%" />
            <p>2025.ver 좁쌀여드름</p>
          </S.Itm>
          <S.Itm>
            <img src="img/유튜브3.svg" width="100%" />
            <p>2025.ver 좁쌀여드름</p>
          </S.Itm>
        </S.List>
      </S.HomeSection>
      <S.HomeSection>
        <S.Header>
          <h2>오늘의 추천템</h2>
        </S.Header>
        <S.List>
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
        </S.List>
      </S.HomeSection>
    </div>
  );
}

export default Home;
