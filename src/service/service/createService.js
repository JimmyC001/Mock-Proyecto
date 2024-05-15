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
        const token = localStorage.getItem('token');
        if(token){
            const requestBody = {
                clientId:                       token           || null,
                deliveryDate:                   pickUpDate      || null,
                deliveryAddressLongAddress:     pickUpAddress   || null,
                deliveryAddressDetails:         addressDetails  || null,
                receivingAddressLongAddress:    deliveryAddress || null,
                receivingAddressDetails:        deliveryDetails || null,
                load:                           formattedItems  || null
            };
            add(requestBody)
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