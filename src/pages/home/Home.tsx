import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './Home.styles';
import { acneImages, youtubeThumbnails, productRecommendations } from './homeDummyData';
import Banner from '../../assets/banner.svg';

function Home() {
  const goToPage = useCustomNavigate();

  return (
    <div>
      <S.HomeSection>
        <img src={Banner} alt="Banner" width={'100%'} style={{ cursor: 'pointer' }} />
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
                <img src="src/assets/img/샵아이콘.svg" width="20%" />
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
          {youtubeThumbnails.map((item) => (
            <S.Itm key={item.id}>
              <img src={item.src} width="100%" />
              <span>{item.title}</span>
            </S.Itm>
          ))}
        </S.List>
      </S.HomeSection>
      <S.HomeSection>
        <S.Header>
          <h2>오늘의 추천템</h2>
        </S.Header>
        <S.List>
          {productRecommendations.map((item) => (
            <S.TodaysItemItm key={item.id}>
              <img src={item.src} width="100%" />
              <span>{item.title}</span>
            </S.TodaysItemItm>
          ))}
        </S.List>
      </S.HomeSection>
    </div>
  );
}

export default Home;
