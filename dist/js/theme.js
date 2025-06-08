document.addEventListener('DOMContentLoaded', () => {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = localStorage.getItem('theme') || (prefersDark ? 'dark' : 'light');

  if (theme === 'dark') {
    document.getElementById('theme-light')?.setAttribute('disabled', 'true');
  } else {
    document.getElementById('theme-dark')?.setAttribute('disabled', 'true');
  }

  const imageSwaps = [
    {
      selector: '#logo',
      light: 'images/logo.svg',
      dark: 'images/cloudflare-logo-white.svg'
    },
    {
      selector: '#logo2',
      light: 'images/logo.svg',
      dark: 'images/cloudflare-logo-white.svg'
    },
    {
      selector: '#logo3',
      light: 'images/logo.svg',
      dark: 'images/cloudflare-logo-white.svg'
    },
    {
      selector: '#icon',
      light: 'images/icon-light.svg',
      dark: 'images/icon-dark.svg'
    },
    {
      selector: '#win_r',
      light: 'images/icons/win/win_r.svg',
      dark: 'images/icons/win/win_r_light.svg'
    },
    {
      selector: '#ctrl_r',
      light: 'images/icons/win/ctrl_v.svg',
      dark: 'images/icons/win/ctrl_v_light.svg'
    },
    {
      selector: '#enter',
      light: 'images/icons/win/enter.svg',
      dark: 'images/icons/win/enter_light.svg'
    },
    {
      selector: '#pressOne',
      light: 'images/icons/macos/1.svg',
      dark: 'images/icons/macos/1_light.svg'
    },
    {
      selector: '#findTwo',
      light: 'images/icons/macos/2.png',
      dark: 'images/icons/macos/2_light.png'
    },
    {
      selector: '#pressThree',
      light: 'images/icons/macos/3.svg',
      dark: 'images/icons/macos/3_light.svg'
    },
    {
      selector: '#pressFour',
      light: 'images/icons/macos/4.svg',
      dark: 'images/icons/macos/4_light.svg'
    }
  ];

  imageSwaps.forEach(({ selector, light, dark }) => {
    const img = document.querySelector(selector);
    if (img) {
      img.src = theme === 'dark' ? dark : light;
    }
  });

  const verifyingCheckPath = document.querySelector('#verifying-i-checking svg');
  if (verifyingCheckPath && theme === 'dark') {
    verifyingCheckPath.classList.add('dark');
  }
});