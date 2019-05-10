import React from 'react';
import CodeBlock from './StyledCodeBlock';
import ExplicitCodeBlockJsx from './ExplicitCodeBlockJsx';

interface CodeBlock {
  language: string;
  value: string;
}

const languageComponentMap = {
  jsx: ExplicitCodeBlockJsx,
  js: ExplicitCodeBlockJsx,
  javascript: ExplicitCodeBlockJsx,
};

const ExplicitCodeBlock = ({ language, value }: CodeBlock): JSX.Element => {
  const CustomCodeBlock = languageComponentMap[language] || CodeBlock;
  return <CustomCodeBlock language={language} value={value} />;
};

export default ExplicitCodeBlock;
