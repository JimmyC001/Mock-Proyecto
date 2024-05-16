var users = [{ id:1, email: "johndoe@example.com", password: "12345" }];

export const init = () => {
    // window.indexedDB.deleteDatabase('localDB');
    let dbPromise = window.indexedDB.open('localDB', 1);
    dbPromise.onupgradeneeded = (event) => {
        let db = event.target.result;
        let objectStore = db.createObjectStore('users', { keyPath: 'clientId', autoIncrement: true });
        objectStore.createIndex('email', 'email', { unique: true });
    };
    dbPromise.onerror = (event) => {
        console.error('IndexedDB error:', event.target.errorCode);
    };
};

export const add = (user) => {
    /*return new Promise((resolve, reject) => {
        const dbPromise = window.indexedDB.open('localDB', 1);
        dbPromise.onsuccess = (event) => {
            let db = event.target.result;
            let transaction = db.transaction(['users'], 'readwrite');
            let objectStore = transaction.objectStore('users');
            let request = objectStore.add(user);
            request.onsuccess = () => resolve(user);
            request.onerror = (event) => reject(event);
        };
        dbPromise.onerror = (event) => reject(event);
    });*/
    const toStore = { id: users.length + 1, ...user };
    users.push(toStore);
    return toStore;
};

export const getAll = () => {
    /*return new Promise((resolve, reject) => {
        const dbPromise = window.indexedDB.open('localDB', 1);
        dbPromise.onsuccess = (event) => {
            let db = event.target.result;
            let transaction = db.transaction(['users'], 'readonly');
            let objectStore = transaction.objectStore('users');
            let getAllRequest = objectStore.getAll();
            getAllRequest.onsuccess = (event) => {
                resolve(event.target.result);
            };
            getAllRequest.onerror = (event) => reject(event);
        };
        dbPromise.onerror = (event) => reject(event);
    });*/
    return users;
};

export const get = ({ email, password }) => {
    const founded = users.find(u => u.email === email && u.password === password);
    if(founded)
        return founded;
    return null;
    /*return new Promise((resolve, reject) => {
        const dbPromise = window.indexedDB.open('localDB', 1);
        dbPromise.onsuccess = (event) => {
            let db = event.target.result;
            let transaction = db.transaction(['users'], 'readonly');
            let objectStore = transaction.objectStore('users');
            let index = objectStore.index('email');
            let getRequest = index.get(email);
            getRequest.onsuccess = (event) => {
                let foundUser = event.target.result;
                if (foundUser && foundUser.password === password) {
                    resolve(foundUser);
                } else {
                    resolve(null);
                }
            };
            getRequest.onerror = (event) => reject(event);
        };
        dbPromise.onerror = (event) => reject(event);
    });*/
};
