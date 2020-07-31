const logo = {
  white: '/img/Zenerate_Logo_white.png',
  color: '/img/Zenerate_Logo_color.png',
}

export const THEME = {
  '/': {
    0: {
      logo: logo.white,
      header: 'header-white',
    },
    1: {
      logo: logo.color,
      header: 'header-color',
    },
    2: {
      logo: logo.color,
      header: 'header-color',
    },
    3: {
      logo: logo.color,
      header: 'header-color',
    },
    4: {
      logo: logo.color,
      header: 'header-color',
    },
    init: {
      logo: '',
      header: 'transparent',
    },
  },
  '/project': {
    init: {
      logo: logo.color,
      header: 'header-color',
    },
    0: {
      logo: logo.color,
      header: 'header-color',
    },
    1: {
      logo: logo.color,
      header: 'header-color',
    },
    2: {
      logo: logo.color,
      header: 'header-color',
    },
    3: {
      logo: 'white',
      header: 'header-white',
    },
    4: {
      logo: logo.white,
      header: 'header-white',
    },
  },
}
