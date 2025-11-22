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
