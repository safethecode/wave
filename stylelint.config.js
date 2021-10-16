const sortOrderSMACSS = require('stylelint-config-property-sort-order-smacss/generate');
module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'color-hex-case': 'lower',
    'comment-empty-line-before': 'always',
    'declaration-block-trailing-semicolon': 'always',
    'number-leading-zero': 'always',
    'rule-empty-line-before': 'always-multi-line',
    'order/properties-order': sortOrderSMACSS(),
  },
};
