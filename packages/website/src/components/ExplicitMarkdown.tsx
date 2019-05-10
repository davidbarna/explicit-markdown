import React, { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import MarkdownSourceContext from './MarkdownSourceContext';
import ExplicitCodeBlock from './ExplicitCodeBlock';

const MDComponents = {
  code: ExplicitCodeBlock,
};

const ExplicitMarkdown = (): JSX.Element => {
  const { code } = useContext(MarkdownSourceContext);
  return (
    <>
      <style scoped>
        {`
          @import "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css";
        `}
      </style>
      <ReactMarkdown className='markdown-body' renderers={MDComponents}>
        {code}
      </ReactMarkdown>
    </>
  );
};

export default ExplicitMarkdown;
