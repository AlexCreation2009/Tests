const tg = window.Telegram.webApp;

const info = tg.initData;
const infoText = document.createElement("p");

infoText.textContent = JSON.stringify(info)

document.body.appendChild(infoText);