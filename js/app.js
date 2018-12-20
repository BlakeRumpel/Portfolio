if (self.navigator.serviceWorker) {
    self.navigator.serviceWorker.register('sw.js')
        .then(() => {
            console.log('Service Worker installed.');
        }).catch(() => {
            console.log('Service Worker failed to install.');
        });
}