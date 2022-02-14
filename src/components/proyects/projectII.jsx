import React from "react";
import ReturnProjects from "../returnButton/returnProjectButton";

function JorgeLandaJS(){
    return(
        <div>
            <header>Jorge Landa E-Commerce</header>
            <ReturnProjects/>
            <section className="projectDescription">

                <img src="" alt="cityPhoneScreenShot" />
                <p> Realizado para el módulo de React JS de la carrera de Desarrollador Front End de Coderhouse.
                    <br />
                    Emula lo que sería el e-commerce de un local de accesorios de celulares en el que trabajo.
                </p>

                <h2>
                    Tecnologías usadas:
                    
                </h2>

                <ul>

                        <li>JavaScript ES6</li>
                        <li>jQuery</li>
                        <li>HTML5/XML</li>
                        <li>AJAX</li>
                        <li>CSS3</li>
                        <li>Google Firebase</li>
                        <li>Git, GitHub, GitBash</li>
                        <li>NPM</li>
                    </ul>

                
                <a href="https://pulisich.github.io/Coderhouse-JS-FINAL/" rel="norel" target="_blank">

                    <button>Deployment</button>
                
                </a>
             
            </section>
        </div>
    )
}

export default JorgeLandaJS