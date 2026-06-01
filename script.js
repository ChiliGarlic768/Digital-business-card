const STORAGE_KEY = "song-shukai-card-theme";
const DEFAULT_THEME = "apple";
const EMAIL = "songshukai020716@163.com";

const root = document.documentElement;
const themeButtons = Array.from(document.querySelectorAll(".theme-option"));
const copyButton = document.querySelector("#copyEmail");
const emailStatus = document.querySelector("#emailStatus");

function setTheme(theme) {
  const nextTheme = themeButtons.some((button) => button.dataset.theme === theme)
    ? theme
    : DEFAULT_THEME;

  root.dataset.theme = nextTheme;
  localStorage.setItem(STORAGE_KEY, nextTheme);

  themeButtons.forEach((button) => {
    const isActive = button.dataset.theme === nextTheme;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-checked", String(isActive));
  });
}

function setStatus(message, copied = false) {
  emailStatus.textContent = message;
  emailStatus.classList.toggle("is-copied", copied);
}

async function copyEmail() {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(EMAIL);
    } else {
      const textArea = document.createElement("textarea");
      textArea.value = EMAIL;
      textArea.setAttribute("readonly", "");
      textArea.style.position = "fixed";
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      const didCopy = document.execCommand("copy");
      textArea.remove();

      if (!didCopy) {
        throw new Error("Copy command failed");
      }
    }
    setStatus("邮箱已复制：songshukai020716@163.com", true);
  } catch {
    setStatus("复制失败，请手动复制：songshukai020716@163.com", false);
  }

  window.setTimeout(() => {
    setStatus(EMAIL, false);
  }, 2600);
}

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setTheme(button.dataset.theme);
  });
});

copyButton.addEventListener("click", copyEmail);

setTheme(localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME);
