const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    mutex: false,
    autoplay: false,
    preload: 'auto',
    theme: '#FF8000',
    lrcType: 3,  
    audio: [
      {
        name: "葦舟",
        artist: 'Yonder Voice',
        url: '/music/葦舟 - Yonder Voice.mp3',
        cover: '/music/葦舟 - Yonder Voice.jpg',
        lrc: '/music/葦舟 - Yonder Voice.lrc'
      },
      {
        name: "決別の旅",
        artist: 'Yonder Voice',
        url: '/music/決別の旅 - Yonder Voice.mp3',
        cover: '/music/決別の旅 - Yonder Voice.jpg',
        lrc: '/music/決別の旅 - Yonder Voice.lrc'
      },
      {
        name: "夜降り萃梦郷 ~ A Reverie of Dolls and Stellula",
        artist: 'Yonder Voice/流月',
        url: '/music/夜降り萃梦郷 ~ A Reverie of Dolls and Stellula - 流月.mp3',
        cover: '/music/夜降り萃梦郷 ~ A Reverie of Dolls and Stellula - 流月.jpg',
        lrc: '/music/夜降り萃梦郷 ~ A Reverie of Dolls and Stellula - 流月.lrc'
      },
    ]
});
