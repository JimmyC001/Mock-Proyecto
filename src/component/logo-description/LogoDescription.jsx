import './LogoDescription.css';

const LogoDescription = () => {
    return(
        <section className="ld">
            <img 
                className="ld-img"
                src="assets/logo.png"
                alt=""
            />
            <h1 className="ld-name">HERMES</h1>
            <h3 className="ld-slogan">Aligerando el peso de tu carga</h3>
        </section>
    );
};

export default LogoDescription;