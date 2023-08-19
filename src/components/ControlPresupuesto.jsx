import {useEffect, useState } from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ControlPresupuesto = ({gastos, presupuesto}) => {

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

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas' >
        <div>
            <CircularProgressbar
                value={porcentaje}
            />
        </div>
        <div className='contenido-presupuesto' >
            <p>
                <span>Presupuesto:</span> {formatearCantidad(presupuesto)}
            </p>
            <p>
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