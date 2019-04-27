import React from 'react';
import { BreadcrumbsStateless, BreadcrumbsItem } from '@atlaskit/breadcrumbs';
import AkPageHeader from '@atlaskit/page-header';

const breadcrumbs = (
  <BreadcrumbsStateless>
    <BreadcrumbsItem text='Home' key='Home' />
  </BreadcrumbsStateless>
);

const PageHeader: React.SFC<{ children: string }> = ({
  children,
}): JSX.Element => (
  <AkPageHeader breadcrumbs={breadcrumbs}>{children}</AkPageHeader>
);

export default PageHeader;
