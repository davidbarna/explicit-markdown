import * as babel from '@babel/core';
import { resolve } from 'path';

const mapDeep = (source, func, target = []) => {
  Object.entries(source).forEach(([key, value]) => {
    if (value instanceof Object) {
      const result = func(value);
      result && target.push(result);
      mapDeep(value, func, target);
    }
  });

  return target;
};

const mapRequire = (value) => {
  if (value.type === 'CallExpression' && value.callee.name === 'require') {
    const regex = /^([a-z0-9-_]+|@[a-z0-9-_]+\/[a-z0-9-_]+)(.*)$/;
    const path = value.arguments[0].value;
    const matches = regex.exec(path);

    return {
      type: value.callee.name,
      package: matches[1],
      relativePath: matches[2],
      path,
    };
  }
};

const babelOptions = {
  presets: [
    require('@dal/babel-preset'),
    // [require("@babel/preset-env")],
    // require("@babel/preset-typescript"),
    // require("@babel/preset-react")
  ],
  plugins: [
    // require("@babel/plugin-proposal-class-properties"),
    // require("@babel/plugin-syntax-dynamic-import"),
    // require("@babel/plugin-transform-runtime")
  ],
  // sourceType: "script"
};

export const parseCode = (code: string) => {
  const results = babel.transformSync(code, {
    ast: true,
    code: true,
    filename: 'index.jsx',
    ...babelOptions,
  });
  const imports = mapDeep(results.ast.program.body, mapRequire);

  return {
    imports: [...imports],
    code: results.code,
    ast: results.ast,
  };
};
