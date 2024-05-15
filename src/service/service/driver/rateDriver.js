import { instance } from "../../index";

const rateDriver = async ({ driverId, rating }) => {
    try {
        const response = await instance.post(`/api/drivers/${driverId}/rate`, { rating });
        return { success: true, data: response.data };
    } catch (error) {
        console.error("Error al enviar la calificación del conductor:", error);
        return { success: false, error: error.message };
    }
};

export default rateDriver;
