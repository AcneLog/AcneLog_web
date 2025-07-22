export type DiagnosisDetail = {
  id: string;
  imageUrl: string;
  diagnosisName: string;
  skinType: string;
  diagnosedAt: string;
  userNickname: string;
  acneDescription: string;
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

export const diagnosisDetailMap: Record<string, DiagnosisDetail> = {
  log1: {
    id: 'log1',
    imageUrl:
      'https://cdn.automedi.co.kr/data/file/mir_module/3731727122_u2bI6DAV_EC97ACEB939CEBA684.jpg',
    diagnosisName: '화농성 여드름',
    diagnosedAt: '2025-07-02 10:00',
    userNickname: '피부초보123',
    skinType: '지성',
    acneDescription:
      '화농성 여드름은 염증 반응이 심해 고름이 생기는 형태로, 자극 시 흉터가 남기 쉬우므로 전문적인 치료가 필요합니다.',
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
      {
        title: '세안 시 미온수 사용',
        description: '뜨거운 물은 자극을 줄 수 있으니 미온수로 부드럽게 세안하세요.',
      },
      {
        title: '베개 커버 자주 교체',
        description: '피지와 땀이 쌓이기 쉬운 베개 커버는 자주 세탁하세요.',
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
        id: 'p2',
        name: '센텔리안24 마데카 크림',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
      {
        id: 'p11',
        name: '이니스프리 비자 시카 밤',
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
        id: 'v2',
        title: '피부과전문의가 말하는 여드름 대처법',
        thumbnailUrl: 'https://img.youtube.com/vi/Ae83oJCP3dM/mqdefault.jpg',
      },
    ],
  },

  log2: {
    id: 'log2',
    imageUrl:
      'https://images.squarespace-cdn.com/content/v1/66271db24df4cd422370803d/a1218907-e4f5-41a5-8d7f-c006cba428f7/acne2.png',
    diagnosisName: '염증성 여드름',
    diagnosedAt: '2025-07-04 14:30',
    userNickname: '여드름관리중',
    skinType: '복합성',
    acneDescription:
      '염증성 여드름은 모낭 내 세균 증식으로 인해 피부에 붉은 염증 반응이 생기며, 통증을 동반하는 경우가 많습니다.',
    treatment: {
      title: '스테로이드 및 항생제 복합 치료',
      description: '염증이 심한 경우에는 항생제와 스테로이드를 병행하여 효과를 높입니다.',
    },
    managementTips: [
      {
        title: '자외선 차단',
        description: '햇빛은 염증을 악화시킬 수 있으므로 반드시 자외선 차단제를 사용하세요.',
      },
      {
        title: '충분한 수면',
        description: '수면 부족은 호르몬 불균형을 유발하여 여드름을 악화시킬 수 있습니다.',
      },
      {
        title: '손대지 않기',
        description: '손으로 만지는 행동은 세균 감염과 염증을 유발할 수 있습니다.',
      },
      {
        title: '과도한 세안 자제',
        description: '지나친 세안은 피부 장벽을 무너뜨릴 수 있어 여드름을 악화시킵니다.',
      },
    ],
    recommendedProducts: [
      {
        id: 'p3',
        name: '이솝 티트리 리플레니싱 세럼',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
      {
        id: 'p4',
        name: '닥터지 브라이트닝 업 선크림',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
      {
        id: 'p12',
        name: '한율 어린쑥 수분 진정크림',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
    ],
    recommendedVideos: [
      {
        id: 'v3',
        title: '염증성 여드름 단계별 관리',
        thumbnailUrl: 'https://img.youtube.com/vi/Ae83oJCP3dM/mqdefault.jpg',
      },
      {
        id: 'v4',
        title: '여드름이 가라앉는 루틴',
        thumbnailUrl: 'https://img.youtube.com/vi/Ae83oJCP3dM/mqdefault.jpg',
      },
    ],
  },

  log3: {
    id: 'log3',
    imageUrl:
      'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/366/31d186c3833990b970a3639f34daf4f9_res.jpeg',
    diagnosisName: '좁쌀 여드름',
    diagnosedAt: '2025-07-06 16:20',
    userNickname: '블랙헤드킬러',
    skinType: '건성',
    acneDescription:
      '좁쌀 여드름은 모공이 막혀 생기는 비염증성 여드름으로, 작고 흰 돌기 형태로 나타납니다.',
    treatment: {
      title: '레티노이드 치료 및 각질 제거',
      description:
        '피지 배출을 돕는 레티노이드 성분 도포제를 사용하고, 필요 시 필링 치료를 병행합니다.',
    },
    managementTips: [
      {
        title: '레티놀 제품 사용',
        description: '좁쌀 여드름 개선에 효과적인 레티놀 크림이나 세럼을 소량씩 사용해보세요.',
      },
      { title: '유분 줄이기', description: '유분이 많은 화장품이나 음식은 피해주세요.' },
      {
        title: '운동 후 세안',
        description: '땀으로 인한 모공 막힘을 방지하려면 운동 후 즉시 세안하세요.',
      },
      {
        title: '주 1~2회 각질 제거',
        description: '각질이 쌓이면 피지 배출이 어려워지므로 주기적으로 각질을 제거하세요.',
      },
    ],
    recommendedProducts: [
      {
        id: 'p5',
        name: '더랩바이블랑두 레티놀 세럼',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
      {
        id: 'p6',
        name: '아벤느 클린앙스 클렌징 젤',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
      {
        id: 'p13',
        name: '피지오겔 데일리 모이스처 크림',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
    ],
    recommendedVideos: [
      {
        id: 'v5',
        title: '좁쌀 여드름 해결법',
        thumbnailUrl: 'https://img.youtube.com/vi/Ae83oJCP3dM/mqdefault.jpg',
      },
      {
        id: 'v6',
        title: '좁쌀 여드름 없애는 습관',
        thumbnailUrl: 'https://img.youtube.com/vi/Ae83oJCP3dM/mqdefault.jpg',
      },
    ],
  },

  log4: {
    id: 'log4',
    imageUrl: 'https://cdn.news.hidoc.co.kr/news/photo/201612/12511_27894_0646.jpg',
    diagnosisName: '화농성 여드름',
    diagnosedAt: '2025-07-08 09:15',
    userNickname: '트러블은이제그만',
    skinType: '지성',
    acneDescription:
      '화농성 여드름은 염증 반응이 심해 고름이 생기는 형태로, 자극 시 흉터가 남기 쉬우므로 전문적인 치료가 필요합니다.',
    treatment: {
      title: '전문 압출 및 항염 레이저 치료',
      description: '전문가의 여드름 압출 치료와 항염증 레이저를 병행하여 염증을 완화합니다.',
    },
    managementTips: [
      { title: '자극 최소화', description: '클렌징 시 문지르지 말고 부드럽게 세안하세요.' },
      {
        title: '진정 크림 활용',
        description: '센텔라 성분 등 진정 제품을 활용해 피부 회복을 돕습니다.',
      },
      {
        title: '메이크업 최소화',
        description: '화장은 염증을 더 자극할 수 있으므로 최소화하는 것이 좋습니다.',
      },
      {
        title: '스트레스 관리',
        description: '스트레스는 피지 분비를 촉진해 염증을 유발할 수 있습니다.',
      },
    ],
    recommendedProducts: [
      {
        id: 'p7',
        name: '라운드랩 자작나무 수분 크림',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
      {
        id: 'p8',
        name: '라네즈 시카 슬리핑 마스크',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
      {
        id: 'p14',
        name: '닥터자르트 시카페어 크림',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
    ],
    recommendedVideos: [
      {
        id: 'v7',
        title: '화농성 여드름 일주일 후기',
        thumbnailUrl: 'https://img.youtube.com/vi/Ae83oJCP3dM/mqdefault.jpg',
      },
      {
        id: 'v8',
        title: '피부과 치료 전후 차이',
        thumbnailUrl: 'https://img.youtube.com/vi/Ae83oJCP3dM/mqdefault.jpg',
      },
    ],
  },

  log5: {
    id: 'log5',
    imageUrl:
      'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/452/a70e98f85203fd1408b6c174869e7b93_res.jpeg',
    diagnosisName: '좁쌀 여드름',
    diagnosedAt: '2025-07-10 20:00',
    userNickname: '클린페이스도전',
    skinType: '복합성',
    acneDescription:
      '좁쌀 여드름은 모공이 막혀 생기는 비염증성 여드름으로, 작고 흰 돌기 형태로 나타납니다.',
    treatment: {
      title: '스케일링 및 피지조절 치료',
      description: '스케일링 시술로 각질과 피지를 제거하고, 필요 시 피지억제제를 사용합니다.',
    },
    managementTips: [
      {
        title: '운동 후 바로 세안',
        description: '땀과 피지가 모공을 막지 않도록 운동 후 즉시 세안하는 것이 중요합니다.',
      },
      {
        title: '저자극 클렌저 사용',
        description: '비누 대신 pH 균형이 맞는 클렌저를 사용하여 피부 장벽을 보호하세요.',
      },
      {
        title: '수건 청결 유지',
        description: '얼굴을 닦는 수건은 개인용으로 자주 교체하며 사용하세요.',
      },
      {
        title: '충분한 수분 섭취',
        description: '수분 부족은 각질을 유발하여 모공을 막을 수 있으므로 물을 충분히 마셔주세요.',
      },
    ],
    recommendedProducts: [
      {
        id: 'p9',
        name: '일리윤 마일드 약산성 클렌저',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
      {
        id: 'p10',
        name: '바이오더마 세비엄 포밍젤',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
      {
        id: 'p15',
        name: '라로슈포제 시카플라스트 밤 B5',
        imageUrl:
          'https://thumbnail8.coupangcdn.com/thumbnails/remote/320x320ex/image/vendor_inventory/666d/7b8ec5ba3043d0a0f6f1e6d1312ed2a8b98c530aa09255006bf5afc1468c.jpg',
      },
    ],

    recommendedVideos: [
      {
        id: 'v9',
        title: '여드름 피부의 생활 루틴',
        thumbnailUrl: 'https://img.youtube.com/vi/rz7oQ0UBoQc/mqdefault.jpg',
      },
      {
        id: 'v10',
        title: '피부 좋아지는 습관 모음',
        thumbnailUrl: 'https://img.youtube.com/vi/Ae83oJCP3dM/mqdefault.jpg',
      },
    ],
  },
};
