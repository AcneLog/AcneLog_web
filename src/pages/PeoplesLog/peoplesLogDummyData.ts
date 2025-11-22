export const diagnosisNameMap: Record<string, string> = {
  A: '화농성 여드름',
  B: '염증성 여드름',
  C: '좁쌀 여드름',
  D: '모낭염',
};

// Diagnosis 타입 확장 (진단 기록에 ID 추가)t
type DiagnosisLog = {
  id: string;
  name: string;
  date: string;
  image: string;
  show: boolean;
};

type PageData = {
  logList: DiagnosisLog[];
  pageNum: number;
  totalPages: number;
};
export const dummyData: Record<number, PageData> = {
  1: {
    logList: [
      {
        id: 'log1',
        name: 'A',
        date: '2025-07-02',
        image:
          'https://cdn.automedi.co.kr/data/file/mir_module/3731727122_u2bI6DAV_EC97ACEB939CEBA684.jpg',
        show: true,
      },
      {
        id: 'log2',
        name: 'B',
        date: '2025-07-04',
        image:
          'https://images.squarespace-cdn.com/content/v1/66271db24df4cd422370803d/a1218907-e4f5-41a5-8d7f-c006cba428f7/acne2.png',
        show: false,
      },
      {
        id: 'log3',
        name: 'C',
        date: '2025-07-06',
        image:
          'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/366/31d186c3833990b970a3639f34daf4f9_res.jpeg',
        show: true,
      },
      {
        id: 'log4',
        name: 'A',
        date: '2025-07-08',
        image: 'https://cdn.news.hidoc.co.kr/news/photo/201612/12511_27894_0646.jpg',
        show: false,
      },
    ],
    pageNum: 1,
    totalPages: 2,
  },
  2: {
    logList: [
      {
        id: 'log5',
        name: 'C',
        date: '2025-07-10',
        image:
          'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/452/a70e98f85203fd1408b6c174869e7b93_res.jpeg',
        show: true,
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
        id: 'log1',
        name: 'A',
        date: '2025-07-02',
        image:
          'https://cdn.automedi.co.kr/data/file/mir_module/3731727122_u2bI6DAV_EC97ACEB939CEBA684.jpg',
        show: true,
      },
      {
        id: 'log4',
        name: 'A',
        date: '2025-07-08',
        image: 'https://cdn.news.hidoc.co.kr/news/photo/201612/12511_27894_0646.jpg',
        show: true,
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
        id: 'log2',
        name: 'B',
        date: '2025-07-04',
        image:
          'https://images.squarespace-cdn.com/content/v1/66271db24df4cd422370803d/a1218907-e4f5-41a5-8d7f-c006cba428f7/acne2.png',
        show: false,
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
        id: 'log3',
        name: 'C',
        date: '2025-07-06',
        image:
          'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/366/31d186c3833990b970a3639f34daf4f9_res.jpeg',
        show: true,
      },
      {
        id: 'log5',
        name: 'C',
        date: '2025-07-10',
        image:
          'https://d2u3dcdbebyaiu.cloudfront.net/uploads/atch_img/452/a70e98f85203fd1408b6c174869e7b93_res.jpeg',
        show: false,
      },
    ],
    pageNum: 1,
    totalPages: 1,
  },
};
