import { apiPrivate } from '../api/client';

export interface MyLogItem {
  analysisId: number;
  imageUrl: string;
  acneType: string;
  isPublic: boolean;
  createdAt?: string;
  description: string;
  careMethod: string;
  guide: string;
  managementTips: {
    title: string;
    description: string;
  };
  videoList: {
    videoId: string;
    videoTitle: string;
    videoUrl: string;
    channelName: string;
    thumbnailUrl: string;
  }[]; // 배열로 표시
  productList: {
    id: number;
    name: string;
    imageUrl: string;
  }[]; // 배열로 표시
}
export interface MyLogResponse {
  content: MyLogItem[];
  totalPages: number;
}
// 마이 로그 조회 서비스
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
    // console.log('MyLog API Response:', res.data.data);
    return res.data.data;
  },
};
//마이로그 상세페이지 조회
export const myLogDetailService = {
  getMyLogDetail: async (analysisId: string): Promise<MyLogItem> => {
    const res = await apiPrivate.get(`/analysis/detail/${analysisId}`);
    console.log('MyLog Detail API Response:', res.data.data);
    return res.data.data;
  },
};
