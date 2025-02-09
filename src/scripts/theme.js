function handleToggleClick() {
  const element = document.documentElement;
  element.classList.toggle('dark');

  const isDark = element.classList.contains('dark');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

function getThemePreference() {
  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
    return localStorage.getItem('theme');
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function updateTheme() {
  const theme = getThemePreference();
  const element = document.documentElement;
  if (theme === 'dark') {
    element.classList.add('dark');
  } else {
    element.classList.remove('dark');
  }
}

document.addEventListener('astro:page-load', () => {
  const button = document.getElementById('themeToggle');
  if (button) {
    updateTheme();
    button.addEventListener('click', handleToggleClick);
  }
});

// Update theme when the page loads
document.addEventListener('astro:after-swap', updateTheme);