module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{js,jsx,ts,tsx,vue,html}',
    './pages/**/*.{js,jsx,ts,tsx,vue,html}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1/4': '25%',
        0: '0',
        1: '1px',
        2: '2px',
        3: '3px',
        4: '4px',
        5: '5px',
        6: '6px',
        7: '7px',
        8: '8px',
        9: '9px',
        10: '10px',
        12: '12px',
        15: '15px',
        16: '16px',
        20: '20px',
        24: '24px',
        25: '25px',
        28: '28px',
        30: '30px',
        32: '32px',
        35: '35px',
        36: '36px',
        40: '40px',
        50: '50px',
        60: '60px',
        100: '100',
        132: '132'
      },
      lineHeight: theme => ({
        ...theme('fontSize')
      }),
      width: theme => ({
        ...theme('spacing'),
        fit: 'fit-content'
      })
    },
    fontFamily: {
      main: ['Inter', 'sans-serif']
    },
    boxShadow: {
      none: 'none',
      'overlay-1': 'inset 0px -30px 11px -13px rgba(247, 247, 247, 0.3)'
    },
    minHeight: theme => ({
      ...theme('spacing'),
      0: '0',
      full: '100%',
      screen: '100vh'
    })
  },
  variants: {
    extend: {}
  },
  plugins: []
}
