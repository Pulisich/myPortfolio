import React from "react";
import { Link } from "react-router-dom";

function ReturnHome(){

    return(
        <div className="return">
           <Link to="/"> 
                <button className="returnButton"> Home </button>
            </Link>
        </div>
    )
}

export default ReturnHome