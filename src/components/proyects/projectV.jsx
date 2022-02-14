import React from "react";
import ReturnProjects from "../returnButton/returnProjectButton";

function TKD(){
    return(
        <div>
            <header>Córdoba TKD ITF</header>
            <ReturnProjects/>
            <section className="projectDescription">

                <img src="" alt="cityPhoneScreenShot" />
                <p> Realizado para el módulo de Web Development de la carrera de Desarrollador Front End de Coderhouse.
                    <br />
                    Emula lo que sería el e-commerce de un local de accesorios de celulares en el que trabajo.
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