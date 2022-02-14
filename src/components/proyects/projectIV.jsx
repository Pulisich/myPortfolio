import React from "react";
import ReturnProjects from "../returnButton/returnProjectButton";

function EcoCuchas(){
    return(
        <div>
            <header>Eco Cuchas</header>
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