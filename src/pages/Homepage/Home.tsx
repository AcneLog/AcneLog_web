import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './Home.styles';
import { youtubeThumbnails, productRecommendations } from './homeDummyData';
import Banner from '../../assets/banner.svg';
import sharp from '../../assets/img/sharpIcon.svg';
import { useEffect, useState } from 'react';
import {
  AcnePostCountData,
  HomeAcneImg,
  homePeoplesLogService,
} from '../../services/homeAcneService';

/*데이터는 영어여서 한글로 UI에 표시하기 위함 */
const acneTypeKR: Record<string, string> = {
  COMEDONES: '좁쌀 여드름',
  PUSTULES: '화농성 여드름',
  PAPULES: '염증성 여드름',
  FOLLICULTIS: '모낭염',
};
function Home() {
  const goToPage = useCustomNavigate();
  const [postCounts, setPostCounts] = useState<AcnePostCountData>({
    comedones: 0,
    pustules: 0,
    papules: 0,
    follicultis: 0,
  });
  const [acneImages, setAcneImages] = useState<HomeAcneImg[]>([]);
  useEffect(() => {
    (async () => {
      const res = await homePeoplesLogService.getPeoplesLog();

      setAcneImages(res.analysisRes);
      setPostCounts(res.postCounts);
    })();
  }, []);
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
            <S.Itm key={item.analysisId}>
              <img src={item.imageUrl} width="100%" height="140rem" />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <img src={sharp} width="20%" />
                <span>{acneTypeKR[item.acneType]}</span>
              </div>
              <S.PostCountText>
                게시물 {postCounts[item.acneType.toLowerCase() as keyof AcnePostCountData]}개
              </S.PostCountText>
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
              <img src={item.src} width="100%" height="140rem" />
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
              <img src={item.src} width="100%" height="140rem" />
              <span>{item.title}</span>
            </S.TodaysItemItm>
          ))}
        </S.List>
      </S.HomeSection>
    </div>
  );
}

export default Home;
