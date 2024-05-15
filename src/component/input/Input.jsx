import './Input.css';

const Input = ({name, placeholder, onChangeEvent }) => {
    return(
        <div className='input-container'>
            <span className='input-name'>{name}</span>
            <input 
                className='input-field' 
                type="text" 
                placeholder={placeholder}
                onChange={onChangeEvent}
            />
        </div>
    );
};

export default Input;
