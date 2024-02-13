import { useState } from 'react';
import "./NavBar.css"

const NavBar = () => {
    const [class_state_acerca, setClases_acerca] = useState("nav-link efecto")
    const [class_state_como, setClases_como] = useState("nav-link efecto")
    const [class_state_proyectos, setClases_proyectos] = useState("nav-link efecto active")
    const [class_state_contacto, setClases_contacto] = useState("nav-link efecto")

    const handleClick_acerca = (event) => {
        event.preventDefault();
        if (!event.currentTarget.className.split(" ").includes("active")) {
            setClases_acerca("nav-link efecto active");
            setClases_como("nav-link efecto");
            setClases_proyectos("nav-link efecto");
            setClases_contacto("nav-link efecto");
        }
    }
    const handleClick_como = (event) => {
        event.preventDefault();
        if (!event.currentTarget.className.split(" ").includes("active")) {
            setClases_acerca("nav-link efecto");
            setClases_como("nav-link efecto active");
            setClases_proyectos("nav-link efecto");
            setClases_contacto("nav-link efecto");
        }
    }
    const handleClick_proyectos = (event) => {
        event.preventDefault();
        if (!event.currentTarget.className.split(" ").includes("active")) {
            setClases_acerca("nav-link efecto");
            setClases_como("nav-link efecto");
            setClases_proyectos("nav-link efecto active");
            setClases_contacto("nav-link efecto");
        }
    }
    const handleClick_contacto = (event) => {
        event.preventDefault();
        if (!event.currentTarget.className.split(" ").includes("active")) {
            setClases_acerca("nav-link efecto");
            setClases_como("nav-link efecto");
            setClases_proyectos("nav-link efecto");
            setClases_contacto("nav-link efecto active");
        }
    }

    return (
    <header>
        <nav className="navbar navbar-expand-md bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">

                <a className="navbar-brand" href="../index.html">
                    <i className="bi bi-house-fill"></i>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center px-3" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item px-3">
                            <a className={class_state_acerca} href="" onClick={handleClick_acerca} >Acerca de Nosotros</a>
                        </li>

                        <li className="nav-item px-3">
                            <a className={class_state_como} aria-current="page" href="" onClick={handleClick_como}>¿Como Funciona?</a>
                        </li>

                        <li className="nav-item px-3 active">
                            <a className={class_state_proyectos} href="" onClick={handleClick_proyectos}>Proyectos</a>
                        </li>

                        <li className="nav-item px-3">
                            <a className={class_state_contacto} href="" onClick={handleClick_contacto}>Contacto</a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default NavBar
