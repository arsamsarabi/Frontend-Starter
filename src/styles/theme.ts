import type { ThemeType } from '#types/theme'

const Colors = {
  vistaWhite: '#FAF3F3',
  brightGray: '#393E46',
  bondiBlue: '#00ADB5',
  sinbad: '#AAD8D3',
  observatory: '#01937C',
  pomegranate: '#F33A3A',
  sun: '#F9B208',
}

const defaultTheme: ThemeType = {
  mode: 'light',
  font: {
    family: {
      main: 'Roboto, serif',
      heading: 'Castoro, Arial',
    },
    sizes: [0, 12, 14, 16, 20, 24, 28, 36, 42],
  },
  palette: {
    light: {
      primary: Colors.brightGray,
      secondary: Colors.bondiBlue,
      accent: Colors.sinbad,
      success: Colors.observatory,
      danger: Colors.pomegranate,
      warning: Colors.sun,
      text: Colors.brightGray,
      contrast: Colors.vistaWhite,
      bg: Colors.vistaWhite,
    },
    common: {
      black: '#000',
      white: '#FFF',
      gray: {
        50: ' #fafafa',
        100: ' #f5f5f5',
        200: ' #eeeeee',
        300: ' #e0e0e0',
        400: ' #bdbdbd',
        500: ' #9e9e9e',
        600: ' #757575',
        700: ' #616161',
        800: ' #424242',
        900: ' #212121',
      },
    },
  },
}

export default defaultTheme
