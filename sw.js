self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("watch-store")
      .then((cache) =>
        cache.addAll([
          "./index.html",
          "./main.js",
          "./manifest.mf",
          "./audio/mickey_mouse_hey.mp3",
          "./css/style.css",
          "./css/fontello.css",
          "./font/fontello.eot",
          "./font/fontello.svg",
          "./font/fontello.ttf",
          "./font/fontello.woff",
          "./font/fontello.woff2",
          "./img/watch.jpg",
          "./img/watch_light.jpg",
          "./img/mickey.ico",
          "./img/favicon.ico",
          "./img/apple-touch-icon.png",
          "./img/apple-touch-icon-57x57.png",
          "./img/apple-touch-icon-72x72.png",
          "./img/apple-touch-icon-76x76.png",
          "./img/apple-touch-icon-114x114.png",
          "./img/apple-touch-icon-120x120.png",
          "./img/apple-touch-icon-144x144.png",
          "./img/apple-touch-icon-152x152.png",
          "./img/apple-touch-icon-180x180.png",
          "./img/favicon-32x32.png",
          "./img/favicon-16x16.png",
        ])
      )
  );
});

self.addEventListener("fetch", (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
