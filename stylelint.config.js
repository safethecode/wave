module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order'],
  rules: {
    'color-hex-case': 'lower',
    'comment-empty-line-before': 'always',
    'at-rule-no-unknown': null,
    'declaration-block-trailing-semicolon': 'always',
    'number-leading-zero': 'always',
    'rule-empty-line-before': 'always-multi-line',
  },
};
