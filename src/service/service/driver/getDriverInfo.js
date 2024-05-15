import { instance } from "../../index"; 

const getDriverInfo = async () => {
    try {
        const response = await instance.get('/api/drivers'); // revisar ruta
        if (response.status >= 200 && response.status < 300) {
            return response.data; 
        } else {
            // Registra un error si el estado de la respuesta no indica éxito
            console.error('Respuesta no exitosa:', response.status);
            throw new Error(`Respuesta no exitosa del servidor con estado ${response.status}`);
        }
    } catch (error) {
        // Captura cualquier error en la petición o en la lógica del try
        console.error('Error al obtener la información del conductor:', error.message);
        return null; // Devuelve null en caso de error
    }
}

export default getDriverInfo;
