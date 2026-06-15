const CACHE_NAME = 'rock-explorer-v1';
const ASSETS = [
  './',
  './index.html',
  './stone.jpg'
];

// 설치 및 정적 자원 캐싱
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    }).then(() => self.skipWaiting())
  );
});

// 활성화 및 구버전 캐시 정리
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 네트워크 요청 캐시 전략 (Stale-While-Revalidate)
self.addEventListener('fetch', (e) => {
  // 외부 API 호출(Gemini, Nominatim 등)은 캐싱에서 제외
  if (e.request.url.includes('generativelanguage.googleapis.com') || e.request.url.includes('openstreetmap.org')) {
    return;
  }
  
  e.respondWith(
    caches.match(e.request).then((cachedResponse) => {
      const fetchPromise = fetch(e.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(e.request, networkResponse.clone());
          });
        }
        return networkResponse;
      }).catch(() => {
        // 네트워크 에러 시 캐시 응답 사용 (오프라인 폴백)
        return cachedResponse;
      });
      return cachedResponse || fetchPromise;
    })
  );
});
