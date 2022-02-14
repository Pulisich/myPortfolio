import React from "react";
import { Link } from "react-router-dom";

function ReturnProjects(){

    return(
        <div className="return">
           <Link to="/proyects"> 
                <button className="returnButton"> Atrás </button>
            </Link>
        </div>
    )
}

export default ReturnProjects