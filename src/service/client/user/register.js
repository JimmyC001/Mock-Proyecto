import { instance } from '../../index';


const register = async ({ firstName, lastName, email, passwordHash, phone, birthDate }) => {
    try {
        const body = {
            firstName: firstName || null,
            lastName: lastName || null,
            email: email || null,
            passwordHash: passwordHash || null,
            birthDate: birthDate || null,
            phoneNumber: phone || null
        };
        const response = await instance.post('/auth/register', body); 
        return response.data;
    } catch(error) {
        //console.log('Error en el registro: \n' + error);
    }
    return null;
};

export default register;
