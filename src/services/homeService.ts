import { apiPublic } from '../api/client';

export type AcnePostCountData = Record<
  'COMEDONES' | 'PUSTULES' | 'PAPULES' | 'FOLLICULITIS',
  number
>;
export interface RecommendViedoItem {
  videoId: number;
  videoUrl: string;
  videoTitle: string;
  thumbnailUrl: string;
}
export interface RecommendProductItem {
  productId: number;
  productUrl: string;
  productName: string;
  productImage: string;
}
export const homePeoplesLogService = {
  async getPeoplesLog(): Promise<AcnePostCountData> {
    const res = await apiPublic.get('/analysis/main');
    // console.log(res.data.data);
    return res.data.data;
  },
};

export const recommendService = {
  async getRecommendVideo(): Promise<RecommendViedoItem[]> {
    const res = await apiPublic.get('/analysis/main/youtube');
    // console.log(res.data.data);
    return res.data.data;
  },
  async getRecommendProduct(): Promise<RecommendProductItem[]> {
    const res = await apiPublic.get('analysis/main/product');
    // console.log(res.data.data);
    return res.data.data;
  },
};
