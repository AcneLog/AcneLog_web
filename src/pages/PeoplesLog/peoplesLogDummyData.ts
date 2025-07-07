export const diagnosisNameMap: Record<string, string> = {
  A: '화농성 여드름',
  B: '염증성 여드름',
  C: '좁쌀 여드름',
};

// 진단 항목 타입 정의
type DiagnosisLog = {
  name: string;
  date: string;
  image: string;
};

// 페이지 타입 정의
type PageData = {
  logList: DiagnosisLog[];
  pageNum: number;
  totalPages: number;
};

export const dummyData: Record<number, PageData> = {
  1: {
    logList: [
      {
        name: 'A',
        date: '2025-07-02',
        image:
          'https://cdn.automedi.co.kr/data/file/mir_module/3731727122_u2bI6DAV_EC97ACEB939CEBA684.jpg',
      },
      {
        name: 'B',
        date: '2025-07-04',
        image:
          'https://images.squarespace-cdn.com/content/v1/66271db24df4cd422370803d/a1218907-e4f5-41a5-8d7f-c006cba428f7/acne2.png',
      },
      {
        name: 'C',
        date: '2025-07-06',
        image:
          'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/366/31d186c3833990b970a3639f34daf4f9_res.jpeg',
      },
      {
        name: 'A',
        date: '2025-07-08',
        image: 'https://cdn.news.hidoc.co.kr/news/photo/201612/12511_27894_0646.jpg',
      },
    ],
    pageNum: 1,
    totalPages: 2,
  },
  2: {
    logList: [
      {
        name: 'C',
        date: '2025-07-10',
        image:
          'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/452/a70e98f85203fd1408b6c174869e7b93_res.jpeg',
      },
    ],
    pageNum: 2,
    totalPages: 2,
  },
};

export const dummyDataByA: Record<number, PageData> = {
  1: {
    logList: [
      {
        name: 'A',
        date: '2025-07-02',
        image:
          'https://cdn.automedi.co.kr/data/file/mir_module/3731727122_u2bI6DAV_EC97ACEB939CEBA684.jpg',
      },
      {
        name: 'A',
        date: '2025-07-08',
        image: 'https://cdn.news.hidoc.co.kr/news/photo/201612/12511_27894_0646.jpg',
      },
    ],
    pageNum: 1,
    totalPages: 1,
  },
};

export const dummyDataByB: Record<number, PageData> = {
  1: {
    logList: [
      {
        name: 'B',
        date: '2025-07-04',
        image:
          'https://images.squarespace-cdn.com/content/v1/66271db24df4cd422370803d/a1218907-e4f5-41a5-8d7f-c006cba428f7/acne2.png',
      },
    ],
    pageNum: 1,
    totalPages: 1,
  },
};

export const dummyDataByC: Record<number, PageData> = {
  1: {
    logList: [
      {
        name: 'C',
        date: '2025-07-06',
        image:
          'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/366/31d186c3833990b970a3639f34daf4f9_res.jpeg',
      },
      {
        name: 'C',
        date: '2025-07-10',
        image:
          'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/452/a70e98f85203fd1408b6c174869e7b93_res.jpeg',
      },
    ],
    pageNum: 1,
    totalPages: 1,
  },
};
