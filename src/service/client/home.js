import { get } from '../../assets/service';

const home = async () => {
    try {
        const id = Number(sessionStorage.getItem('token'));
        const services = await get(id);
        // console.log(services);
        const response = {
            status: 200,
            data: services
        };
        // console.log(response);
        if (response.status >= 200 && response.status < 300) {
            return response.data;
        } else {
            console.error('Respuesta no exitosa:', response.status);
            throw new Error(`Respuesta no exitosa del servidor con estado ${response.status}`);
        }
    } catch (error) {
        console.error('Error al obtener los servicios activos:', error.message);
        return null; // Devuelve null en caso de error
    }
}

export default home;
