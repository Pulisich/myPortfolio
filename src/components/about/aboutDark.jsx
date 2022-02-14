import React from "react";
import ReturnHome from "../returnButton/returnButton";

function AboutDark(){

    return (
        <div>
            <header>
                <h1>Sobre Mi</h1>
                <h2>¿Quién es Pablo Pulisich?</h2>
            </header>
            <ReturnHome/>
            <section>
                <p>
                En ésta sección vas a encontrar una breve descripción mía, quién soy, cuáles son mis objetivos, cuáles son mis planes a futuro, y algún que otro dato interesante
                    <br />
                O podés saltearte todo e ir directamente al final, donde está todo resumido.
                </p>
                <a href="#resumen">
                    <button>Omitir intro</button>
                </a>
            </section>
            <section>
                <h2>¿Quién soy?</h2>
                <p><i>“I am Gandalf and Gandalf means me”</i>- The Hobbit, J.R.R. Tolkien
                    <br />
                    Mi nombre es Pablo Pulisich, soy desarrollador Front End, me especializo en React Js.
                <br />
                    Actualmente estoy trabajando como desarrollador freelance mientras busco empleo full time en empresas del sector.
                    </p>

            </section>
            <section>
                <h2>
                “Se tiene que hacer”: Pablo en el trabajo.

                </h2>
                <p>
                “Se tiene que hacer” se ha convertido con el pasar de los años en mi lema personal a la hora de trabajar.

                </p>
                <p>
                Si bien hay varias habilidades blandas de las que me siento orgulloso, como lealtad a mi equipo, empatía, disciplina, y responsabilidad, la que creo yo es mi fortaleza es mi fuerza de voluntad cumplir con los objetivos.
                </p>

                <section>
                    <h2>Tecnologías</h2>

                    <h3>Que manejo:</h3>
                    <ul>
                        <li>React JS</li>
                        <li>JavaScript ES6</li>
                        <li>jQuery</li>
                        <li>AJAX</li>
                        <li>JSON</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>SASS</li>
                        <li>Bootstrap</li>
                        <li>NPM</li>
                        <li>Google Firebase</li>
                        <li>Git, Github, GitBash</li>
                    </ul>

                    <h3>Que me gustaría aprender en el futur</h3>
                    <ul>
                    <li>Node Js</li>
                    <li>Angular</li>
                    <li>Typescript</li>
                    <li>C#</li>
                    <li>Python</li>
                    <li>Cybersecurity</li>
                    <li>Unity</li>
                    </ul>
                </section>
                <section id="resumen">
                    <h2>RESUMEN</h2>
                    <p><b>Nombre completo:</b> Pablo Pulisich</p>
                    <p><b>Título:</b> Desarrollador Front End</p>
                    <p><b>Tecnologías:</b> JavaScript ES6, React JS, jQuery, AJAX, JSON, HTML5, CSS3, SASS, Bootstrap, NPM, Google Firebase, SQL, Git, GitHub, GitBash.</p>
                    <p><b>Habilidades blandas:</b>disciplina, responsabilidad, empatía, orientación a soluciones. </p>
                    <p><b>Idiomas:</b> Inglés, Portugués, Español</p>
                    <p><b>Disponibilidad horaria:</b> Full Time</p>
                </section>
            </section>

        </div>
    )
}

export default AboutDark