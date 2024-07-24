import nextJest from 'next/jest.js';

const createJestConfig = nextJest({
  // Root Directory
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
};

export default createJestConfig(config);
