import React from "react";
import ReturnProjects from "../returnButton/returnProjectButton";

function EcoCuchas(){
    return(
        <div>
            <header className="headerDark"><h1>Eco Cuchas</h1></header>
            <ReturnProjects/>
            <section className="projectDescription">

                <p> 
                    <b>STATUS: EN PROCESO DE DESARROLLO, DISEÑO Y PALETA DE COLORES EN APROBACIÓN PENDIENTE</b>
                    <br />
                    Por el momento es la estructura principal del sitio web de Eco Cuchas: una ONG local que se encarga de proveer de refugio sustentable a perros callejeros.
                </p>
                <h2>
                    Tecnologías usadas:
                    
                </h2>

                <ul>
                        <li>React Js</li>
                        <li>JavaScript ES6</li>
                        <li>HTML5/XML</li>
                        <li>CSS3</li>
                        <li>Git, GitHub, GitBash</li>
                        <li>NPM</li>
                    </ul>

                <a href="https://eco-cuchas.herokuapp.com/" rel="norel" target="_blank">

                    <button>Deployment</button>
                
                </a>
            </section>
        </div>
    )
}

export default EcoCuchas