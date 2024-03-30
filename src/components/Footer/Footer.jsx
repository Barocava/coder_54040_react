import "./Footer.css"

export const Footer = () => {
    return (
        <footer className="footer">
        <div className="pie">
            <ul className="contenedor-menu texto">
                <li className="menu-item"><a href="">© 2023 Arquitectos Asociados, Inc.</a></li>
            </ul>

            <ul className="contenedor-menu">
                <li className="menu-item"><a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a></li>
                <li className="menu-item"><a href="https://es-la.facebook.com/"><i className="bi bi-facebook"></i></a></li>
                <li className="menu-item"><a href="mailto:"><i className="bi bi-envelope-fill"></i></a></li>
            </ul>
        </div>
    </footer>
    )
}