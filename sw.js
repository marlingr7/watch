self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('fox-store').then((cache) => cache.addAll([
      './index.html',
      './main.js',
      './css/style.css',
      './audio/mickey_mouse_hey.mp3',
      './img/mickey_icon.jpg',
      '.img/watch.jpg',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
