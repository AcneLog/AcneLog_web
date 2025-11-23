import { apiPublic } from '../api/client';

export type AcnePostCountData = Record<
  'COMEDONES' | 'PUSTULES' | 'PAPULES' | 'FOLLICULITIS',
  number
>;

export const homePeoplesLogService = {
  async getPeoplesLog(): Promise<AcnePostCountData> {
    const res = await apiPublic.get('/analysis/main');
    return res.data.data;
  },
};
