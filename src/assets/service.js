export const init = () => {
    // window.indexedDB.deleteDatabase('serviceDB');
    let dbPromise = window.indexedDB.open('serviceDB', 1);
    dbPromise.onupgradeneeded = (event) => {
        let db = event.target.result;
        if (!db.objectStoreNames.contains('services')) {
            let objectStore = db.createObjectStore('services', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('clientId', 'clientId', { unique: false });
        }
    };
    dbPromise.onerror = (event) => {
        console.error('IndexedDB error:', event.target.errorCode);
    };
};

export const add = (service) => {
    return new Promise((resolve, reject) => {
        const dbPromise = window.indexedDB.open('serviceDB', 1);
        dbPromise.onsuccess = (event) => {
            let db = event.target.result;
            let transaction = db.transaction(['services'], 'readwrite');
            let objectStore = transaction.objectStore('services');
            let request = objectStore.add(service);
            request.onsuccess = () => {
                // console.log(service);
                // alert();
                resolve(service);
            }
            request.onerror = (event) => reject(event);
        };
        dbPromise.onerror = (event) => reject(event);
    });
};

export const getAll = () => {
    return new Promise((resolve, reject) => {
        const dbPromise = window.indexedDB.open('serviceDB', 1);
        dbPromise.onsuccess = (event) => {
            let db = event.target.result;
            let transaction = db.transaction(['services'], 'readonly');
            let objectStore = transaction.objectStore('services');
            let getAllRequest = objectStore.getAll();
            getAllRequest.onsuccess = (event) => {
                resolve(event.target.result);
            };
            getAllRequest.onerror = (event) => reject(event);
        };
        dbPromise.onerror = (event) => reject(event);
    });
};

export const get = (clientId) => {
    return new Promise((resolve, reject) => {
        getAll()
            .then(services => {
                // console.log(services);
                resolve(services.filter(s => s.clientId === clientId));
            })
            .catch(error => reject(error));
    });
};