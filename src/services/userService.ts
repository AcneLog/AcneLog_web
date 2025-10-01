import { apiPrivate } from '../api/client';

export const userService = {
  getProfile: async () => {
    const res = await apiPrivate.get('/member/profile');
    // console.log(res.data);
    return res.data.data;
  },
};
