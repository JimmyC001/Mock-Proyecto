import './Button.css';

const Button = ({ children, event }) => {
    return(
        <button className='button' onClick={event}>
            {children}
        </button>
    );
};

export default Button;