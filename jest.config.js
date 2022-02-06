function createJestConfig(_, rootDir = __dirname) {
  const config = {
    transform: {
      '.(ts|tsx)$': 'ts-jest'
    },
    transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
    moduleFileExtensions: ['ts', 'js'],
    collectCoverageFrom: ['src/**/*.{ts,tsx,js,jsx}'],
    testMatch: ['<rootDir>/test/*.(spec|test).ts'],
    testURL: 'http://localhost',
    rootDir,
    watchPlugins: [
      require.resolve('jest-watch-typeahead/filename'),
      require.resolve('jest-watch-typeahead/testname'),
    ],
  };
  return config;
}

module.exports = createJestConfig();
