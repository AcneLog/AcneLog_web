import { apiPrivate } from '../api/client';

export interface AnalysisResult {
  analysisId: number;
  imageUrl: string;
  createdAt: string;
  isPublic: boolean;
  acneType: string;
  description: string;
  careMethod: string;
  guide: string;
  videoList: {
    videoId: string;
    videoTitle: string;
    videoUrl: string;
    channelName: string;
    thumbnailUrl: string;
  }[];
  productList: {
    productId: string;
    productName: string;
    productUrl: string;
    productPrice: number;
    productImage: string;
    categoryName: string;
    mallName: string;
    brand: string;
  }[];
}
export const diagnosisService = {
  uploadImage: async (file: File): Promise<string> => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await apiPrivate.post<{ data: { imageUrl: string } }>('/analysis/image', formData, {
      params: { dir: 'skin' },
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    // console.log('uploadImage response data:', res.data);
    return res.data.data.imageUrl;
  },
  analyzeImage: async (file: File): Promise<AnalysisResult> => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await apiPrivate.post<{ data: AnalysisResult }>('/analysis/perform', formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    console.log('analyzeImage response data:', res.data);
    return res.data.data;
  },
};
