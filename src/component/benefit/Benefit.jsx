const Benefit = ({ title, children }) => {
    return(
        <article>
            <strong>{title}</strong>
            <span>{children}</span>
        </article>
    );
};

export default Benefit;