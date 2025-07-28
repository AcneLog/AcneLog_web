export type MyLogDetail = {
  id: string;
  imageUrl: string;
  diagnosisName: string;
  diagnosedAt: string;
  acneDescription: string;
  isPublic: '공개' | '비공개';
  treatment: {
    title: string;
    description: string;
  };
  managementTips: {
    title: string;
    description: string;
  }[];
  recommendedProducts: {
    id: string;
    name: string;
    imageUrl: string;
  }[];
  recommendedVideos: {
    id: string;
    title: string;
    thumbnailUrl: string;
  }[];
};
export const MyLogDetailMap: Record<string, MyLogDetail> = {
  log1: {
    id: 'log1',
    imageUrl:
      'https://cdn.automedi.co.kr/data/file/mir_module/3731727122_u2bI6DAV_EC97ACEB939CEBA684.jpg',
    diagnosisName: '화농성 여드름',
    diagnosedAt: '2025-07-02 10:00',
    acneDescription:
      '화농성 여드름은 염증 반응이 심해 고름이 생기는 형태로, 자극 시 흉터가 남기 쉬우므로 전문적인 치료가 필요합니다.',
    isPublic: '공개',
    treatment: {
      title: '항생제 및 염증 치료',
      description: '화농 부위에는 국소 항생제와 염증 주사 치료를 병행하여 빠르게 진정시킵니다.',
    },
    managementTips: [
      {
        title: '손으로 짜지 마세요',
        description: '손으로 여드름을 짜면 2차 감염 및 흉터가 생길 수 있습니다.',
      },
      {
        title: '살리실산 제품 사용',
        description: '피지 제거에 도움이 되는 살리실산 성분의 클렌저나 토너를 활용하세요.',
      },
    ],
    recommendedProducts: [
      {
        id: 'p1',
        name: '라로슈포제 에빠끌라 클렌징폼',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
      {
        id: 'p1',
        name: '라로슈포제 에빠끌라 클렌징폼',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
    ],
    recommendedVideos: [
      {
        id: 'v1',
        title: '화농성 여드름 관리법',
        thumbnailUrl: 'https://img.youtube.com/vi/Ae83oJCP3dM/mqdefault.jpg',
      },
      {
        id: 'v1',
        title: '화농성 여드름 관리법',
        thumbnailUrl: 'https://img.youtube.com/vi/Ae83oJCP3dM/mqdefault.jpg',
      },
    ],
  },
};
