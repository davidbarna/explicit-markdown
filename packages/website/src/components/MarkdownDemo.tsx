import React, { useState } from 'react';
import Tabs from '@atlaskit/tabs';
import styled from 'styled-components';
import unified from 'unified';
import markdown from 'remark-parse';
import SplitterLayout from 'react-splitter-layout';
import MarkdownCodeProvider from './MarkdownCodeProvider';
import 'react-splitter-layout/lib/index.css';
import MarkdownCodeRaw from './MarkdownCodeRaw';
import MarkdownAst from './MarkdownAst';
import MarkdownToReact from './MarkdownToReact';
import ExplicitMarkdown from './ExplicitMarkdown';

const Padding = styled.div`
  padding: 20px;
`;

const Grid = styled.div`
  display: flex;
  padding: 20px;
`;

const GridColumn = styled.div`
  margin: 0 20px;
  overflow: hidden;
  width: 50%;
`;

interface TabData {
  label: string;
  content: JSX.Element;
}

const MarkdownDemo: React.SFC<{ children: string }> = ({
  children: code,
}): JSX.Element => {
  const ast = unified()
    // @ts-ignore: no types for 'remark-parse'
    .use(markdown, { commonmark: true })
    .parse(code);

  const inputTabs: TabData[] = [
    {
      label: 'Markdown',
      content: (
        <Padding>
          <MarkdownCodeRaw />
        </Padding>
      ),
    },
    {
      label: 'MDAST',
      content: (
        <Padding>
          <MarkdownAst />
        </Padding>
      ),
    },
  ];

  const outputTabs: TabData[] = [
    {
      label: 'Explicit Markdown',
      content: (
        <Padding>
          <ExplicitMarkdown />
        </Padding>
      ),
    },
    {
      label: 'React Markdown',
      content: (
        <Padding>
          <style scoped>
            {`
            @import "https://cdnjs.cloudflare.com/ajax/libs/github-markdown-css/3.0.1/github-markdown.min.css";
           `}
          </style>
          <MarkdownToReact />
        </Padding>
      ),
    },
  ];

  const [selected, setSelected] = useState([0, 0]);
  const onInputSelect = (tab: TabData): void => {
    setSelected([inputTabs.indexOf(tab), selected[1]]);
  };
  const onOutputSelect = (tab: TabData): void => {
    setSelected([selected[0], outputTabs.indexOf(tab)]);
  };

  return (
    <MarkdownCodeProvider code={code}>
      <div style={{ height: '100vh' }}>
        <SplitterLayout>
          <Tabs
            tabs={inputTabs}
            onSelect={onInputSelect}
            selected={inputTabs[selected[0]]}
          />
          <Tabs
            tabs={outputTabs}
            onSelect={onOutputSelect}
            selected={outputTabs[selected[1]]}
          />
        </SplitterLayout>
      </div>
    </MarkdownCodeProvider>
  );
};

export default MarkdownDemo;
