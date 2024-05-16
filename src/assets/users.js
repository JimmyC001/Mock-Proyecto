export const init = () => {
    // window.indexedDB.deleteDatabase('userDB');
    let dbPromise = window.indexedDB.open('userDB', 1);
    dbPromise.onupgradeneeded = (event) => {
        let db = event.target.result;
        if (!db.objectStoreNames.contains('users')) {
            let objectStore = db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('email', 'email', { unique: true });
        }
    };
    dbPromise.onerror = (event) => {
        console.error('IndexedDB error:', event.target.errorCode);
    };
};

export const add = (user) => {
    return new Promise((resolve, reject) => {
        const dbPromise = window.indexedDB.open('userDB', 1);
        dbPromise.onsuccess = (event) => {
            let db = event.target.result;
            let transaction = db.transaction(['users'], 'readwrite');
            let objectStore = transaction.objectStore('users');
            let request = objectStore.add(user);
            request.onsuccess = () => resolve(user);
            request.onerror = (event) => reject(event);
        };
        dbPromise.onerror = (event) => reject(event);
    });
};

export const getAll = () => {
    return new Promise((resolve, reject) => {
        const dbPromise = window.indexedDB.open('userDB', 1);
        dbPromise.onsuccess = (event) => {
            let db = event.target.result;
            let transaction = db.transaction(['users'], 'readonly');
            let objectStore = transaction.objectStore('users');
            let getAllRequest = objectStore.getAll();
            getAllRequest.onsuccess = (event) => resolve(event.target.result);
            getAllRequest.onerror = (event) => reject(event);
        };
        dbPromise.onerror = (event) => reject(event);
    });
};

export const get = ({ email, password }) => {
    return new Promise((resolve, reject) => {
        const dbPromise = window.indexedDB.open('userDB', 1);
        dbPromise.onsuccess = (event) => {
            let db = event.target.result;
            let transaction = db.transaction(['users'], 'readonly');
            let objectStore = transaction.objectStore('users');
            let index = objectStore.index('email');
            let getRequest = index.get(email);
            getRequest.onsuccess = (event) => {
                let foundUser = event.target.result;
                if (foundUser && foundUser.passwordHash === password) {
                    // console.log('Usueriao encontrado');
                    // console.log(foundUser);
                    resolve(foundUser);
                } else {
                    // console.log('No se encontro el usuario');
                    resolve(null);
                }
            };
            getRequest.onerror = (event) => reject(event);
        };
        dbPromise.onerror = (event) => reject(event);
    });
};
