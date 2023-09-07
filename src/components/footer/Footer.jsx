import React from 'react';
import './footer.css';
import logoPortal from '../imgs/logoportal.png'
import icoFB from '../imgs/ico-fb.svg'
import icoInstagram from '../imgs/ico-instagram.svg'
import icoLinkedIn from '../imgs/ico-linkedin.svg'
import icoPinterest from '../imgs/ico-pinterest.svg'
import icoTwitter from '../imgs/ico-twitter.svg'
import mail from '../imgs/mail.svg'

const PiePagina = () => {
    return(
        <div className='footer'>
            <div className="div1">
                <img src={logoPortal}/>
                <div className="div10">
                    <div className="primero">
                        <h6>CATEGORIAS</h6>
                        <h6>SALONES</h6>
                        <h6>IMAGEN PERSONAL</h6>
                        <h6>CONTACTO</h6>
                    </div>
                    <div className="segundo">
                        <h6>AVISOS LEGALES</h6>
                        <h6>TERMINOS Y CONDICIONES</h6>
                        <h6>TRABAJA CON NOSOTROS</h6>
                        <h6>ANUNCIA EN EL PORTAL</h6>
                    </div>
                </div>
            </div>
            <div className="div2">
                <div className="div11">
                    <h3>Newsletter y promociones</h3>
                    <div className="suscribirse">
                        <input type="text" class="texto" placeholder="Dejanos tu correo y recibí las últimas noticias!"/>
                        <button className="button">SUSCRIBIRSE</button>
                    </div>
                    <div className="redes">
                        <p>Seguinos en nuestras redes</p>
                        <img src={mail}/>
                        <img src={icoInstagram}/>
                        <img src={icoFB}/>
                        <img src={icoTwitter}/>
                        <img src={icoPinterest}/>
                        <img src={icoLinkedIn}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PiePagina