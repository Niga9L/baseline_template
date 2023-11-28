module.exports = {
  moduleFileExtensions: ["ts", "js", "json", "node"],
  rootDir: "src",
  testEnvironment: "node",
  testRegex: ".*\\.spec\\.ts$",
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
  restoreMocks: true,
  collectCoverageFrom: ["**/*.(t|j)s"],
  coverageDirectory: "../coverage",
};
