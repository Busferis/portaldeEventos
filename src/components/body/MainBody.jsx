import React from "react";
import './body.css';
import Portada from "./Portada";
import Portal from "./Portal";
import Secciones from "./Secciones";
import Slider from "./Slider";

const MainBody = () => {
  return (
    <div className="body">
        <Portada />
        <Slider />
        <Secciones />
        <Portal />
    </div>
  )
}

export default MainBody