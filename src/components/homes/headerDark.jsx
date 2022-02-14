import React from 'react'
import { Link } from 'react-router-dom'

function HomeDark() {

    return (
        <div className='homeDark'>
            <header className='headerDark'>
                <h1>Pablo Pulisich</h1>
                <h2>Front End Developer</h2>
            </header>
            <section className='introDark'>
                <span><img src="" alt="Yo" /></span>
                <h2>¡Hola!</h2>
                <p>Mi nombre es Pablo Pulisich, te doy la bienvenida a mi portfolio personal.
                    <br />
                    Aquí podrás encontrar mis proyectos seleccionados, mi historia, y otros datos sobre mí que pueden interesarte.
                </p>
            </section>
            <section className='proyectos'>
                <h1>Mi portfolio</h1>
                <div className='cardContainer'>
                    <Link to="/proyects">
                    <div className="card">
                        <h3>Proyectos</h3>
                    </div>
                    </Link>
                    <Link to="/about">
                    <div className="card">
                        <h3>Sobre mi</h3>
                    </div>
                    </Link>
                    <Link to="/contact">
                    <div className="card">
                        <h3>Contacto</h3>
                    </div>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default HomeDark