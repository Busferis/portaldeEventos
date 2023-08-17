import React from 'react';
import Busqueda_Barra from './Busqueda_Barra';

const Portada = () => {
  return (
    <div className='portada'>
        <div className='barra'>
            <div className='titulo_Barra'>
                <h1>ENCONTRÁ TODO PARA TU EVENTO</h1>
            </div>
            <div className='busqueda_Barra'>
                <select class="custom-select" name="cars1">
                    <option value="volvo">Zona: ejemplo San Miguel</option>
                </select>
                <select class="cars2" name="cars2">
                    <option value="volvo">¿Qué estás buscando?</option>
                </select>
                <button class="button" type="submit">
                    <span class="material-icons">search</span>
                    <p class="parrafo_Button">BUSCAR</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Portada