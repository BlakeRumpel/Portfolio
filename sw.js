let staticCache = 'portfolio-1'

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(cacheName => {
                    return cacheName.startsWith('portfolio-') && cacheName !== staticCache;
                }).map(cacheName => {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(staticCache).then(cache => {
            return cache.addAll(
                [
                    './css/min/style.css',
                    './js/app.js',
                    './',
                    './index.html',
                    `./img/bing.png`,
                    './img/facebook.png',
                    './img/google.jpg',
                    './img/hero.jpg',
                    './img/instagram.png',
                    './img/logo.png',
                    './img/twitter.png',
                    './img/yahooo.jpg',
                    './img/youtube.png'
                ]
            );
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});