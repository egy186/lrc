import { base } from '@egy186/eslint-config';
// eslint-disable-next-line import/no-unresolved
import { jest } from '@egy186/eslint-config/jest';

const config = [
  { ignores: ['coverage'] },
  base,
  {
    ...jest,
    files: ['**/*.test.js']
  },
  {
    files: ['eslint.config.js'],
    rules: {
      'n/no-unpublished-import': 'off'
    }
  }
];

export default config;
