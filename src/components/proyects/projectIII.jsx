import React from "react";
import ReturnProjects from "../returnButton/returnProjectButton";

function JorgeLandaLanding(){
    return(
        <div>
            <header>Jorge Landa: Landing</header>
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
                       
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Git, GitHub, GitBash</li>
                        
                    </ul>

               
                <a href="https://pulisich.github.io/FCC-Landing-Page/" rel="norel" target="_blank">

                    <button>Deployment</button>
                
                </a>
            </section>
        </div>
    )
}

export default JorgeLandaLanding