export const initDriver = () => {
    try{
    
    localStorage.setItem('driver', JSON.stringify({
        firstName: "Carlos",
        lastName: "Ruiz",
        phone: "3101234567",
        rating: 4.5,
        imageUrl: "https://i.imgur.com/IbX2RhZ.jpeg"  // Asegúrate de que la URL es accesible
        
    }));
    console.log("Datos inicializados:", localStorage.getItem('driver'));
    } catch (error) {
        console.error('Error al inicializar datos del conductor:', error);
    }
};


// Retrieve driver information from localStorage
export const getDriverInfo = () => {
    const stored = localStorage.getItem('driver');
    if (stored) {
        return JSON.parse(stored);
    }
    return null;  // Return null if no driver is stored
};
