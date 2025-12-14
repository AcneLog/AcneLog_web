const fontSize = {
  xxxs: '1rem',
  xxs: '1.2rem',
  xms: '1.4rem',
  xs: '1.6rem',
  sm: '1.8rem',
  base: '2rem',
  //   m: '3rem',
  //   md: '3.5rem',
  //   ml: '4.375rem',
  //   l: '5rem',
  //   lg: '5.625rem',
  //   xl: '6.25rem',
  //   xlg: '6.875rem',
} as const;

const colorSystem = {
  mainBlue: '#4E8CFF',
  mainGrey: '#E9E9E9',
  subGrey: '#676767',
  roundBlue: '#3988F5',
};

const defaultfont = {
  blueFont: '#4E8CFF',
  redFont1: '#FF2D57',
  redFont2: '#FF0000',
  greyFont1: '#737373',
  greyFont2: '#767676',
};

const theme = {
  fontSize,
  ...colorSystem,
  ...defaultfont,
} as const;

export default theme;

// ${({ theme }) => theme.Pink}
// ${({ theme }) => theme.fontSize.Main1}

export const breakpoints = {
  mobile: '768px',
  tablet: '1024px',
  desktop: '1200px',
};
