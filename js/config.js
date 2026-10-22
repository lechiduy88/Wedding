// Site settings — everything the couple needs to edit lives here,
// so index.html and wedding.js never have to be touched.
window.WEDDING_CONFIG = {
  // Default theme: 'hien-dai' | 'sage' | 'navy' | 'rose' | 'truyen-thong'
  theme: 'rose',
  // Shows the theme strip so guests can switch palettes. Set to false once a theme is final.
  showThemePicker: false,

  // Opening curtains + background music (assets/audio/song.m4a). Guests start the song by tapping
  // "Mở thiệp"; the round button in the corner turns it on and off. Set music.src to '' to drop the music.
  intro: true,
  music: { src: 'assets/audio/song.m4a', volume: 0.55 },

  // After the invitation opens, the page scrolls down by itself at this speed (px per second).
  // It stops for good as soon as the guest scrolls, taps or presses a key. 0 turns it off.
  autoScroll: 40,

  showCountdown: true,
  showGift: true,
  showGuestbook: true,

  // Hidden mini game (js/game.js), found by popping four falling petals or tapping two drifting golden hearts.
  // mode: 'random' (a different one each visit) | 'rush' | 'chase' | 'match' | 'keepup'.
  // lab: true shows the prototype switcher.
  game: { enabled: true, mode: 'random', lab: true },

  // Wedding ceremony time, used by the countdown
  weddingTime: '2026-11-29T10:00:00+07:00',

  // Google Apps Script web app URL (ends with /exec) that stores RSVPs and wishes
  // in a Google Sheet — see backend/README.md. While this is empty the site runs in
  // demo mode: submissions are kept in the visitor's own browser only.
  apiEndpoint: '',

  // One-tap wishes offered above every wish box: the chip shows `label`, the box gets `text`
  wishPresets: [
    { label: 'Trăm năm hạnh phúc', text: 'Chúc hai bạn trăm năm hạnh phúc, đầu bạc răng long!' },
    { label: 'Yêu thương trọn đời', text: 'Chúc mừng hạnh phúc! Mong hai bạn luôn yêu thương, nhường nhịn và nắm tay nhau đi hết cuộc đời.' },
    { label: 'Sớm có tin vui', text: 'Chúc cô dâu chú rể sớm có tin vui, gia đình nhỏ luôn đầy ắp tiếng cười.' },
    { label: 'Vững tay chèo', text: 'Mừng ngày chung đôi! Chúc hai bạn mãi vững tay chèo trên mọi chặng đường phía trước.' }
  ],

  // Photos: every place on the page that shows a photo has a fixed file name. Put the photo in
  // assets/photos/ under that name; the extension may be .jpg, .jpeg, .png or .webp (lower case).
  //   anh-bia                ảnh bìa (dọc, khoảng 4:5)
  //   chu-re, co-dau         ảnh chú rể, ảnh cô dâu (dọc 2:3)
  //   album-01 … album-NN    ảnh album, NN = albumCount below (dọc 2:3)
  //   qr-nha-trai, qr-nha-gai  mã QR mừng cưới (dọc 5:7)
  //   chia-se.jpg            ảnh hiện khi chia sẻ link (ngang 1200×630, must be .jpg)
  // A missing file keeps the placeholder frame, which shows the name it expects.
  // Tapping a photo opens it large; a sharper copy named "<name>-full.<ext>" next to it is used there if present.
  photoDir: 'assets/photos/',
  albumCount: 12,

  // Where each venue is on the map: the embedded maps in "Chỉ đường" are drawn from these coordinates,
  // or from a search text `q` until the exact pin is known (the "Mở Google Maps" buttons use the links below)
  mapPoints: {
    'nha-trai': { lat: 21.53266352099579, lng: 105.23380318498212 },
    'nha-gai': { lat: 21.566778, lng: 105.211667 }
  },

  // Google Maps links for the two venues (pinned locations)
  maps: {
    // Nhà trai — thôn 21 Minh Phú, xã Chân Mộng, Phú Thọ
    'nha-trai': 'https://www.google.com/maps?q=21.53266352099579,105.23380318498212',
    // Nhà gái — khu 41 Vân Đồn, xã Chân Mộng, Phú Thọ
    'nha-gai': 'https://www.google.com/maps?q=21.566778,105.211667'
  }
};
