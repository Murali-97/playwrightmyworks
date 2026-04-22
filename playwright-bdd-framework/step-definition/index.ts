require('ts-node').register({
  project: './tsconfig.json',
  transpileOnly: true,
  compilerOptions: {
    module: 'commonjs',
  },
});

module.exports = require('./step-definition/login-steps.ts');
