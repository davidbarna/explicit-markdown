import React, { useState } from 'react';
import Tabs from '@atlaskit/tabs';
import styled from 'styled-components';
import unified from 'unified';
import markdown from 'remark-parse';
import ReactJson from 'react-json-view';

const Padding = styled.div`
  padding: 20px;
`;

const Grid = styled.div`
  display: flex;
  padding: 20px;
`;

const GridColumn = styled.div`
  width: 50%;
  margin: 0 20px;
`;

interface TabData {
  label: string;
  content: JSX.Element;
}

const MarkdownDemo: React.SFC<{ children: string }> = ({
  children,
}): JSX.Element => {
  const mdast = unified()
    // @ts-ignore: no types for 'remark-parse'
    .use(markdown, { commonmark: true })
    .parse(children);

  const inputTabs: TabData[] = [
    { label: 'Markdown', content: <Padding>{children}</Padding> },
    {
      label: 'mdast',
      content: (
        <Padding>
          <ReactJson src={mdast} />
        </Padding>
      ),
    },
  ];

  const outputTabs: TabData[] = [
    { label: 'Explicit Markdown', content: <Padding>One</Padding> },
    { label: 'HTML', content: <Padding>Two</Padding> },
  ];

  const [selected, setSelected] = useState([0, 0]);
  const onInputSelect = (tab: TabData): void => {
    setSelected([inputTabs.indexOf(tab), selected[1]]);
  };
  const onOutputSelect = (tab: TabData): void => {
    setSelected([selected[0], outputTabs.indexOf(tab)]);
  };

  return (
    <Grid>
      <GridColumn medium={8}>
        <Tabs
          tabs={inputTabs}
          onSelect={onInputSelect}
          selected={inputTabs[selected[0]]}
        />
      </GridColumn>
      <GridColumn medium={8}>
        <Tabs
          tabs={outputTabs}
          onSelect={onOutputSelect}
          selected={outputTabs[selected[1]]}
        />
      </GridColumn>
    </Grid>
  );
};

export default MarkdownDemo;
