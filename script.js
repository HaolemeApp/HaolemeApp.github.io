const translations = {
  zh: {
    brand: "好了么",
    navFeatures: "功能",
    navHow: "使用",
    navSecurity: "安全",
    eyebrow: "命令在跑，你不必盯着",
    heroBrand: "好了么",
    heroAlt: "Haoleme",
    heroLead: "在手机上查看电脑和服务器里的命令状态、终端输出和设备在线情况。运行结束，立即收到通知。",
    downloadApp: "下载 Android App",
    viewGithub: "查看 GitHub",
    tagNotify: "完成通知",
    signalPrefix: "个命令前缀",
    signalPair: "种配对方式",
    signalDevices: "多设备监控",
    featuresLabel: "为什么用好了么",
    featuresTitle: "终端离你很远，状态离你很近。",
    featuresLead: "为训练任务、远程脚本、批处理和长时间运行的命令而做。",
    featureLiveTitle: "实时运行状态",
    featureLiveBody: "运行中、成功、失败一眼看清。设备在线状态、GPU 和 CPU 信息也在同一处。",
    featureConsoleTitle: "查看运行输出",
    featureConsoleBody: "在手机上查看终端输出、搜索关键词，需要时再加载更早记录。",
    featureNotifyTitle: "结束时通知",
    featureNotifyBody: "不必守着 SSH。命令完成或失败后，手机会告诉你。",
    featureProjectTitle: "项目与设备",
    featureProjectBody: "按项目归档运行记录，在多台电脑和服务器之间快速切换。",
    featureSyncTitle: "断网后继续同步",
    featureSyncBody: "网络恢复后补传运行记录，本地缓存让历史结果随时可看。",
    featureSecureTitle: "敏感内容端到端加密",
    featureSecureBody: "命令、路径和控制台内容在设备端加密。云端只负责转发密文。",
    howLabel: "快速开始",
    howTitle: "三步，手机开始看终端。",
    stepInstallTitle: "安装 CLI",
    stepPairTitle: "扫码配对",
    stepRunTitle: "运行命令",
    terminalLabel: "就是这么简单",
    terminalTitle: "只在原命令前加 hao。",
    terminalBody: "命令照常在当前终端运行，输出同时安全同步到 App。",
    securityLabel: "安全与开源",
    securityTitle: "你的命令，只有你能看。",
    securityLead: "配对码有时效，设备可随时撤销；敏感运行内容采用端到端加密。App 与 CLI 核心代码公开可审计。",
    sourceCode: "查看源代码",
    securityE2ee: "端到端加密",
    securityPair: "限时配对码",
    securityRevoke: "设备随时撤销",
    securityMask: "敏感文本隐藏",
    readyLabel: "准备好了吗",
    readyTitle: "让终端自己跑，你去做别的。",
    downloadLatest: "下载最新版",
    footerText: "命令运行监控，从终端到手机。",
    footerDownload: "下载",
    officialWebsiteLabel: "官网",
    themeToLight: "切换浅色主题",
    themeToDark: "切换深色主题",
    copied: "安装命令已复制"
  },
  en: {
    brand: "Haoleme",
    navFeatures: "Features",
    navHow: "Quickstart",
    navSecurity: "Security",
    eyebrow: "Let the command run. Stop watching it.",
    heroBrand: "Haoleme",
    heroAlt: "好了么",
    heroLead: "Track commands, console output, and device status from your phone. Get notified the moment a job finishes.",
    downloadApp: "Download Android App",
    viewGithub: "View on GitHub",
    tagNotify: "Finish alerts",
    signalPrefix: "command prefix",
    signalPair: "pairing methods",
    signalDevices: "devices monitored",
    featuresLabel: "Why Haoleme",
    featuresTitle: "Far from the terminal. Close to the status.",
    featuresLead: "Built for training jobs, remote scripts, batch work, and every command that takes a while.",
    featureLiveTitle: "Live run status",
    featureLiveBody: "See running, succeeded, and failed jobs at a glance, alongside device, GPU, and CPU status.",
    featureConsoleTitle: "View run output",
    featureConsoleBody: "View terminal output on your phone, search keywords, and load earlier history when needed.",
    featureNotifyTitle: "Know when it is done",
    featureNotifyBody: "Stop babysitting SSH. Your phone tells you when a command succeeds or fails.",
    featureProjectTitle: "Projects and devices",
    featureProjectBody: "Group runs by project and move quickly between computers and remote servers.",
    featureSyncTitle: "Recover after disconnects",
    featureSyncBody: "Runs upload after the network returns, while local cache keeps history available.",
    featureSecureTitle: "End-to-end encrypted content",
    featureSecureBody: "Commands, paths, and console output are encrypted on your devices. The cloud relays ciphertext.",
    howLabel: "Quickstart",
    howTitle: "Three steps from terminal to phone.",
    stepInstallTitle: "Install the CLI",
    stepPairTitle: "Scan to pair",
    stepRunTitle: "Run a command",
    terminalLabel: "That is really it",
    terminalTitle: "Put hao before your command.",
    terminalBody: "The command still runs in your terminal while its output syncs securely to the app.",
    securityLabel: "Security and open source",
    securityTitle: "Only you can read your commands.",
    securityLead: "Pairing codes expire, devices can be revoked, and sensitive run content is end-to-end encrypted. Core App and CLI code is open for review.",
    sourceCode: "View source code",
    securityE2ee: "End-to-end encryption",
    securityPair: "Expiring pairing codes",
    securityRevoke: "Revocable devices",
    securityMask: "Sensitive text masking",
    readyLabel: "Ready",
    readyTitle: "Let the terminal run. Go do something else.",
    downloadLatest: "Download latest",
    footerText: "Command monitoring, from terminal to phone.",
    footerDownload: "Download",
    officialWebsiteLabel: "Website",
    themeToLight: "Switch to light theme",
    themeToDark: "Switch to dark theme",
    copied: "Install command copied"
  }
};

