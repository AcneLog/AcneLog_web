import { apiPublic } from '../api/client';

export type AcnePostCountData = Record<
  'comedones' | 'pustules' | 'papules' | 'follicultis',
  number
>;

export const homePeoplesLogService = {
  async getPeoplesLog(): Promise<AcnePostCountData> {
    const res = await apiPublic.get('/analysis/main');
    const data = res.data.data;

    return {
      comedones: data.comedones,
      pustules: data.pustules,
      papules: data.papules,
      follicultis: data.follicultis,
    };
  },
};
