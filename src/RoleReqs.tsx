import 'braid-design-system/reset';

import { BraidProvider } from 'braid-design-system';
import { Text } from 'braid-design-system';
import { BraidTheme } from 'braid-design-system/lib/themes/BraidTheme';
import React from 'react';
import { apac, wireframe } from 'braid-design-system/lib/themes';

export interface RoleReqsOptions {
  theme: BraidTheme;
  useApac: boolean;
}

/*
type BraidTheme = {
    vanillaTheme: string;
    name: string;
    displayName: string;
    background: string;
    webFonts: {
        linkTag: string;
    }[];
    space: {
        grid: number;
        space: {
            gutter: number;
            xxsmall: number;
            xsmall: number;
            small: number;
            medium: number;
            large: number;
            xlarge: number;
            xxlarge: number;
        };
    };
    color: {
        ...;
    };
    backgroundLightness: {
        ...;
    };
    treatTheme: string;
}
 */
export default ({ useApac }: RoleReqsOptions) => {
  const theme = useApac ? apac : wireframe;

  return (
    <BraidProvider theme={theme}>
      <Text>Hello world!</Text>
    </BraidProvider>
  );
};
