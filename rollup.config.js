// rollup.config.js
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import resolve from '@rollup/plugin-node-resolve';
import json from '@rollup/plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';
// import shebang from 'rollup-plugin-preserve-shebang';
import pkg from './package.json' assert { type: 'json' };

export default {
  input: 'src/index.ts', // 你的源码入口文件
  output: {
    file: 'dist/bitou.js', // 输出文件名
    format: 'esm', // 输出格式设置为CommonJS，因为Node.js使用这个格式
    banner: '#!/usr/bin/env node', // 为CLI工具添加shebang
  },
  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.json', '.node', '.ts'], // 添加 '.ts'
    }),
    typescript(), // 添加TypeScript插件
    // shebang(), // 保留文件头部的shebang
    commonjs(), // 将CommonJS模块转换为ES6
    json(), // 允许导入JSON文件
    globals(), // 插入Node.js全局变量模拟
    builtins(), // 包括Node.js内置模块的聚合
  ],
  watch: {
    include: 'src/**',
    clearScreen: false,
  },
  external: [...Object.keys(pkg.dependencies || {})], // 声明外部依赖
};
