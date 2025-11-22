import { apiPrivate } from '../api/client';

export interface MyLogItem {
  analysisId: number;
  imageUrl: string;
  acneType: string;
  createdAt: string;
  isPublic: boolean;
}
export interface MyLogResponse {
  content: MyLogItem[];
  totalPages: number;
  totalElements: number;
}

export const myLogService = {
  getMyLog: async (
    type: string,
    pageable: { page: number; size: number }
  ): Promise<MyLogResponse> => {
    const { page, size } = pageable;

    const res = await apiPrivate.get('/analysis/my', {
      params: {
        type,
        page: page - 1,
        size,
      },
    });
    console.log('MyLog API Response:', res.data.data);
    return res.data.data;
  },
};
