const dependencies = {};

const setDependency = (path, value) => {
  dependencies[path] = value;
};

const contextRequire = (path) => {
  if (dependencies[path]) return dependencies[path];
  throw new Error(`Missing dependency required: ${path}`);
};

setDependency(
  '@babel/runtime/helpers/interopRequireDefault',
  require('@babel/runtime/helpers/interopRequireDefault'),
);
setDependency('react', require('react'));
setDependency(
  '@github/markdown-toolbar-element',
  require('@github/markdown-toolbar-element'),
);
setDependency(
  '@webcomponents/custom-elements',
  require('@webcomponents/custom-elements'),
);
setDependency(
  '@webcomponents/custom-elements',
  require('@webcomponents/custom-elements'),
);
setDependency('@atlaskit/tabs', require('@atlaskit/tabs'));
setDependency('unified', require('unified'));
setDependency('remark-parse', require('remark-parse'));
setDependency('remark-shortcodes', require('remark-shortcodes'));

export default contextRequire;
export { setDependency };
