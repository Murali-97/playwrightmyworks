module.exports = {
  default: {
    require: ['step-definition/index.js'],
    format: ['progress', 'html:reports/cucumber-report.html'],
    formatOptions: { snippetInterface: 'async-await' },
    paths: ['feature/**/*.feature'],
    parallel: 1,
    dryRun: false,
  },
};
