self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open("watch-store")
      .then((cache) =>
        cache.addAll([
          "./index.html",
          "./main.js",
          "./audio/mickey_mouse_hey.mp3",
          "./css/style.css",
          "./css/fontello.css",
          "./font/fontello.eot",
          "./font/fontello.svg",
          "./font/fontello.ttf",
          "./font/fontello.woff",
          "./font/fontello.woff2",
          "./img/watch.jpg",
          "./img/watch_light.jpeg",
          "./img/android-chrome-192x192.png",
          "./img/android-chrome-512x512.png",
          "./img/apple-touch-icon.png",
          "./img/browserconfig.xml",
          "./img/favicon.ico",
          "./img/favicon-16x16.png",
          "./img/favicon-32x32.png",
          "./img/mstile-150x150.png",
          "./img/safari-pinned-tab.svg",
          
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
