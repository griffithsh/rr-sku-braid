import React from 'react';
import ReactDOM from 'react-dom/server';
import type { Render } from 'sku';

import { ClientContext } from './types';

interface RenderContext {
  appHtml: string;
}

const skuRender: Render<RenderContext> = {
  renderApp: () => ({
    appHtml: ReactDOM.renderToString(<></>),
  }),

  provideClientContext: ({ environment }): ClientContext => ({
    environment,
  }),

  renderDocument: ({ bodyTags, headTags }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        ${headTags}
      </head>
      <body onload="RRWidget(document.getElementById('root'),{'useApac':true})">
        <div id="root"></div>
        ${bodyTags}
      </body>
    </html>
  `,
};

export default skuRender;
