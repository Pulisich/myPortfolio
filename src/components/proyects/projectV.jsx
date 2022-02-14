import React from "react";
import ReturnProjects from "../returnButton/returnProjectButton";

function TKD(){
    return(
        <div>
            <header className="headerDark"><h1>Córdoba TKD ITF</h1></header>
            <ReturnProjects/>
            <section className="projectDescription">

                <img src="" alt="cityPhoneScreenShot" />
                <p> Realizado para el módulo de Web Development de la carrera de Desarrollador Front End de Coderhouse.
                    <br /> 
                    El objetivo era proporcionar a los miembros de la escuela de un hub donde pudieran obtener información de la misma y poder usar el material de estudio para guiarse.
                    <br /> 
                    <b>ATENCIÓN: ÉSTE PROYECTO SERÁ DESCONTINUADO Y REVERSIONADO EN MARZO, POR LO QUE PUEDE NO ESTÉ DISPONIBLE HASTA SU NUEVA VERSIÓN.</b>   
                </p>

                <h2>
                    Tecnologías usadas:
                    
                </h2>

                <ul>

                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SASS</li>
                        <li>Bootstrap</li>
                        <li>Git, GitHub, GitBash</li>
                        <li>NPM</li>
                    </ul>


                <a href="https://pulisich.github.io/Proyecto-Final-Coderhouse/estudiantes.html" rel="norel" target="_blank">

                <button>Deployment</button>

                </a>
            </section>
        </div>
    )
}

export default TKD