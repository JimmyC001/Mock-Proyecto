import { instance } from "../index"; 

const getServiceDetails = async (serviceId) => {
    try {
        const response = await instance.get(`/service/${serviceId}`);
        if (response && response.status === 200) {
            return response.data; // Devuelve los datos recibidos directamente
        }
    } catch (error) {
        console.log('Error al obtener los detalles del servicio: \n' + error.message);
    }
    return null;
}

export default getServiceDetails;
