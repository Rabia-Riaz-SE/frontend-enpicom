// jest.config.ts
import type { Config } from 'jest';

const config: Config = {
  //configure Jest to use ts-jest, which allows Jest to work with TypeScript files and transpile them
  preset: 'ts-jest',
  //Jest to use the JSDOM environment for testing.
  testEnvironment: 'jsdom',
  //test files extension.
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  //ts jest will transform ts or tsx files 
  transform: {
    '^.+\\.(ts|tsx)$': [
      'ts-jest',
      {
        tsconfig: './tsconfig.jest.json',
        diagnostics: false,
        astTransformers: {
          before: [
            {
              path: 'ts-jest-mock-import-meta',
              options: {
                metaObjectReplacement: {
                  env: {
                      VITE_BACKEND_API_BASEURL: 'http://localhost:3001',
                      VITE_BACKEND_API_DNA_ROUTE: 'dna'
                  },
                },
              },
            },
          ],
        }
      },
    ],
  },
  moduleNameMapper : {'\\.module\\.css$': '<rootDir>/test_mock/styleMock.ts'},
  //ignore node_modules and dist folder 
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
  setupFilesAfterEnv: ['@testing-library/jest-dom'],
  //Ignore this file to transpile by 
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  modulePaths: ['<rootDir>/src']
};

export default config;