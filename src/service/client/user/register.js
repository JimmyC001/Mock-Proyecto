import { add } from '../../../assets/users';

const register = ({ firstName, lastName, email, passwordHash, phone, birthDate }) => {
    try {
        const body = {
            firstName: firstName || null,
            lastName: lastName || null,
            email: email || null,
            passwordHash: passwordHash || null,
            birthDate: birthDate || null,
            phoneNumber: phone || null
        };        
        const data = add(body);
        if(data)
            return {
                status: 200,
                data: data
            };
        else
            return {
                status: 400,
                message: "No se realizo el registro"
            };
    } catch (error) {
        console.log('Error en el registro: \n' + error);
        return null;
    }
};

export default register;