import React, { useContext } from 'react';
import ReactJson from 'react-json-tree';
import MarkdownSourceContext from './MarkdownSourceContext';

const theme = {
  scheme: 'google',
  author: 'seth wright (http://sethawright.com)',
  base00: '#1d1f21',
  base01: '#282a2e',
  base02: '#373b41',
  base03: '#969896',
  base04: '#b4b7b4',
  base05: '#c5c8c6',
  base06: '#e0e0e0',
  base07: '#ffffff',
  base08: '#CC342B',
  base09: '#F96A38',
  base0A: '#FBA922',
  base0B: '#198844',
  base0C: '#3971ED',
  base0D: '#3971ED',
  base0E: '#A36AC7',
  base0F: '#3971ED',
};

const MarkdownAst = (): JSX.Element => {
  const { ast } = useContext(MarkdownSourceContext);
  return (
    <ReactJson
      data={ast}
      hideRoot
      theme={theme}
      invertTheme
      shouldExpandNode={(keyName, data, level) => data.type === 'code'}
    />
  );
};

export default MarkdownAst;
