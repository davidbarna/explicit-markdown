import React from 'react';
import { graphql } from 'gatsby';
import App from '../components/App';
import MarkdownDemo from '../components/MarkdownDemo';

const ExamplePage: React.SFC<{}> = ({ data }): JSX.Element => {
  const markdownContent = data.rawMardownFiles.edges[0].node.content;
  return (
    <App>
      <MarkdownDemo>{markdownContent}</MarkdownDemo>
    </App>
  );
};

export default ExamplePage;

export const query = graphql`
  query {
    rawMardownFiles: allRawCode(filter: { instanceName: { eq: "src-files" } }) {
      edges {
        node {
          content
          parent {
            ... on File {
              relativePath
            }
          }
        }
      }
    }
  }
`;
