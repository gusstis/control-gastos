import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal}) => {
    const ocultarModal = () => {
        setAnimarModal(false)

        setTimeout(() => {
            setModal(false)
        },500)
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
        <form className={` formulario ${ animarModal ? "animar" : "cerrar" } `} >
            <legend>Nuevo Gasto</legend>
            <div className='campo' >
                <label htmlFor="nombre">Nombre Gasto</label>
                <input
                    id='nombre'
                    type="text"
                    placeholder='Comida, salidas, remedios, etc.'
                />
            </div>
            <div className='campo' >
                <label htmlFor="cantidad">Cantidad</label>
                <input
                    id='cantidad'
                    type="number"
                    placeholder='Monto del gasto: ej.: 250'
                />
            </div>
            <div className='campo' >
                <label htmlFor="categoria">Categoría</label>
                <select name="" id="categoria">
                    <option value="">······Seleccione······</option>
                    <option value="ahoro">Ahorro</option>
                    <option value="comida">Comida</option>
                    <option value="casa">Casa</option>
                    <option value="gastos">Gastos Varios</option>
                    <option value="salud">Salud</option>
                    <option value="ocio">Ocio</option>
                    <option value="suscripciones">Suscripciones</option>
                </select>
            </div>
            <input type="submit" value="Añadir Gasto" />
        </form>
    </div>
  )
}

<div className="modal" >
    <p>Este es el modal</p>
</div>
export default Modal