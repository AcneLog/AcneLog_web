import { apiPublic } from '../api/client';

export interface HomeAcneImg {
  analysisId: number;
  imageUrl: string;
  acneType: 'comedones' | 'pustules' | 'papules' | 'follicultis';
}

export type AcnePostCountData = Record<
  'comedones' | 'pustules' | 'papules' | 'follicultis',
  number
>;

export interface HomeAcneMainResponse {
  postCounts: Record<'comedones' | 'pustules' | 'papules' | 'follicultis', number>;
  analysisRes: HomeAcneImg[];
}

export const homePeoplesLogService = {
  async getPeoplesLog(): Promise<HomeAcneMainResponse> {
    const res = await apiPublic.get('/analysis/main');
    const data = res.data.data;

    // API 응답의 최상위 소문자 카운트 필드를 postCounts 객체로 변환하여 반환
    return {
      postCounts: {
        comedones: data.comedones,
        pustules: data.pustules,
        papules: data.papules,
        follicultis: data.follicultis,
      },
      analysisRes: data.analysisRes,
    };
  },
};
