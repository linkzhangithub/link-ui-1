const esbuild = require("rollup-plugin-esbuild");
const vue = require("rollup-plugin-vue");
const scss = require("rollup-plugin-scss");
const dartSass = require("sass");
const { terser } = require("rollup-plugin-terser");

module.exports = {
  input: "src/lib/index.ts",
  output: {
    globals: {
      vue: "Vue",
    },
    name: "Link",
    file: "dist/lib/link.js",
    format: "umd",
    plugins: [terser()],
  },
  plugins: [
    vue({
      include: /\.vue$/, // 处理 .vue 文件
    }),
    scss({ include: /\.scss$/, sass: dartSass }),
    esbuild({
      include: /\.[jt]s$/,
      minify: process.env.NODE_ENV === "production",
      target: "es2015",
    }),
  ],
  external: [
    "vue", // 将 vue 标记为外部依赖
  ],
};
