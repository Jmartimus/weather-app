// eslint-disable-next-line import/no-import-module-exports
import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,
};

module.exports = {
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
};

export default config;

module.exports = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      // ts-jest configuration goes here
      tsconfig: 'tests/tsconfig.json',
    },
  },
  testEnvironment: 'node',
  setupFiles: ['dotenv/config'],
  transform: {
    '^.+\\.tsx?$': 'babel-jest',
  },
  moduleFileExtensions: ['js', 'ts', 'json', 'vue'],
};
