self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('watch-store').then((cache) => cache.addAll([
      './index.html',
      './main.js',
      './audio/mickey_mouse_hey.mp3',
      './css/style.css',
      './css/fontello.css',
      './font/fontello.eot',
      './font/fontello.svg',
      './font/fontello.ttf',
      './font/fontello.woff',
      './font/fontello.woff2',
      './img/mickey_icon_192x192.png',
      './img/watch.jpg',
      './img/mickey.ico',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
