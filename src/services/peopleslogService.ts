import { apiPrivate } from '../api/client';

export interface PeopleslogItem {
  analysisId: number;
  imageUrl: string;
  acneType: string;
  isPublic: boolean;
  userName: string;
  skinType: string;
  createdAt: string;
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
  }[];
  productList: {
    productId: number;
    productName: string;
    productImage: string;
    productUrl: string;
  }[];
}
export interface PeopleslogResponse {
  content: PeopleslogItem[];
  totalPages: number;
  totalElements: number;
}
//피플즈로그 리스트 조회 서비스
export const peoplelogService = {
  getPeopleslog: async (
    type: string,
    pageable: { page: number; size: number }
  ): Promise<PeopleslogResponse> => {
    const { page, size } = pageable;

    const res = await apiPrivate.get('/analysis/log', {
      params: {
        type,
        page: page - 1,
        size,
      },
    });
    console.log('Peopleslog API Response:', res.data.data);
    return res.data.data;
  },
};
//마이로그 상세페이지 조회
export const peoplesLogDetailService = {
  peopleslogMyLogDetail: async (analysisId: string): Promise<PeopleslogItem> => {
    const res = await apiPrivate.get(`/analysis/log/${analysisId}`);
    console.log('Peopleslog Detail API Response:', res.data.data);
    return res.data.data;
  },
};
