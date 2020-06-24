import { createMuiTheme }  from '@material-ui/core/styles'
import RalewayWoff2 from '../../Fonts/Raleway-Regular.ttf';
import AmperzandWoff2 from '../../Fonts/Amperzand.ttf';
import opensansWoff2 from '../../Fonts/OpenSans-Regular.ttf'

const opensans = {
  fontFamily: 'Opensans',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('Opensans'),
    local('Opensans-Regular'),
    url(${opensansWoff2}) format('ttf')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const raleway = {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('Raleway'),
      local('Raleway-Regular'),
      url(${RalewayWoff2}) format('ttf')
    `,
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  };
  const amperzand = {
    fontFamily: 'Amperzand',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('Amperzand'),
      local('Amperzand-Regular'),
      url(${AmperzandWoff2}) format('ttf')
    `,
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
  };


const theme = createMuiTheme({
  palette: {
    primary: { 
      main: '#008292',
      dark: '#abdee4',
      
    },
    secondary: {
      main: '#ecd4c8',
      dark:'#828789',
      
    },
    // status: {
    //   Error: '#008292',
    //   warning:'#abdee4',
    //   info: '#ecd4c8',
    //   success: '#828789'
    // }
},
  typography: {
    h1:{
      fontFamily: 'Amperzand, Arial',
      fontSize: 80,
      // [theme.breakpoints.up("md")]: {
      //   fontSize: 50
      // }
      
    },
    h2: {
      fontFamily: 'Raleway'
    },
    h3: {
      fontFamily: 'Whitney'
    },
    h4: {

    },
    h5: {
      fontFamily: 'Raleway, Arial',
      fontSize: 26,
    },
    h6: {
      fontFamily: 'Raleway, Arial',
      fontSize: 24,
    },
    subtitle1: {
      fontFamily: 'Amperzand, Arial',
      fontSize: 40
    },
    subtitle2: {
      fontFamily: 'Raleway, Arial',
      fontSize: 40
    },
    body1: {
      fontFamily: 'Raleway, Arial',
      fontSize: 20
    },
    body2: {
      fontFamily: 'Opensans, Arial',
      fontSize: 22,
    },
  

  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 610,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },

  // 610=md
  // overrides: {
  //   MuiCssBaseline: {
  //     '@global': {
  //       '@font-face': [raleway],
  //     },
  //   },
  // },
//   subtitle1: {
//     fontSize: 12,
//   },
//   body1: {
//     fontWeight: 500,
//   },
//   button: {
//     fontStyle: 'italic',
//   },
//   typography: {
//       fontFamily: 'raleway'
//   }
})

export default theme