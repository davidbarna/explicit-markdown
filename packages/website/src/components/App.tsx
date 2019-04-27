import '@atlaskit/css-reset';
import React from 'react';
import Page from '@atlaskit/page';

const App: React.SFC<{ children: JSX.Element }> = ({
  children,
}): JSX.Element => (
  <div>
    <Page
      // navigationWidth={this.context.navOpenState.width}
      navigation={null}
    >
      {children}
    </Page>
  </div>
);

export default App;
