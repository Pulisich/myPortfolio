import React from "react";
import ReturnProjects from "../returnButton/returnProjectButton";

function JorgeLandaJS(){
    return(
        <div>
            <header className="headerDark"><h1>Jorge Landa E-Commerce</h1></header>
            <ReturnProjects/>
            <section className="projectDescription">

                <p> Realizado para el módulo de JavaScript de la carrera de Desarrollador Front End de Coderhouse.
                    <br />
                    Emula lo que sería el e-commerce de la sección de pastas.
                    <br />
                    Imágenes reemplazadas por genéricas debido a conflictos de uso.
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