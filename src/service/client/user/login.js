import { get } from '../../../assets/users';

const login = async ({ email, password }) => {
    try{
        const result = await get({ email, password });
        if(result){
            // console.log(result);
            return { id: result.id };
        }
        else
            return null;
    } catch(error){
        console.error('Login Fallido: \n' + error.message);
    }
};

export default login;
