import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coy } from 'react-syntax-highlighter/dist/styles/hljs/github';

const StyledCodeBlock = ({ language, value }) => (
  <SyntaxHighlighter language={language} style={coy}>
    {value}
  </SyntaxHighlighter>
);

export default StyledCodeBlock;
