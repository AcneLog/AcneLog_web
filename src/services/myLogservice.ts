import { apiPrivate } from '../api/client';

export interface MyLogItem {
  analysisId: number;
  imageUrl: string;
  acneType: string;
  isPublic: boolean;
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
  }[]; // 배열로 표시
  productList: {
    productId: number;
    productName: string;
    productImage: string;
    productUrl: string;
  }[]; // 배열로 표시
}
export interface MyLogResponse {
  content: MyLogItem[];
  totalPages: number;
  totalElements: number;
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
    // console.log('Peopleslog API Response:', res.data.data);
    return res.data.data;
  },
};
//마이로그 상세페이지 조회
export const myLogDetailService = {
  getMyLogDetail: async (analysisId: string): Promise<MyLogItem> => {
    const res = await apiPrivate.get(`/analysis/detail/${analysisId}`);
    // console.log('MyLog Detail API Response:', res.data.data);
    return res.data.data;
  },
};
//마이로그 상세페이지 공개 여부 변경
export const myLogPublicService = {
  patchMyLogPublic: async (analysisId: number, isPublic: boolean): Promise<MyLogItem> => {
    const res = await apiPrivate.patch(`/analysis/public`, {
      analysisId,
      isPublic,
    });
    // console.log('MyLog Detail API Response:', res.data.data);
    return res.data.data;
  },
};
