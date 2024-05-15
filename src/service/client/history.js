import { instance } from "../index"; 

const history = async () => {
    try {
        const response = await instance.get('/api/orders');//revisar ruta
        if (response && response.status === 200) {
            return response.data; // Devuelve los datos recibidos directamente
        }
    } catch (error) {
        console.log('Error al obtener el historial de servicios: \n' + error.message);
    }
    return null;
}

export default history;
