import { apiPublic } from '../api/client';

export type Provider = 'kakao' | 'google';

export const authService = {
  getAuthorizeUrl: async (provider: Provider, redirectUri: string) => {
    const res = await apiPublic.get<{ data: string }>('/auth/login', {
      params: { provider, 'redirect-uri': redirectUri },
    });
    return res.data.data;
  },

  loginWithCode: async (provider: 'kakao' | 'google', code: string, redirectUri: string) => {
    const res = await apiPublic.get(`/auth/${provider}/login`, {
      params: { code, 'redirect-uri': redirectUri },
    });
    return res.data.data;
  },
};
