import {useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({
    gastos,
    setGastos,
    presupuesto,
    setPresupuesto,
    setIsValidPresupuesto
    }) => {

    const [porcentaje, setPorcentaje] = useState(0)
    const [disponible, setDisponible] = useState(0)
    const [gastado, setGastado] = useState(0)
    useEffect(() => {
        
        const totalGastado = gastos.reduce((total, gasto) => gasto.cantidad + total, 0 )
        const totalDisponible = presupuesto - totalGastado 
        //Cálculo de porcentaje gastado
        const nuevoPorcentaje = (((totalGastado) / presupuesto) * 100).toFixed(2)
        setDisponible(totalDisponible)
        setGastado(totalGastado)
        setTimeout(() => {
            setPorcentaje(nuevoPorcentaje)
        }, 999);
      
    }, [gastos])
    

    const formatearCantidad = (cantidad) => {
        return cantidad.toLocaleString('es-ar', {
            style: 'currency',
            currency: 'ARS',
            minimumFractionDigits: 2
        });
    }

    const handleResetApp = () => {
        const resultado = confirm('Desea realmente eliminar presupuesto y gastos?')
        if (resultado) {
            setGastos([])
            setPresupuesto(0)
            setIsValidPresupuesto(false)
        } else {
            console.log('Nope!!')
        }
    }

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas' >
        <div>
            <CircularProgressbar
                styles={buildStyles({
                    pathColor: porcentaje > 100 ? '#dc2626' : '#3b82f6', 
                    trailColor:'f5f5f5',
                    textColor: porcentaje > 100 ? '#dc2626' : '#3b82f6',
                })}
                value={porcentaje}
                text={` ${ porcentaje } % Gastado`}
            />
        </div>
        <div className='contenido-presupuesto' >
            <button
                className='reset-app'
                type='button'
                onClick={handleResetApp}
            >
                Restablecer aplicación
            </button>
            <p>
                <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
            </p>
            <p className={` ${disponible < 0 ? 'negativo' : ''} `} >
                <span>Disponible:</span> {formatearCantidad(disponible)}
            </p>
            <p>
                <span>Gastado:</span> {formatearCantidad(gastado)}
            </p>
        </div>
    </div>
  )
}

export default ControlPresupuesto