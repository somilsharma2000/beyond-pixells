export default {
  extends: ["stylelint-config-standard"],
  ignoreFiles: ["node_modules/**", "assets/vendor/**"],
  rules: {
    // estate style: compact single-line declarations, legacy color notation
    "comment-empty-line-before": null,
    "no-empty-source": null,
    "selector-class-pattern": null,
    "keyframes-name-pattern": null,
    "at-rule-no-unknown": [true, { ignoreAtRules: ["property"] }],
    "declaration-block-single-line-max-declarations": null,
    "rule-empty-line-before": null,
    "color-function-notation": null,
    "color-function-alias-notation": null,
    "alpha-value-notation": null,
    "length-zero-no-unit": null,
    "declaration-block-no-duplicate-properties": [true, { ignore: ["consecutive-duplicates"] }],
    "declaration-property-value-no-unknown": [true, { ignoreProperties: { "mask-composite": ["/./"] } }],
  },
};
