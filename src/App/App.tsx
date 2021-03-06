import 'braid-design-system/reset';

import { BraidProvider } from 'braid-design-system';
import { Text } from 'braid-design-system';
import apac from 'braid-design-system/themes/apac';
import React from 'react';
import { BraidTheme } from 'braid-design-system/lib/themes/BraidTheme';

interface AppProps {
  environment: 'development' | 'production';
  theme: BraidTheme;
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
export default ({ environment, theme }: AppProps) => (
  <BraidProvider theme={theme}>
    <Text>Hello world!</Text>
  </BraidProvider>
);
