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

                    <div className="card">
                        <h3>LinkedIn</h3>
                    </div>


                    <div className="card">
                        <h3>Gmail</h3>
                    </div>



                    <div className="card">
                        <h3>Discord</h3>
                    </div>


                    <div className="card">
                        <h3>WhatsApp</h3>
                    </div>


                </div>   

        </section >
    </div >
)

}


export default ContactDark