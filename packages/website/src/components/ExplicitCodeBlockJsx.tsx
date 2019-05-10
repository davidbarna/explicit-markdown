import React from 'react';
import ReactJson from 'react-json-tree';
import CodeBlock from './StyledCodeBlock';
import { parseCode } from '../lib/code-parser';
import CodePreview from './ExplicitCodeBlockJsxPreview';

interface CodeBlock {
  language: string;
  value: string;
}

const ExplicitCodeBlockJsx = ({ language, value }: CodeBlock): JSX.Element => {
  const { code, ...codeInfo } = parseCode(value);
  return (
    <>
      <CodeBlock language={language} value={value} />
      {
        <div style={{ border: '2px dashed tomato' }}>
          <CodePreview code={code} />
          <ReactJson data={codeInfo} invertTheme />
        </div>
      }
    </>
  );
};

export default ExplicitCodeBlockJsx;
