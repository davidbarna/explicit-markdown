import React, { useContext } from 'react';
import MarkdownSourceContext from './MarkdownSourceContext';

const MarkdownCodeRaw = (): JSX.Element => {
  const { code } = useContext(MarkdownSourceContext);
  return (
    <>
      <style scoped>
        {`
          pre {
            overflow-x: auto;
            white-space: pre-wrap;
            white-space: -moz-pre-wrap;
            white-space: -pre-wrap;
            white-space: -o-pre-wrap;
            word-wrap: break-word;
          }
        `}
      </style>
      <pre>
        <code>{code}</code>
      </pre>
    </>
  );
};

export default MarkdownCodeRaw;
