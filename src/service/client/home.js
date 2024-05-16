import { get } from '../../assets/service';

const home = () => {
    try {
        const id = Number(sessionStorage.getItem('token'));
        const response = {
            status: 200,
            data: get(id)
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
