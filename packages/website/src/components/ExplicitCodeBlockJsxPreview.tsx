import React from 'react';
import contextRequire, { setDependency } from '../lib/context-require';

const evalCode = (code, scope = {}): any => {
  scope.require = contextRequire;
  const scopeKeys = Object.keys(scope);
  const scopeValues = Object.values(scope);
  const exports = {};
  const evalFunc = new Function('exports', ...scopeKeys, code);
  evalFunc(exports, ...scopeValues);
  return exports.default;
};

const ExplicitCodeBlockJsxPreview = ({
  code,
}: {
  code: string;
}): JSX.Element => {
  const Component = evalCode(code);
  return Component ? <Component /> : null;
};

export default ExplicitCodeBlockJsxPreview;
