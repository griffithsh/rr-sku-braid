import { apac, seekAnz } from 'braid-design-system/lib/themes';
import React from 'react';
import ReactDOM from 'react-dom';

import RoleReqs, { RoleReqsOptions } from './RoleReqs';

export default (element: HTMLElement, options: RoleReqsOptions) => {
  const theme = options.useApac ? apac : seekAnz;
  ReactDOM.render(<RoleReqs theme={theme} />, element);
};
