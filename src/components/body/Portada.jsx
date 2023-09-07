import React from 'react';

const Portada = () => {
  return (
    <div className='portada'>
        <div className='barra'>
            <div className='titulo_Barra'>
                <h1>ENCONTRÁ TODO PARA TU EVENTO</h1>
            </div>
            <div className='busqueda_Barra'>
                <select className="custom-select" name="cars1">
                    <option value="volvo">Zona: ejemplo San Miguel</option>
                </select>
                <select className="cars2" name="cars2">
                    <option value="volvo">¿Qué estás buscando?</option>
                </select>
                <button className="button" type="submit">
                    <span className="material-icons-outlined">search</span>
                    <p className="parrafo_Button">BUSCAR</p>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Portada