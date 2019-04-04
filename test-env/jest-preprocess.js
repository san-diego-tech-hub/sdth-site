const babelOptions = {
  presets: [
    [
      "babel-preset-gatsby", {
        corejs: "2"
      }
    ]
  ]
}

module.exports = require("babel-jest").createTransformer(babelOptions)
