// ==UserScript==
// @name         BiliBili Custom Subtitles
// @namespace    https://github.com/AnimeAbout/BiliBili-Custom-Subtitles
// @version      0.2.1
// @description  Custom styles for BiliBili player subtitles
// @author       AniDev
// @icon         https://raw.githubusercontent.com/AnimeAbout/BiliBili-Custom-Subtitles/main/image/readme/1687669195808.png
// @match        /\:\/\/.*.bili.*\/play\/.*$/
// @include      /\:\/\/.*.bili.*\/play\/.*$/
// @grant        GM_addStyle
// ==/UserScript==

setTimeout(() => {

  (function () {
    console.log('Bilibili Custom Subtitles Loaded. by AniDev');
    console.log('https://cutt.ly/anidev');

    let locale = location.pathname.split("/")[1];
    if (!["th", "en"].includes(locale)) {
      locale = "en";
    }
    const text = [
      {
        th: {
          on: 'เปิด',
          off: 'ปิด',
          panelName: 'BiliBili Custom Subtitles',
          settingsButtonName: 'ตั้งค่าซับ',
          settingsButtonOff: 'ปิด',
          settingsFontFamily: 'รูปแบบตัวอักษร',
          settingsFontStyle: 'ลักษณะตัวอักษร [ตัวหนา][ตัวเอียง]',
          settingsFontSize: 'ขนาดตัวอักษร',
          settingsFontColor: 'สีตัวอักษร',
          settingsOutlineColor: 'สีขอบตัวอักษร',
          settingsButtonApply: 'ใช้งาน',
          settingsButtonReset: 'รีเซ็ท',

          AdvancedMode: 'การตั้งค่าเพิ่มเติม',
          settingsAdvanced: 'การตั้งค่า',
          settingsButtonAdvanced: 'ขั้นสูง',
          AdvancedWaterMark: 'ลายน้ำ',
          AdvancedComment: 'คอมเมนท์',
        },
        en: {
          on: 'On',
          off: 'Off',
          panelName: 'BiliBili Custom Subtitles',
          settingsButtonName: 'Sub settings',
          settingsButtonOff: 'Close',
          settingsFontFamily: 'Font',
          settingsFontStyle: 'Style [Bold] [Italic]',
          settingsFontSize: 'Size',
          settingsFontColor: 'Color',
          settingsOutlineColor: 'Outline color',
          settingsButtonApply: 'Apply',
          settingsButtonReset: 'Reset',

          AdvancedMode: 'Advanced Mode',
          settingsAdvanced: 'Settings',
          settingsButtonAdvanced: 'Advanced',
          AdvancedWaterMark: 'Watermark',
          AdvancedComment: 'Comment',
        }
      }
    ];

    const localeText = text[0][locale];

    // ปุ่มตั้งค่า
    var settingsButton = document.createElement('button');
    settingsButton.classList.add('settings-button');
    settingsButton.innerText = localeText.settingsButtonName;

    // หน้าต่าง
    var panel = document.createElement('div');
    panel.classList.add('panel');

    panel.style.transition = '0.2s';
    panel.style.display = 'none';
    panel.style.opacity = '0';

    settingsButton.addEventListener('click', function () {
      if (panel.style.display === 'none') {
        panel.style.display = 'block';

        setTimeout(function () {
          panel.style.opacity = '1';
        }, 200)

        settingsButton.innerText = localeText.settingsButtonOff;
      } else {
        settingsButton.innerText = localeText.settingsButtonName;
        settingsButtonAdvancedClick.innerText = localeText.settingsButtonAdvanced;

        panel.style.opacity = '0';
        advancedPanel.style.opacity = '0';

        setTimeout(function () {
          panel.style.display = 'none';
          advancedPanel.style.display = 'none';
        }, 200);
      };
    });

    // แผงควบคุม
    var settingsPanel = document.createElement('div');
    settingsPanel.classList.add('settings-panel');

    var settings = document.createElement('ul');
    settings.classList.add('settings');

    // ชื่อแผงควบคุม
    var panelName = document.createElement('h2');
    panelName.innerHTML = localeText.panelName;
    panelName.classList.add('settings-panel-name');

    // รูปแบบตัวอักษร
    var settingsFontFamily = document.createElement('li');
    settingsFontFamily.innerText = localeText.settingsFontFamily;

    var FontFamilySelecter = document.createElement('select');
    FontFamilySelecter.id = 'fontFamily';
    FontFamilySelecter.innerHTML = `
      <option value="Cordia New">Cordia New</option>
      <option value="Itim">Itim</option>
      <option value="Noto Sans">Noto Sans</option>
  `;
    settingsFontFamily.appendChild(FontFamilySelecter);

    // ลักษณะตัวอักษร
    var settingsFontStyle = document.createElement('li');
    settingsFontStyle.innerText = localeText.settingsFontStyle;

    var FontStyleSelecter = document.createElement('span');
    FontStyleSelecter.id = 'fontStyle';
    FontStyleSelecter.innerHTML = `
      <input class="fontStyle" type="checkbox" id="italic">
      <input class="fontStyle" type="checkbox" id="bold" checked>
  `;
    settingsFontStyle.appendChild(FontStyleSelecter);

    // ขนาดตัวอักษร
    var settingsFontSize = document.createElement('li');
    settingsFontSize.innerText = localeText.settingsFontSize + ' [%]';

    var FontSizeSelecter = document.createElement('input');
    FontSizeSelecter.id = 'fontSize',
      FontSizeSelecter.type = 'number';
    FontSizeSelecter.value = '150';
    FontSizeSelecter.step = '10';
    FontSizeSelecter.min = '50';
    FontSizeSelecter.max = '200';
    settingsFontSize.appendChild(FontSizeSelecter);

    // สีตัวอักษร
    var settingsFontColor = document.createElement('li');
    settingsFontColor.innerText = localeText.settingsFontColor;

    var FontColorSelecter = document.createElement('input');
    FontColorSelecter.id = 'fontColor';
    FontColorSelecter.type = 'color';
    FontColorSelecter.value = '#ffffff';
    settingsFontColor.appendChild(FontColorSelecter);

    // ขอบสีตัวอักษร
    var settingsOutlineColor = document.createElement('li');
    settingsOutlineColor.innerText = localeText.settingsOutlineColor;

    var OutlineColorSelecter = document.createElement('input');
    OutlineColorSelecter.id = 'OutlineColor';
    OutlineColorSelecter.type = 'color';
    OutlineColorSelecter.value = '#ff7fa8';
    settingsOutlineColor.appendChild(OutlineColorSelecter);

    // ใช้งาน
    var settingsButtonApply = document.createElement('li');
    settingsButtonApply.innerHTML = '<span style="font-size: 1rem;"><a href="https://github.com/AnimeAbout/BiliBili-Custom-Subtitles/" target="_blank">v0.2-update1</a> | <a href="https://cutt.ly/anidev" target="_blank">AniDev©</a> | Build for Firefox</span>';

    var settingsButtonApplyClick = document.createElement('button');
    settingsButtonApplyClick.classList.add('settings-button-apply');
    settingsButtonApplyClick.innerText = localeText.settingsButtonApply;
    settingsButtonApplyClick.addEventListener('click', function () {
      if (document.getElementById('CustomSubtitles') !== null) {
        document.getElementById('CustomSubtitles').remove();
      }

      var FontStyleSelecterBold = document.getElementById('bold');
      var FontStyleSelecterItalic = document.getElementById('italic');

      var fontWeight = FontStyleSelecterBold.checked ? 'bold' : 'normal';
      var fontStyle = FontStyleSelecterItalic.checked ? 'italic' : 'normal';

      const hexCode = OutlineColorSelecter.value;

      var BiliBiliSubtitles = document.createElement('style');
      BiliBiliSubtitles.id = 'CustomSubtitles'
      BiliBiliSubtitles.innerHTML = `
          .player-mobile .subtitle-item-text {
              color: ${FontColorSelecter.value} !important;
              font-family: ${FontFamilySelecter.value} !important;
              font-size: ${FontSizeSelecter.value}% !important;
              font-weight: ${fontWeight} !important;
              font-style: ${fontStyle} !important;
              text-shadow:
                  -2px -2px 0 ${hexCode},
                  2px -2px 0 ${hexCode},
                  -2px 2px 0 ${hexCode},
                  2px 2px 0 ${hexCode},
                  -3px 0 0 ${hexCode},
                  3px 0 0 ${hexCode},
                  0 3px 0 ${hexCode},
                  0 -3px 0 ${hexCode} !important;
          }`;

      document.body.appendChild(BiliBiliSubtitles);
    });

    // รีเซ็ท
    var settingsButtonResetClick = document.createElement('button');
    settingsButtonResetClick.classList.add('settings-button-apply');
    settingsButtonResetClick.innerText = localeText.settingsButtonReset;
    settingsButtonResetClick.addEventListener('click', function () {
      location.reload();
    });

    // การตั้งต่าขั้นสูง
    var settingsButtonAdvanced = document.createElement('li');
    settingsButtonAdvanced.innerHTML = localeText.settingsAdvanced;

    // ปุ่มการตั้งต่าขั้นสูง
    var settingsButtonAdvancedClick = document.createElement('button');
    settingsButtonAdvancedClick.innerText = localeText.settingsButtonAdvanced;
    settingsButtonAdvancedClick.classList.add('settings-button-apply');


    ///////////////////////////////////////////////////////////////////////////////////////
    //ADVANCED SETTINGS
    // หน้าต่างการตั้งค่าขั้นสูง
    var advancedPanel = document.createElement('div');
    advancedPanel.classList.add('panel');

    advancedPanel.style.transition = '0.2s';
    advancedPanel.style.display = 'none';
    advancedPanel.style.opacity = '0';
    advancedPanel.style.marginTop = '320px';

    // แผงควบคุมขั้นสูง
    var settingsAdvancedPanel = document.createElement('div');
    settingsAdvancedPanel.classList.add('settings-panel');

    var settingsAdvanced = document.createElement('ul');
    settingsAdvanced.classList.add('settings');

    // ชื่อแผงควบคุมขั้นสูง
    var AdvancedpanelName = document.createElement('h2');
    AdvancedpanelName.innerHTML = localeText.AdvancedMode;
    AdvancedpanelName.classList.add('settings-panel-name');

    settingsButtonAdvancedClick.addEventListener('click', function () {
      if (advancedPanel.style.display === 'none') {
        advancedPanel.style.display = 'block';

        setTimeout(function () {
          advancedPanel.style.opacity = '1';
        }, 200)

        settingsButtonAdvancedClick.innerText = localeText.settingsButtonOff;
      } else {
        settingsButtonAdvancedClick.innerText = localeText.settingsButtonAdvanced;

        advancedPanel.style.opacity = '0';

        setTimeout(function () {
          advancedPanel.style.display = 'none';
        }, 200);
      };
    });

    // ลายน้ำ
    var AdvancedWaterMark = document.createElement('li');
    AdvancedWaterMark.innerHTML = localeText.AdvancedWaterMark;

    // ปุ่ม เปิด/ปิด ลายน้ำ
    var AdvancedWaterMarkClick = document.createElement('button');
    AdvancedWaterMarkClick.innerText = localeText.off;
    AdvancedWaterMarkClick.classList.add('settings-button-apply');

    AdvancedWaterMarkClick.addEventListener('click', function () {
      var watermarkElement = document.getElementsByClassName('ip-watermark')[0];

      if (watermarkElement.style.display === 'none') {
        watermarkElement.style.display = 'block';
        AdvancedWaterMarkClick.innerText = localeText.off;
        localStorage.setItem('watermarkValue', '1');
      } else {
        watermarkElement.style.display = 'none';
        AdvancedWaterMarkClick.innerText = localeText.on;
        localStorage.setItem('watermarkValue', '0');
      }
    })

    // คอมเมนท์
    var AdvancedComment = document.createElement('li');
    AdvancedComment.innerHTML = localeText.AdvancedComment;

    // ปุ่ม เปิด/ปิด คอมเมนท์
    var AdvancedCommentClick = document.createElement('button');
    AdvancedCommentClick.innerText = localeText.off;
    AdvancedCommentClick.classList.add('settings-button-apply');

    AdvancedCommentClick.addEventListener('click', function () {
      var commentElement = document.getElementsByClassName('video-player__comments')[0];

      if (commentElement.style.display === 'none') {
        commentElement.style.display = 'block'
        AdvancedCommentClick.innerText = localeText.off;
        localStorage.setItem('commentValue', '1');
      } else {
        commentElement.style.display = 'none'
        AdvancedCommentClick.innerText = localeText.on;
        localStorage.setItem('commentValue', '0');
      }
    })

    setInterval(function checkStatus() {
      var watermarkElement = document.getElementsByClassName('ip-watermark')[0];
      var watermarkKey = localStorage.getItem('watermarkValue');

      if (watermarkKey === '0') {
        watermarkElement.style.display = 'none';
        AdvancedWaterMarkClick.innerText = localeText.on;
      } else {
        watermarkElement.style.display = 'block';
        AdvancedWaterMarkClick.innerText = localeText.off;
      }

      var commentElement = document.getElementsByClassName('video-player__comments')[0];
      var commentKey = localStorage.getItem('commentValue');

      if (commentKey === '0') {
        commentElement.style.display = 'none';
        AdvancedWaterMarkClick.innerText = localeText.on;
      } else {
        commentElement.style.display = 'block';
        AdvancedWaterMarkClick.innerText = localeText.off;
      }
    }, 1000);


    ///////////////////////////////////////////////////////////////////////////////////////
    //ADVANCED SETTINGS

    AdvancedWaterMark.appendChild(AdvancedWaterMarkClick);
    AdvancedComment.appendChild(AdvancedCommentClick);

    advancedPanel.appendChild(settingsAdvancedPanel);
    settingsAdvancedPanel.appendChild(settingsAdvanced);
    settingsAdvanced.appendChild(AdvancedpanelName);
    settingsAdvanced.appendChild(AdvancedWaterMark)
    settingsAdvanced.appendChild(AdvancedComment)

    ///////////////////////////////////////////////////////////////////////////////////////
    //SUBTITLES SETTINGS

    settingsButtonAdvanced.appendChild(settingsButtonAdvancedClick);
    settingsButtonApply.appendChild(settingsButtonApplyClick);
    settingsButtonApply.appendChild(settingsButtonResetClick);

    panel.appendChild(settingsPanel);
    settingsPanel.appendChild(settings);
    settings.appendChild(panelName);
    settings.appendChild(settingsFontFamily);
    settings.appendChild(settingsFontStyle);
    settings.appendChild(settingsFontSize);
    settings.appendChild(settingsFontColor);
    settings.appendChild(settingsOutlineColor);
    settings.appendChild(settingsButtonAdvanced);
    settings.appendChild(settingsButtonApply);

    document.body.appendChild(settingsButton);
    document.body.appendChild(panel);
    document.body.appendChild(advancedPanel);
  })();

}, 1000);

