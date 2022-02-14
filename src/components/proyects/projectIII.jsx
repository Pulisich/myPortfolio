import React from "react";
import ReturnProjects from "../returnButton/returnProjectButton";

function JorgeLandaLanding(){
    return(
        <div>
            <header className="headerDark"><h1>Jorge Landa: Landing Page</h1></header>
            <ReturnProjects/>
            <section className="projectDescription">

                <p> 
                    Landing Page diseñada para el módulo de Free Code Camp, y ofrecida al chef Jorge Landa para su uso.
                    <br />
                    Es una SPA que permite visualizar el catálogo de Jorge Landa Delicatessen y comunicarse con el al final.
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