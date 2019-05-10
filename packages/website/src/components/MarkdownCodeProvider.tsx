import React from 'react';
import unified from 'unified';
import markdown from 'remark-parse';
import MarkdownSourceContext from './MarkdownSourceContext';
import remarkParsedCodeBlock from '../lib/remark-parsed-codeblock';

const MarkdownCodeProvider: React.SFC<Props> = ({
  code,
  children,
}): JSX.Element => {
  const ast = unified()
    .use(markdown, { commonmark: true })
    .parse(code);

  return (
    <MarkdownSourceContext.Provider value={{ code, ast }}>
      {children}
    </MarkdownSourceContext.Provider>
  );
};

export default MarkdownCodeProvider;
