import useCustomNavigate from '../../hooks/useNavigate';
import * as S from './Home.styles';
import Banner from '../../assets/banner.svg';
import sharp from '../../assets/img/sharpIcon.svg';
import { useEffect, useState } from 'react';
import {
  AcnePostCountData,
  homePeoplesLogService,
  RecommendProductItem,
  recommendService,
  RecommendViedoItem,
} from '../../services/homeService';
import { acneTypeData } from './homeAcneData';

function Home() {
  const goToPage = useCustomNavigate();
  const [acneType] = useState(acneTypeData);
  const [postCounts, setPostCounts] = useState<AcnePostCountData>({
    COMEDONES: 0,
    PUSTULES: 0,
    PAPULES: 0,
    FOLLICULITIS: 0,
  });
  const [youtube, setYoutube] = useState<RecommendViedoItem[]>([]);
  const [product, setProduct] = useState<RecommendProductItem[]>([]);

  useEffect(() => {
    (async () => {
      const res = await homePeoplesLogService.getPeoplesLog();
      const youtube = await recommendService.getRecommendVideo();
      const product = await recommendService.getRecommendProduct();
      setPostCounts(res);
      setYoutube(youtube);
      setProduct(product);
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
            <S.Itm
              key={item.typeId}
              onClick={() => goToPage(`/peoplesLog?acneType=${item.acneTypeAPI}`)}
            >
              <img src={item.imgUrl} width="100%" height="140rem" />
              <S.TypeRow>
                <S.SharpIcon>
                  <img src={sharp} />
                </S.SharpIcon>
                <span>{item.acneTypeKR}</span>
              </S.TypeRow>
              <S.PostCountText>
                게시물 {postCounts[item.acneTypeAPI.toUpperCase() as keyof AcnePostCountData] || 0}
                개
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
          {youtube.slice(0, 3).map((item) => (
            <S.Itm key={item.videoId} onClick={() => window.open(item.videoUrl, '_blank')}>
              <img src={item.thumbnailUrl} width="100%" height="140rem" />
              <p>{item.videoTitle}</p>
            </S.Itm>
          ))}
        </S.List>
      </S.HomeSection>
      <S.HomeSection>
        <S.Header>
          <h2>오늘의 추천템</h2>
        </S.Header>
        <S.List>
          {product.map((item) => (
            <S.TodaysItemItm
              key={item.productId}
              onClick={() => window.open(item.productUrl, '_blank')}
            >
              <img src={item.productImage} width="100%" height="140rem" />
              <p>{item.productName}</p>
            </S.TodaysItemItm>
          ))}
        </S.List>
      </S.HomeSection>
    </div>
  );
}

export default Home;
