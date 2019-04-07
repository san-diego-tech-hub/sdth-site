module.exports = {
  preset: "jest-puppeteer",
  globals: {
    __PATH_PREFIX__: "",
  },
  moduleFileExtensions: [
    "js", "jsx", "json",
  ],
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/file-mock.js",
    "^Components/(.*)$": "<rootDir>/src/components/$1",
    "^Common/(.*)$": "<rootDir>/src/components/common/$1",
    "^Test/(.*)$": "<rootDir>/test-env/$1",
    "^Utils/(.*)$": "<rootDir>/src/utils/$1",
  },
  setupFiles: [
    "<rootDir>/test-env/loadershim.js",
  ],
  setupFilesAfterEnv: [
    "<rootDir>/test-env/setup-test-env.js",
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/.cache/",
    "<rootDir>/public/",
  ],
  testRegex: "(visualtest|visualspec)\\.[jt]sx?$",
  testURL: "http://localhost",
  transform: {
    "^.+\\.jsx?$": "<rootDir>/test-env/jest-preprocess.js",
  },
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  watchPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/.cache/",
    "<rootDir>/public/",
  ],
}
