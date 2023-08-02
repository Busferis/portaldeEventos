import React from "react" // No importa, si se usa Vite, ya que lo hace por inercia.
import MenuEnlaces from "./MenuEnlaces"
import "./header.css"
import "../../assets/logoportal.png"

const Encabezado = () => {// No nombrar funciones con etiquetas reservadas de HTML como header, body, etc.
    return (
        <>
            <header class="header">
                <div class="menu">
                    <img src="../../assets/logoportal.png"></img>
                    <nav>
                        <MenuEnlaces />
                    </nav>
                    <div class="empresas">
                        <span class="material-icons vaca">
                            login
                        </span>
                        <h6 class="vaca">EMPRESAS</h6>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Encabezado