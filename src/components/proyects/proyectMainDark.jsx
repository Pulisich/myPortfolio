import React from "react";
import { Link } from "react-router-dom";
import ReturnHome from "../returnButton/returnButton";

function ProyectMainDark() {

    return (
        <div className="proyectDark">
            <header className="headerDark">

                <h1>Proyectos</h1>

            </header>
            <ReturnHome/>
            <section className="introDark">
                <p>En ésta sección encontrarás mis proyectos como desarrollador, algunos fueron por encargo, otros fueron para cursos, otros son personales.

                    <br />


                    ¡Que lo disfrutes!
                </p>
            </section>
            
            <section>
            <div className='cardContainer'>
                   <Link to="/CityPhone">
                    <div className="card">
                        <h3>E-Commerce</h3>
                    </div>
                    </Link>
                    <Link to="/Funditron">
                    <div className="card">
                        <h3>Funditron</h3>
                    </div>
                    </Link>
                    
                    <Link to="/JorgeLandaJS">
                    <div className="card">
                        <h3>E-commerce JL</h3>
                    </div>
                    </Link>
                    <Link to="/JlLanding">
                    <div className="card">
                        <h3>JL Landing</h3>
                    </div>
                    </Link>
                    <Link to="/EcoCuchas">
                    <div className="card">
                        <h3>Eco Cuchas</h3>
                    </div>
                    </Link>
                    <Link to="/TKD">
                    <div className="card">
                        <h3>Cba TKD</h3>
                    </div>
                    </Link>
                </div>

            </section>
        </div>
    )

}

export default ProyectMainDark