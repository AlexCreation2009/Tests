const colorScheme = Telegram.WebApp.colorScheme; // 'light' или 'dark'
if (colorScheme === 'dark') {
  document.body.classList.add('dark-theme');
} else {
  document.body.classList.add('light-theme');
}