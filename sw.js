// 極簡 Service Worker：讓瀏覽器認定可安裝；不快取任何內容，永遠走網路，避免看到舊版。
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function (e) { e.respondWith(fetch(e.request)); });