GM_addStyle(`
      .settings-button {
          position: fixed;
          padding: 5px 10px 0;
          width: 120px;
          height: 36px;
          text-align: center;
          top: 7%;
          right: 1%;
          z-index: 10;
          transition: 0.2s;

          background-color: #a8bcf2;
          color: #fff;
          font-family: 'Cordia New';
          font-weight: bold;
          font-size: 1.4rem;
          word-break: break-word;

          border: 3px solid #ecbafc;
          border-radius: 5px;
      }

      .settings-button:hover {
          background-color: #f7a5c1;
          cursor: pointer;
      }

      .panel ::selection {
          background-color: #ecbafc;
          color: #fff;
      }

      .panel {
          display: none;
          opacity: 0;
          position: fixed;
          width: 420px;
          top: 11.5%;
          right: 1%;
          padding: 10px 10px 3px;
          background-color: #a8bcf2;
          border: 3px solid #ecbafc;
          border-radius: 5px;
          z-index: 10;
      }

      .settings-panel {
          color: #fff;
          font-family: 'Cordia New';
          font-weight: bold;
          font-size: 1.5rem;
      }

      .settings-panel-name {
          margin: 0 auto;
          margin-bottom: 15px;

          background-color: #f7a5c1;
          font-size: 30px;
          font-weight: 700;
          letter-spacing: 1px;
          line-height: 30px;
          text-align: center;

          border: solid 2px #ecbafc;
          border-radius: 10px;
      }

      .settings {
          list-style: none;
          padding: 0;
          margin: 0;
      }

      .settings a {
          color: #ff7fa8;
          text-decoration: none;
      }

      .settings a:hover {
          color: #f7a5c1;
      }

      .settings option {
          background-color: #f7a5c1;
      }

      .settings li {
          margin-top: 5px;
          padding-left: 5px;
          font-size: 1.5rem;
          line-height: 30px;
      }

      .settings li input,
      .settings li select,
      .settings li button {
          float: right;
          width: 80px !important;
          height: 28px;
          padding: 0;
          cursor: pointer;

          background-color: #a8bcf2;
          color: #fff;
          text-align: center;
          font-family: 'Cordia New';
          font-size: 1.5rem;
          font-weight: bold;

          border: 2px solid #ecbafc;
          border-radius: 5px;
          transition: 0.2s;
      }

      .settings li input:focus {
          outline: none;
      }

      .settings .fontStyle {
          width: 34px !important;
      }

      .player-mobile .subtitle-item-text {
          position: relative;
          white-space: normal;
          cursor: move;
          padding: 4px 8px;
          box-decoration-break: clone;
          border-radius: 6px;
          line-height: normal;
          word-wrap: break-word;
          font-family: 'Cordia New', sans-serif !important;
          font-weight: bold !important;
          font-size: 150%;
          color: #fff;
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

      .settings-button-apply {
          height: 30px;
          margin: 2px;

          background-color: #a8bcf2;
          color: #fff;
          font-family: 'Cordia New';
          font-size: 1.5rem;
          font-weight: bold;

          border: 2px solid #ecbafc;
          border-radius: 5px;
          transition: 0.3s;
      }

      .settings-button-apply:hover {
          background-color: #f7a5c1;
          cursor: pointer;
      }
`);