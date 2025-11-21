import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './Home.styles';
import { youtubeThumbnails, productRecommendations } from './homeDummyData';
import Banner from '../../assets/banner.svg';
import sharp from '../../assets/img/sharpIcon.svg';
import { useEffect, useState } from 'react';
import { AcnePostCountData, homePeoplesLogService } from '../../services/homeAcneService';
import { acneTypeData } from './homeAcneData';

function Home() {
  const goToPage = useCustomNavigate();
  const [acneType] = useState(acneTypeData);
  const [postCounts, setPostCounts] = useState<AcnePostCountData>({
    comedones: 0,
    pustules: 0,
    papules: 0,
    follicultis: 0,
  });

  useEffect(() => {
    (async () => {
      const res = await homePeoplesLogService.getPeoplesLog();
      setPostCounts(res);
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
          {acneType.map((item) => (
            <S.Itm key={item.typeId} onClick={() => goToPage('/peoplesLog')}>
              <img src={item.imgUrl} width="100%" height="140rem" />
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <img src={sharp} width="20%" />
                <span>{item.acneTypeKR}</span>
              </div>
              <S.PostCountText>게시물 {postCounts[item.acneTypeAPI]}개</S.PostCountText>
            </S.Itm>
          ))}
        </S.List>
      </S.HomeSection>
      <S.HomeSection>
        <S.Header>
          <h2>오늘의 유튜브</h2>
        </S.Header>
        <S.List>
          {youtubeThumbnails.slice(0, 3).map((item) => (
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
