const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // 웹펙 시작 모드 설정
  mode: "development",

  // 디버깅을 위한 설정 배포 시 eval
  devtool: "source-map",

  // 경로 및 확장자 설정
  resolve: {
    extensions: [".jsx", ".js"],
    alias: {
      components: path.resolve(__dirname, "src/components"),
      util: path.resolve(__dirname, "src/util"),
    },
  },

  // 진입점 설정
  entry: {
    app: "./index.js",
  },

  // 빌드 결과물 위치 지정
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },

  // 로더 설정
  module: {
    rules: [
      // jsx 해석을 위한 babel로더 설정
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          // @babel/preset-env는 브라우저 환경에 맞게 알아서 바벨 설정을 해줌
          // @babel/preset-react는 jsx 지원
          presets: ["@babel/preset-env", "@babel/preset-react"],
          // dev server을 위한 설정
          plugins: ["react-refresh/babel"],
        },
      },
    ],
  },

  // 플러그인 설정
  plugins: [new HtmlWebpackPlugin({ title: "bluegram" }), new RefreshWebpackPlugin()],

  // 데브서버 설정
  devServer: {
    // 번들링한 결과물을 저장할 위치 ( 메모리상 )
    devMiddleware: {
      publicPath: "/dist",
    },
    // 정적 파일들의 위치 지정
    static: {
      // 내 컴퓨터에서 공유할 파일들이 있는 경로
      directory: path.resolve(__dirname, "public"),
      // 브라우저상에서 접근할 경로
      publicPath: "/",
      // 정적 파일 수정시 페이지 새로고침 여부
      watch: true,
      // index 파일 없으면 브라우저에서 폴더를 보여줄지 여부
      serveIndex: true,
    },
    hot: true,
    port: 8080,
  },
};
