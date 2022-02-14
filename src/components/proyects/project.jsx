import React from "react";
import ReturnProjects from "../returnButton/returnProjectButton";

function Funditron(){
    return(
        <div>
            <header>Funditron V.1.0</header>
            <ReturnProjects/>
            <section className="projectDescription">

                <img src="" alt="cityPhoneScreenShot" />
                <p> Una app diseñada para testear el rendimiento de una computadora.
                    <br />
                    <b>LEER ATENTAMENTE LA DOCUMENTACIÓN ANTES DE UTILIZAR</b>
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


                <a href="https://funditron.herokuapp.com/" rel="norel" target="_blank">

                    <button>Deployment</button>
                
                </a>
            </section>
        </div>
    )
}

export default Funditron