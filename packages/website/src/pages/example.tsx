import "@atlaskit/css-reset";
import React from "react";
import Tabs from "@atlaskit/tabs";
import styled from "styled-components";
const Grid = styled.div`
  display: flex;
  padding: 20px;
`;

const GridColumn = styled.div`
  width: 50%;
  margin: 0 20px;
`;

const inputTabs = [
  { label: "Markdown", content: <div>One</div> },
  { label: "mdast", content: <div>Two</div> }
];

const outputTabs = [
  { label: "Explicit Markdown", content: <div>One</div> },
  { label: "HTML", content: <div>Two</div> }
];

export default () => (
  <Grid>
    <GridColumn medium={8}>
      <Tabs tabs={inputTabs} />
    </GridColumn>
    <GridColumn medium={8}>
      <Tabs tabs={outputTabs} />
    </GridColumn>
  </Grid>
);
