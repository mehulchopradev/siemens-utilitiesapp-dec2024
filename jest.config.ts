import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom',
  // Set Jest to ESM mode
  transform: {
    '^.+\\.(ts|tsx)$': ['ts-jest', { useESM: true }],
  },
};

export default config;