import React from "react" // No importa, si se usa Vite, ya que lo hace por inercia.
import MenuEnlaces from "./MenuEnlaces"
import "./header.css"
// import "../../assets/logoportal.png"
import Login from "./Login"
import logoPortal from '../imgs/logoportal.png'

const Encabezado = () => {// No nombrar funciones con etiquetas reservadas de HTML como header, body, etc.
    return (
        <div className="header">
            <div className="menu">
                <img src={logoPortal} alt="" />
                <MenuEnlaces />
                    {/* <div class="empresas">
                        <span class="material-icons vaca">
                            login
                        </span>
                        <h6 class="vaca">EMPRESAS</h6>
                    </div> */}
                        <Login />
                </div>
        </div>
    )
}

export default Encabezado