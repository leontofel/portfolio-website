import { extendTheme } from '@chakra-ui/react';

const colors = {
  brand: {
    900: `#404258`,
    800: `#474E68`,
    700: `#50577A`,
    600: `#6B728E`,
    500: `#181823`,
  },
};
const fontFamily = {
  font: {
    gloock: `Gloock`,
    main: `EB Garamond`,
  },
};

export const theme = extendTheme({ colors, fontFamily });
