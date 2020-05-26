import React from 'react';
import { PageTab, PageWrap } from '@choerodon/boot';
import { StoreProvider } from './stores';
import ProjectNotify from './project-notify';
import SiteNotify from './site-notify';

export default props => (
  <StoreProvider {...props}>
    <PageWrap noHeader={['choerodon.code.person.receive-setting-project', 'choerodon.code.person.receive-setting-site']}>
      <PageTab route="/notify/receive-setting/project" title="项目通知" tabKey="choerodon.code.person.receive-setting-project" component={ProjectNotify} />
      <PageTab route="/notify/receive-setting/site" title="平台通知" tabKey="choerodon.code.person.receive-setting-site" component={SiteNotify} />
    </PageWrap>
  </StoreProvider>
);
