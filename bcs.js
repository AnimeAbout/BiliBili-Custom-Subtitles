// ==UserScript==
// @name         BiliBili Custom Subtitles
// @namespace    https://github.com/AnimeAbout/BiliBili-Custom-Subtitles
// @version      0.1.1
// @description  Custom styles for BiliBili player subtitles
// @author       AniDev
// @icon         https://raw.githubusercontent.com/AnimeAbout/BiliBili-Custom-Subtitles/main/image/readme/1687434688433.png
// @updateURL    https://raw.githubusercontent.com/AnimeAbout/BiliBili-Custom-Subtitles/main/bcs.js
// @match        /\:\/\/.*.bili.*\/play\/.*$/
// @include      /\:\/\/.*.bili.*\/play\/.*$/
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    console.log('Bilibili Custom Subtitiles Loaded. by AniDev');
    console.log('https://cutt.ly/anidev');
})();

GM_addStyle(`
.player-mobile .subtitle-item-text {
  position: relative;
  white-space: normal;
  cursor: move;
  padding: 4px 8px;
  box-decoration-break: clone;
  border-radius: 6px;
  line-height: normal;
  word-wrap: break-word;
  color: #fff;
  font-family: 'Cordia New', sans-serif !important;
  font-weight: bold !important;
  font-size: 150%;
  text-shadow:
    -2px -2px 0 #ff7fa8,
    2px -2px 0 #ff7fa8,
    -2px 2px 0 #ff7fa8,
    2px 2px 0 #ff7fa8,
    -3px 0 0 #ff7fa8,
    3px 0 0 #ff7fa8,
    0 3px 0 #ff7fa8,
    0 -3px 0 #ff7fa8 !important;
  margin-bottom: 5% !important;
}
`);