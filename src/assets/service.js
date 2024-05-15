export const init = () => {
    localStorage.setItem('services', JSON.stringify([
        {
            id: 1,
            title: "Titulo 1",
            description: "Un servicio"
        }
    ]));
};

export const add = (service) => {
    let stored = localStorage.getItem('services');
    if(stored){
        let services = JSON.parse(stored);
        services.push(service);
        console.log(services);
        localStorage.setItem('services', JSON.stringify(services));
        return true;
    }
    return false;
};

// Get a user from the list in localStorage
export const get = (client = null) => {
    let stored = localStorage.getItem('services');
    if (stored) {
        let services = JSON.parse(stored);
        // Find the user matching the given email and password
        return (client)
            ? services.filter(s => client === s.clientId)
            : services;
    }
    return null; // Return null if no users are stored
};
