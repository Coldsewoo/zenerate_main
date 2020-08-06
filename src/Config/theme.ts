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
  '/about': {
    init: {
      logo: logo.white,
      header: 'header-white',
    },
    0: {
      logo: logo.white,
      header: 'header-white',
    },
    1: {
      logo: logo.white,
      header: 'header-white',
    },
  },
  '/news': {
    init: {
      logo: logo.color,
      header: 'header-color',
    },
    0: {
      logo: logo.color,
      header: 'header-color',
    },
  },
  '/contact': {
    init: {
      logo: logo.color,
      header: 'header-color',
    },
    0: {
      logo: logo.color,
      header: 'header-color',
    },
  },
}
