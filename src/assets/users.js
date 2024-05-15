// Initialize localStorage with a default user
export const init = () => {
    localStorage.setItem('users', JSON.stringify([
        {id: 1, email: "johndoe@example.com", password: "contraseña123"}
    ]));
};

// Add a new user to the list in localStorage
export const add = (user) => {
    let stored = localStorage.getItem('users');
    if (stored) {
        let users = JSON.parse(stored);
        users.push(user);
        localStorage.setItem('users', JSON.stringify(users)); // Corrected: Stringify the users array
    }
};

// Get a user from the list in localStorage
export const get = (user) => {
    let stored = localStorage.getItem('users');
    if (stored) {
        let users = JSON.parse(stored);
        // console.log(users);
        // Find the user matching the given email and password
        let foundUser = users.find(u => u.email === user.email && u.password === user.password);
        return foundUser || null; // Return the found user or null if not found
    }
    return null; // Return null if no users are stored
};
