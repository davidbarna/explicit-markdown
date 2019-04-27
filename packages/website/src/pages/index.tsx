import React from 'react';
import PageHeader from '../components/PageHeader';
import ContentWrapper from '../components/ContentWrapper';
import App from '../components/App';

const IndexPage: React.SFC<{}> = (): JSX.Element => (
  <App>
    <ContentWrapper>
      <PageHeader>Explicit Markdown Website</PageHeader>
    </ContentWrapper>
  </App>
);

export default IndexPage;
