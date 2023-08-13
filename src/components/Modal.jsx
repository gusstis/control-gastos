import {useState, useEffect} from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({
        setModal,
        animarModal,
        setAnimarModal,
        guardarGasto,
        gastoEditar
    }) => {
    const [mensaje, setMensaje] = useState('')
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState('')
    const [categoria, setCategoria] = useState('')
    const [fecha, setFecha] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        if (Object.keys(gastoEditar).length > 0) {
            setNombre(gastoEditar.nombre)
            setCantidad(gastoEditar.cantidad)
            setCategoria(gastoEditar.categoria)
            setFecha(gastoEditar.fecha)
            setId(gastoEditar.id)
        }
    }, [])
    
    

    const ocultarModal = () => {
        setAnimarModal(false)
        setTimeout(() => {
            setModal(false)
        },500)
    }

    const handleSubmit = e => {
        e.preventDefault();
        if ([ nombre, cantidad, categoria ].includes('')) {
            setMensaje('Todos los campos son necesarios')
            setTimeout(() => {
                setMensaje('')  
            }, 2000);
            return
        }
        guardarGasto({ nombre, cantidad, categoria, fecha, id })

    }

    return (
    <div className="modal" >
        <div className="cerrar-modal" >
            <img
                src={CerrarBtn}
                alt="cerrar modal"
                onClick={ocultarModal}
            />
        </div>
        <form
            className={` formulario ${ animarModal ? "animar" : "cerrar" } `}
            onSubmit={handleSubmit}
        >
            <legend> {gastoEditar.nombre ? 'Editar el gasto' : 'Nuevo Gasto' } </legend>
            {mensaje && <Mensaje tipo='error' >{mensaje}</Mensaje>}
            <div className='campo' >
                <label htmlFor="nombre">Nombre Gasto</label>
                <input
                    id='nombre'
                    type="text"
                    placeholder='Comida, salidas, remedios, etc.'
                    value={nombre}
                    onChange={ e => setNombre(e.target.value) }
                />
            </div>
            <div className='campo' >
                <label htmlFor="cantidad">Cantidad</label>
                <input
                    id='cantidad'
                    type="number"
                    value={cantidad}
                    onChange={ e => setCantidad(Number(e.target.value)) }
                    placeholder='Monto del gasto: ej.: 250'
                />
            </div>
            <div className='campo' >
                <label htmlFor="categoria">Categoría</label>
                <select name="" 
                id="categoria"
                value={categoria}
                onChange={ e => setCategoria(e.target.value) }
                >

                    <option value="">······Seleccione······</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="salud">Salud</option>
                    <option value="ocio">Ocio</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input
                type="submit"
                value={gastoEditar.nombre ? 'Guardar cambios' : 'Añadir Gasto' }
            />
        </form>
    </div>
  )
}

<div className="modal" >
    <p>Este es el modal</p>
</div>
export default Modal