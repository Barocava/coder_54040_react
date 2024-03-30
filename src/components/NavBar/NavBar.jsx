import { useState } from 'react';
import { useEffect } from 'react';
import "./NavBar.css"
import CarWidget from '../CarWidget/CarWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [class_state_acerca, setClases_acerca] = useState("nav-link efecto");
    const [class_state_como, setClases_como] = useState("nav-link efecto");
    const [class_state_proyectos, setClases_proyectos] = useState("nav-link efecto active");
    const [class_state_contacto, setClases_contacto] = useState("nav-link efecto");

    
    const handleClick_acerca = () => {
        setClases_acerca("nav-link efecto active");
    };

    useEffect(() => {
        if(class_state_acerca=="nav-link efecto active") {
            setClases_como("nav-link efecto");
            setClases_proyectos("nav-link efecto");
            setClases_contacto("nav-link efecto");
        }      
    },[class_state_acerca]);

    const handleClick_como = () => {
        setClases_como("nav-link efecto active");
    };

    useEffect(() => {
        if(class_state_como=="nav-link efecto active") {
            setClases_acerca("nav-link efecto");
            setClases_proyectos("nav-link efecto");
            setClases_contacto("nav-link efecto");        
        }
    },[class_state_como]);

    const handleClick_proyectos = () => {
        setClases_proyectos("nav-link efecto active");
    };

    useEffect(() => {
        if(class_state_proyectos=="nav-link efecto active") {
            setClases_acerca("nav-link efecto");
            setClases_como("nav-link efecto");
            setClases_contacto("nav-link efecto"); 
        }       
    },[class_state_proyectos]);

    const handleClick_contacto = () => {
        setClases_contacto("nav-link efecto active");
    };

    useEffect(() => {
        if(class_state_contacto=="nav-link efecto active") {
            setClases_acerca("nav-link efecto");
            setClases_como("nav-link efecto");
            setClases_proyectos("nav-link efecto");      
        }  
    },[class_state_contacto]);

    return (
    <header>
        <nav className="navbar navbar-expand-md bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">

                <Link to="/coder_54040_react/category/proyectos" className="navbar-brand">
                    <i className="bi bi-house-fill"></i>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-center px-3" id="navbarNav">
                    <ul className="navbar-nav">

                        <li className="nav-item px-3">
                            <Link to={"/coder_54040_react/category/metros"} className={class_state_acerca} 
                         onClick={handleClick_acerca} >
                                Metros
                            </Link>
                        </li>

                        <li className="nav-item px-3">
                            <Link to={"/coder_54040_react/category/precio"} className={class_state_como} aria-current="page" onClick={handleClick_como}>Precio</Link>
                        </li>

                        <li className="nav-item px-3 active">
                            <Link to={"/coder_54040_react/category/proyectos"} className={class_state_proyectos} onClick={handleClick_proyectos}>Proyectos</Link>
                        </li>

                        <li className="nav-item px-3">
                            <Link to={"/coder_54040_react/category/ubicacion"} className={class_state_contacto} onClick={handleClick_contacto}>Ubicacion</Link>
                        </li>

                    </ul>
                </div>

                <CarWidget/>

            </div>
        </nav>
    </header>
    )
}

export default NavBar