import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import typescript from "@rollup/plugin-typescript";
import minifyHTML from "rollup-plugin-minify-html-literals";
import { terser } from "rollup-plugin-terser";

module.exports = {
    input: "./src/index.ts",
    output: {
        dir: "./public/scripts",
        format: "esm",
        sourcemap: true
    },
    plugins: [
        replace({
            "process.env.NODE_ENV": JSON.stringify("production"),
        }),
        resolve({ dedupe: ["lit-element", "lit-html"] }),
        commonjs(),
        typescript(),
        minifyHTML(),
        terser()
    ]
};