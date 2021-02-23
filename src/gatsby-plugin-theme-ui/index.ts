export default {
  colors: {
    text: '#000000',
    background: '#ffffff',
    primary: '#c681ba',
    primaryLight: '#e8cde3',
    lightGrey: '#efefef',
    midGrey: '#c5c5c5',
    darkGrey: '#535353',
  },
  fonts: {
    heading: 'Helvetica, Arial',
    body: 'Helvetica, Arial',
  },
  fontWeights: {
    heading: 700,
    body: 400,
  },
  fontSizes: ['0.8rem', '1rem', '1.2rem', '1.8rem', '2rem', '2.5rem', '3rem', '4rem'],
  letterSpacings: {
    heading: '1rem',
    body: '.1rem',
  },
  lineHeights: {
    heading: '1rem',
    h1: '4rem',
    h2: '3.4rem',
    h3: '3rem',
    h4: '2.7rem',
    h5: '2.5rem',
    h6: '2.3rem',
    body: '1.2rem',
  },
  sizes: {
    header: '64px',
    container: '840px',
    full: '100%',
  },

  space: [1, 2, 4, 8, 16, 24, 32, 64, 128, 256],

  shadows: ['rgb(0 0 0 / 15%) 0px 14px 48px -4px'],

  styles: {
    root: {
      fontFamily: 'body',
      letterSpacing: 'body',
      lineHeight: 'body',
      fontSize: 1,

      '.wp-block-columns, .side-by-side': {
        display: 'grid',
        gap: 4,
        gridTemplateColumns: ['1fr', '1fr 1fr'],
        '.wp-block-column': {},
      },
    },

    p: {
      color: 'primary',
    },

    h1: {
      variant: 'text.heading',
      fontSize: 7,
      lineHeight: 'h1',
      '::before': {
        variant: 'text.before',
        left: (theme) => `${theme.space[2]}px`,
      },
    },
    h2: {
      variant: 'text.heading',
    },
    h3: {
      variant: 'text.heading',
      fontSize: 5,
      lineHeight: 'h3',
    },
    h4: {
      variant: 'text.heading',
      fontSize: 4,
      lineHeight: 'h4',
    },
    h5: {
      variant: 'text.heading',
      fontSize: 3,
      lineHeight: 'h5',
    },
    h6: {
      variant: 'text.heading',
      fontSize: 2,
      lineHeight: 'h6',
    },
    header: {
      alignItems: 'center',
      display: 'flex',
      height: 'header',
      px: [2, 4],
      a: {
        variant: 'links.nav',
      },
    },
    a: {
      color: 'inherit',
    },
  },
  buttons: {
    primary: {
      backgroundColor: 'text',
      color: 'background',
      cursor: 'pointer',
    },
  },
  cards: {
    primary: {
      position: 'relative',
      boxShadow: 0,
      a: {
        variant: 'styles.a',
        textDecoration: 'none',
      },
    },
  },
  links: {
    color: 'inherit',
    nav: {
      alignItems: 'center',
      color: 'inherit',
      display: 'flex',
      p: 3,
      fontSize: 0,
      textTransform: 'uppercase',
      textDecoration: 'none',
      transition: '.2s linear background-color',
      ':hover': {
        backgroundColor: 'lightGrey',
      },
      '&[aria-current="page"]': {
        color: 'primary',
        cursor: 'default',
        ':hover': {
          backgroundColor: 'white',
        },
      },
    },
  },
  forms: {
    label: {
      color: 'darkGrey',
      variant: 'text.uppercase',
    },
    slider: {
      color: 'primary',
      backgroundColor: 'primaryLight',
      ':disabled': {
        cursor: 'not-allowed',
        color: 'midGrey',
        backgroundColor: 'lightGrey',
      },
    },
  },
  text: {
    uppercase: {
      fontSize: 0,
      textTransform: 'uppercase',
    },
    before: {
      content: `''`,
      bottom: 0,
      left: 0,
      position: 'absolute',
      backgroundColor: 'text',
      height: (theme) => `${theme.space[0]}px`,
      width: '2%',
    },
    heading: {
      fontSize: 6,
      lineHeight: 'h2',
      letterSpacing: 'heading',
      position: 'relative',
      textTransform: 'uppercase',
      mb: 6,
      '::before': {
        variant: 'text.before',
      },
    },
  },
  layout: {
    container: {
      px: [4, 5],
    },
  },
}
