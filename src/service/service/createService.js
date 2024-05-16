import { add } from '../../assets/service';


const createService = async (serviceDetails) => {
    try {
        const { pickUpDate, pickUpAddress, addressDetails, deliveryAddress, deliveryDetails, items } = serviceDetails;
        const formattedItems = items.map(({name, details, length, width, height, images}) => ({
            name:       name    || null,
            details:    details || null,
            length:     length  || null,
            width:      width   || null,
            height:     height  || null,
            imageUrl:   images  || null
        }));
        const token = Number(sessionStorage.getItem('token'));
        if(token){
            const requestBody = {
                clientId: token,
                pickUpDate,
                pickUpAddress,
                addressDetails,
                deliveryAddress,
                deliveryDetails,
                formattedItems
            };
            add(requestBody);
            return {
                status: 200,
                data: requestBody
            };
        } else return null;
    } catch (error) {
        console.log("Error al crear servicio: \n" + error.message);
        return null;
    }
};

export default createService;