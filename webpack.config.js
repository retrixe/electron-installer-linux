const BabiliPlugin = require("babili-webpack-plugin");
const { DefinePlugin } = require("webpack");

function generateExternals(externals) {
  const externalsObject = {};
  externals.map((external) => {
    externalsObject[external] = {
      commonjs: external,
      commonjs2: external,
      amd: external,
      root: external,
    };
    return true;
  });
  return externalsObject;
}

module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "index.js",
    sourceMapFilename: "index.js.map",
    library: "generateInstaller",
    libraryTarget: "umd",
  },
  devtool: "source-map",
  externals: generateExternals(["electron-installer-flatpak", "electron-installer-redhat", "electron-installer-debian"]),
  plugins: [
    new BabiliPlugin(),
    new DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production"),
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {},
        },
      },
    ],
  },
};
