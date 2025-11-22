export const acneTypeMap = {
  COMEDONES: '좁쌀 여드름 ',
  PAPULES: '염증성 여드름',
  PUSTULES: '화농성 여드름',
  FOLLICULITIS: '모낭염',
} as const;

export const categoryToTypeMap = {
  전체: 'ALL',
  화농성: 'PUSTULES',
  염증성: 'PAPULES',
  좁쌀: 'COMEDONES',
  모낭염: 'FOLLICULITIS',
} as const;

export const categories = ['전체', '화농성', '염증성', '좁쌀', '모낭염'] as const;
export type Category = (typeof categories)[number];

// CATEGORY_MAP 소문자
export const CATEGORY_MAP = {
  전체: 'all',
  화농성: 'pustules',
  염증성: 'papules',
  좁쌀: 'comedones',
  모낭염: 'folliculitis',
};
// REVERSE_MAP (영어 -> 한글)
export const REVERSE_CATEGORY_MAP: Record<string, Category> = {
  ALL: '전체',
  PUSTULES: '화농성',
  PAPULES: '염증성',
  COMEDONES: '좁쌀',
  FOLLICULITIS: '모낭염',
};
