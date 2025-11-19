import { apiPublic } from '../api/client'; // or apiPrivate, 인증 필요 없으면 apiPublic

export interface Notice {
  boardId: number;
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}
export const noticeService = {
  async getNoticeList(): Promise<Notice[]> {
    const res = await apiPublic.get('/board/list');
    //console.log('[Notice Response]', res.data.data.content);
    return res.data.data.content;
  },
};
export const noticeDetailService = {
  async getNoticeDetail(boardId: number): Promise<Notice> {
    const res = await apiPublic.get(`/board/${boardId}`);
    console.log('[Notice Detail Response]', res.data.data);
    return res.data.data;
  },
};
