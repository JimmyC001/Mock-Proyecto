import { instance } from "../index";

const update = async (userDetails) => {
    try{
        const {firstName,lastName,email,password,phone,address,birthDate,city} = userDetails;
        const body = {
            firstName: firstName || null,
            lastName: lastName || null,
            email: email || null,
            password: password || null,
            phoneNumber: phone || null,
            address: address || null,
            birthDate: birthDate || null,
            city: city || null
        };
        const response = await instance.put("/client", body);
        return response.data;

    }
    catch(error){
        console.log("Error al actualizar usuario: \n" + error.message);
    }
    return null;
}

export default update;