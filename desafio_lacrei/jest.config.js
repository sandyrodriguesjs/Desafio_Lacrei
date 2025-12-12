module.exports = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",

  moduleNameMapper: {
    "^@components/(.*)$": "<rootDir>/src/app/components/$1",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
};
