import { apiPublic } from '../api/client'; // or apiPrivate, 인증 필요 없으면 apiPublic

export interface Notice {
  boardId: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface NoticeListResponse {
  content: Notice[];
  pageable: Record<string, unknown>; // 필요하다면 자세히 정의
  totalPages: number; // 💡 이 필드를 사용합니다.
  totalElements: number;
  last: boolean;
  numberOfElements: number;
  size: number;
  number: number;
  sort: Record<string, unknown>;
  first: boolean;
  empty: boolean;
}
export const noticeService = {
  async getNoticeList(page: number, size: number): Promise<NoticeListResponse> {
    const sort = 'createdAt,desc';
    const queryString = `?page=${page}&size=${size}&sort=${sort}`;
    const res = await apiPublic.get(`/board/list${queryString}`);
    console.log('[Notice Response]', res.data.data.content);
    return res.data.data;
  },
};
export const noticeDetailService = {
  async getNoticeDetail(boardId: number): Promise<Notice> {
    const res = await apiPublic.get(`/board/${boardId}`);
    //console.log('[Notice Detail Response]', res.data.data);
    return res.data.data;
  },
};
