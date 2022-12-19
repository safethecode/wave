import { globalCss } from 'styles/stitches';
import { reset } from 'styles/reset';

export const globalStyles = globalCss({
  ...reset,
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  '#__next, html, body': {
    width: '100%',
    height: '100%',
    fontFamily: '$sans',
    backgroundColor: '$white',
  },
});
