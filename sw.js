const CACHE_NAME = 'mfz-static-v1';
const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/assets/css/styles.css',
  '/assets/js/main.js',
  '/assets/js/performance.js',
  '/assets/js/scrollreveal.min.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
          return null;
        })
      )
    )
  );
  self.clients.claim();
});

// Simple cache-first strategy for static resources, network-first for API-like requests
self.addEventListener('fetch', (event) => {
  const { request } = event;

  // Only handle GET requests
  if (request.method !== 'GET') return;

  const url = new URL(request.url);

  // For same-origin navigation and static files - cache-first
  if (url.origin === location.origin) {
    event.respondWith(
      caches.match(request).then((cached) => {
        if (cached) return cached;
        return fetch(request)
          .then((resp) => {
            if (!resp || resp.status !== 200 || resp.type !== 'basic') return resp;
            const respClone = resp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(request, respClone));
            return resp;
          })
          .catch(() => caches.match('/index.html'));
      })
    );
    return;
  }

  // For cross-origin images (CDNs) - try network then fallback to cache
  if (request.destination === 'image') {
    event.respondWith(
      fetch(request)
        .then((resp) => {
          const copy = resp.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(request, copy));
          return resp;
        })
        .catch(() => caches.match(request))
    );
    return;
  }
});
