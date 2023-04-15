const { invoke } = window.__TAURI__.tauri;
import { appWindow } from '@tauri-apps/api/window';

window.addEventListener("DOMContentLoaded", () => {
 
  document
  .getElementById('titlebar-minimize')
  .addEventListener('click', () => appWindow.minimize());
document
  .getElementById('titlebar-maximize')
  .addEventListener('click', () => appWindow.toggleMaximize());
document
  .getElementById('titlebar-close')
  .addEventListener('click', () => appWindow.close());
    document.querySelector("button").addEventListener("click", function (){window.eval("window.location.replace('index3.html')");});
});
