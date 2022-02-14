import React from "react";
import ReturnHome from "../returnButton/returnButton";

function ContactDark() {
    return (
        <div>
            <header>
                <h1>Contacto</h1>
            </header>
            <ReturnHome />
            <section>
                <p>
                    Se libre de contactarme por éstos medios
                </p>
            </section>

            <section>
                <div className='cardContainer'>
                    <a href="https://www.linkedin.com/in/pablo-pulisich-438712160/" rel="norel" target="_blank">
                    <div className="card">
                        <h3>LinkedIn</h3>
                    </div>
                    </a>

                   
                    <a href="https://wa.me/5493517671598" rel="norel" target="_blank">
                    <div className="card">
                        <h3>WhatsApp</h3>
                    </div>
                    </a>

                </div>   

        </section >
    </div >
)

}


export default ContactDark