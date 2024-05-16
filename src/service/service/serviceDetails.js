import { get } from "../../assets/service";


const getServiceDetails = async (serviceId) => {
    try {

        const response = {
            status: 200,
            data: get(serviceId)
        };
        if (response && response.status === 200) {
            return response.data; // Devuelve los datos recibidos directamente
        }
    } catch (error) {
        console.log('Error al obtener los detalles del servicio: \n' + error.message);
    }
    return null;
}

export default getServiceDetails;
