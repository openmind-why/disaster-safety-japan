// PWA service worker — pre-cache shelters + offline guides, so routing works with no signal
const CACHE = 'safety-v1';
const OFFLINE_URLS = [
  '/',
 '/offline.html',
  '/api/shelters.json',
  '/guides/earthquake-en.json',
  '/guides/earthquake-ja.json',
  '/guides/earthquake-zh.json',
];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(OFFLINE_URLS)));
});
self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((cached) => cached || fetch(e.request))
  );
});
