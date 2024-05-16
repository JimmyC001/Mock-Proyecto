var services = [];

export const init = () => {
    services = [
        { clientId: 1, title: "Servicio 1", description: "Nevera industrial", imageurl: "" }
    ];
};

export const add = (service) => {
    services.push({
        title: "Servicio " + services.length,
        description: "Un servicio",
        imageUrl: "",
        ...service
    });
    return service;
};

// Get a user from the list in sessionStorage
export const get = (client) => {
    const filtered = services.filter((s) => s.clientId === client);
    console.log(filtered);
    return (client)? filtered: services;
};
