import { useEffect, useState } from 'react';
import { useCart } from '../../../context/CartContext';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../services/firebase';

export const Formulario = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        correo: '',
        confirmacionCorreo: '',
    });
    const [habilita, setHabilita] = useState(false);
    let [validaciones, setValidaciones] = useState({
        nombre: true,
        apellido: true,
        telefono: true,
        correo: true,
        confirmacionCorreo: true,
        //cantidad: true
    });
    const [id, setOrder] = useState(null);
    const [exito_flag, setExito] = useState(false);
    const { cart, clearCart, isInCart } = useCart();

    const ordersCollection = collection(db,"orders");
    let mensaje_exito = "Felicidades ha realizado su compra. ID = ";

    const esSoloNumeros = (str) => {
        return /^\d+$/.test(str);
    }


    let mensajes = {
        nombre: "El nombre ingresado debe tener mas de 3 caracteres",
        apellido: "El nombre ingresado debe tener mas de 3 caracteres",
        telefono: "El numero debe tener mas de 3 digitos y menos de 12 .Solo numeros",
        correo: "Debe contener @",
        confirmacionCorreo: "Debe ser igual al correo",
        cantidad: "El carrito esta vacio"
    }




    useEffect(() => {
        let validacionesPrevias = {
            nombre: true,
            apellido: true,
            telefono: true,
            correo: true,
            confirmacionCorreo: true,
            cantidad: true
        }
        formData.nombre === '' || formData.nombre.length < 1 ? validacionesPrevias.nombre = true : validacionesPrevias.nombre = false
        formData.apellido === '' || formData.apellido.length < 1 ? validacionesPrevias.apellido = true : validacionesPrevias.apellido = false
        formData.telefono === '' || formData.telefono.toString().length < 4 || !esSoloNumeros(formData.telefono.toString())
        ? validacionesPrevias.telefono = true 
        : validacionesPrevias.telefono = false 
        
        formData.correo === '' || !formData.correo.includes("@") ? validacionesPrevias.correo = true : validacionesPrevias.correo = false
        formData.correo !== formData.confirmacionCorreo ? validacionesPrevias.confirmacionCorreo = true : validacionesPrevias.confirmacionCorreo = false
        //cart.length >= 0 ? validacionesPrevias.cantidad = true : validacionesPrevias.cantidad = false
        setValidaciones(validacionesPrevias);
        console.log(validacionesPrevias);
        if (!validacionesPrevias.nombre &&
            !validacionesPrevias.apellido &&
            !validacionesPrevias.telefono &&
            !validacionesPrevias.correo &&
            !validacionesPrevias.confirmacionCorreo &&
            cart.length > 0
            //!validacionesPrevias.cantidad
        ) {
            setHabilita(true);
        } else {
            setHabilita(false);
        }
        console.log(habilita);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("holaSi");
        let order = {...formData};
        delete order.confirmacionCorreo;
        order = {...order,productos:cart}
        console.log(order);
        addDoc(ordersCollection,order).then(({id}) => {
            setOrder(id);
            console.log("Su id es " + id );
        });
        setExito(true);
        clearCart();
        setHabilita(false);
        };

    return (
        <>
            <div className="container mt-4" style={{ minHeight: "100vh" }}>
                <div className='row'>
                <div className="col-6">
                <h1 className="mb-5">Resumen de Compra</h1>
                <form style={{ width: "50%" }} onSubmit={handleSubmit}>
                    <div className="form-group my-4">
                        <label>Nombre:</label>
                        <input
                            type="text"
                            name="nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group my-4">
                        <label>Apellido:</label>
                        <input
                            type="text"
                            name="apellido"
                            value={formData.apellido}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group my-4">
                        <label>Teléfono:</label>
                        <input
                            type="text"
                            name="telefono"
                            value={formData.telefono}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group my-4">
                        <label>Correo electrónico:</label>
                        <input
                            type="email"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group my-4">
                        <label>Confirmación de correo electrónico:</label>
                        <input
                            type="email"
                            name="confirmacionCorreo"
                            value={formData.confirmacionCorreo}
                            onChange={handleChange}
                            className="form-control"
                        />
                    </div>
                    { habilita 
                    ? <button type="submit" className="btn btn-primary my-4 justify-content-end">Realizar Compra</button>
                    : (
                        <>
                            <button type="submit" className="btn btn-primary my-4 justify-content-end" disabled>Realizar Compra</button>
                            { validaciones.nombre && <p style={{ fontSize: '12px', color: 'red' }}>{mensajes.nombre}</p> }
                            { validaciones.apellido && <p style={{ fontSize: '12px', color: 'red' }}>{mensajes.apellido}</p> }
                            { validaciones.telefono && <p style={{ fontSize: '12px', color: 'red' }}>{mensajes.telefono}</p> }
                            { validaciones.correo && <p style={{ fontSize: '12px', color: 'red' }}>{mensajes.correo}</p> }
                            { validaciones.confirmacionCorreo && <p style={{ fontSize: '12px', color: 'red' }}>{mensajes.confirmacionCorreo}</p>}
                        </>
                    )
                    }
                </form>
                </div>
                <div className="col-6 d-flex justify-content-center align-items-center">
                    { exito_flag && id && <>
                    <p className="h1 text-center" style={{color: 'green' }}>{mensaje_exito + id}</p>
              
                    </>}
                    { exito_flag && !id &&  <>
                        <p className="h1 text-center">Cargando</p>
                    </>}
                </div>
                </div>
                
            </div>
        </>
    );
};
