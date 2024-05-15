import './LogoName.css';

const LogoName = () => {
    return(
        <section className="ln">
            <img 
                className="ln-img"
                src="assets/logo.png"
                alt=""
            />
            <h4 className="ln-name">HERMES</h4>
            
        </section>
    );
};

export default LogoName;