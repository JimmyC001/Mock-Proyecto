import { get } from '../../../assets/users';

const login = ({ email, password }) => {
    try{
        const result = get({ email, password });
        if(result)
            return { id: result.id };
        else
            return null;
    } catch(error){
        console.log('Login Fallido: \n' + error.message);
    }
};

export default login;
