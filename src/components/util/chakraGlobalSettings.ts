import { extendTheme } from '@chakra-ui/react';

import { breakpoints } from '@/styles/Breakpoints';

const mq = `@media screen and (min-width: 480px)`;

const lightMode = {
  colors: {
    moji: {
      main: '#333',
      sub: '#e0e0e0'
    },
    solid: {
      main: '#E2E4E4'
    },
    brand: {
      main: '#c49020',
      accent: '#EB7A38'
    },
    background: {
      main: '#E6F2F3',
      brandColor: '#c49020',
      header: '#c49020'
    },
    colorScheme: {
      500: '#007985'
    }
  },
  fontSizes: {
    xmini: '0.7em',
    mini: '0.8em',
    base: '16px',
    big: '1.4142135623em',
    bigX: '1.6180339887em'
  },
  borders: {
    main: '1px solid #E2E4E4'
  },
  radii: {
    main: '8px'
  },
  shadows: {
    main: 'rgba(0, 0, 0, 0.1) 0px 3px 5px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
  },
  colorScheme: {
    500: '#007985'
  }
};

const darkMode = {
  colors: {
    moji: {
      main: '#234232',
      sub: '#e0e0e0'
    },
    solid: {
      main: '#E2E4E4'
    },
    brand: {
      main: '#c49020',
      accent: '#EB7A38'
    },
    background: {
      main: '#333',
      brandColor: '#c49020'
    },
    colorScheme: {
      500: '#007985'
    }
  },
  fontSizes: {
    xmini: '0.7em',
    mini: '0.8em',
    base: '16px',
    big: '1.4142135623em',
    bigX: '1.6180339887em'
  },
  borders: {
    main: '1px solid #E2E4E4'
  },
  radii: {
    main: '8px'
  },
  shadows: {
    main: 'rgba(0, 0, 0, 0.1) 0px 3px 5px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px'
  },
  colorScheme: {
    500: '#007985'
  }
};

const config = {
  initialColorMode: 'light',
  useSystemColorMode: true
};

export const CustomTheme = extendTheme({
  config,
  modes: {
    light: {
      colors: lightMode.colors,
      fontSizes: lightMode.fontSizes,
      borders: lightMode.borders,
      radii: lightMode.radii,
      shadows: lightMode.shadows,
      colorScheme: lightMode.colorScheme,
      background: lightMode.colors.background.main
    },
    dark: {
      colors: darkMode.colors,
      fontSizes: darkMode.fontSizes,
      borders: darkMode.borders,
      radii: darkMode.radii,
      shadows: darkMode.shadows,
      colorScheme: darkMode.colorScheme
    }
  },
  breakpoints,
  colors: {
    header: {
      main: '#333'
    },
    moji: {
      main: '#333',
      sub: '#e0e0e0'
    },
    solid: {
      main: '#E2E4E4',
      softPurple: '#e5d0d4'
    },
    brand: {
      main: '#7e162a',
      accent: '#EB7A38',
      header: '#000',
      softPurple: '#e5d0d4'
    },
    colorScheme: {
      500: '#007985'
    },
    background: {
      main: '#7e162a',
      sub: '#f2e8ea',
      accent: '#EB7A38',
      header: '#000'
    }
  },
  background: {
    main: '#333'
  },
  styles: {
    global: ({ colorMode: mode }: { colorMode: string }) => ({
      'html, body': {
        color: mode === 'light' ? `moji.main` : '#fff',
        background: mode === 'light' ? '#fff' : '#333',
        lineHeight: '1.6180339887',
        fontSize: 'base',
        letterSpacing: '0.08em',
        textAlign: 'justify',
        textJustify: 'inter-ideograph',
        fontFamily:
          '"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", "BIZ UDPGothic",Meiryo, sans-serif'
      },
      a: {
        color: 'brand.main',
        display: 'inline'
      },
      h1: {
        color: 'brand.main',
        fontSize: 'big',
        fontWeight: 'bold',
        padding: '0.7071067812em 0em',
        [mq]: {
          fontSize: 'bigX'
        }
      },
      h2: {
        color: 'brand.main',
        fontSize: 'big',
        fontFamily: 'ZenOldMincho',
        fontWeight: 'bold',
        padding: '0.7071067812em 0em'
      },
      h3: {
        color: 'moji.main',
        fontSize: '20px',
        fontWeight: 'bold',
        padding: '0.7071067812em 0em'
      },
      blockquote: {
        background: '#f0fcff',
        padding: '20px',
        margin: '16px 0',
        boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        lineHeight: '1.8180339887'
      }
    })
  }
});
