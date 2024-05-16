import { get } from '../../assets/service';

const history = async () => {
    try {
        const id = Number(sessionStorage.getItem('token'));
        const response = {
            status: 200,
            data: get(id)
        };
        if (response && response.status === 200) {
            return response.data; // Devuelve los datos recibidos directamente
        }
    } catch (error) {
        console.log('Error al obtener el historial de servicios: \n' + error.message);
    }
    return null;
}

export default history;