const screenshots = {
  zh: {
    home: "assets/screenshots/home-zh.png",
    settings: "assets/screenshots/settings-zh.png",
    homeAlt: "好了么命令运行列表"
  },
  en: {
    home: "assets/screenshots/home-en.png",
    settings: "assets/screenshots/settings-en.png",
    homeAlt: "Haoleme command run list"
  }
};

const root = document.documentElement;
const themeToggle = document.getElementById("theme-toggle");
const copyButton = document.getElementById("copy-install");
const toast = document.getElementById("copy-toast");
let toastTimer;

function preferredTheme() {
  const saved = localStorage.getItem("haoleme-theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  const dark = theme === "dark";
  const language = root.lang.startsWith("zh") ? "zh" : "en";
  const label = dark ? translations[language].themeToLight : translations[language].themeToDark;
  themeToggle.setAttribute("aria-label", label);
  themeToggle.setAttribute("title", label);
  themeToggle.innerHTML = `<i data-lucide="${dark ? "sun" : "moon"}" aria-hidden="true"></i>`;
  if (window.lucide) window.lucide.createIcons();
}

function applyLanguage(language) {
  const lang = translations[language] ? language : "en";
  root.lang = lang === "zh" ? "zh-CN" : "en";
  document.title = lang === "zh" ? "好了么 · Haoleme" : "Haoleme · Command monitoring";
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) element.textContent = translations[lang][key];
  });
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
    button.setAttribute("aria-pressed", button.dataset.lang === lang ? "true" : "false");
  });
  document.querySelector('[data-screenshot="home"]').src = screenshots[lang].home;
  document.querySelector('[data-screenshot="home"]').alt = screenshots[lang].homeAlt;
  document.querySelector('[data-screenshot="settings"]').src = screenshots[lang].settings;
  applyTheme(root.dataset.theme || preferredTheme());
  localStorage.setItem("haoleme-language", lang);
}

function showToast() {
  clearTimeout(toastTimer);
  toast.classList.add("show");
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1800);
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

themeToggle.addEventListener("click", () => {
  const next = root.dataset.theme === "dark" ? "light" : "dark";
  localStorage.setItem("haoleme-theme", next);
  applyTheme(next);
});

copyButton.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText("pip install -U haoleme");
  } catch (_) {
    const text = document.createElement("textarea");
    text.value = "pip install -U haoleme";
    text.style.position = "fixed";
    text.style.opacity = "0";
    document.body.appendChild(text);
    text.select();
    document.execCommand("copy");
    text.remove();
  }
  copyButton.innerHTML = '<i data-lucide="check" aria-hidden="true"></i>';
  if (window.lucide) window.lucide.createIcons();
  showToast();
  setTimeout(() => {
    copyButton.innerHTML = '<i data-lucide="copy" aria-hidden="true"></i>';
    if (window.lucide) window.lucide.createIcons();
  }, 1500);
});

applyTheme(preferredTheme());
applyLanguage(localStorage.getItem("haoleme-language") || "en");
if (window.lucide) window.lucide.createIcons();
