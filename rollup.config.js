import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
  entry: "src/index.js",
  format: "es",
  plugins: [resolve(), commonjs({
    include: "node_modules/**",
  }), babel({
    exclude: "node_modules/**",
    presets: ["babili"],
  })],
  external: ["electron-installer-flatpak", "electron-installer-redhat", "electron-installer-debian"],
  sourceMap: true,
  dest: "index.esm.js",
};
