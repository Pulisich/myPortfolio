import React from "react";
import { Link } from "react-router-dom";

function ReturnHome(){

    return(
       
           <Link to="/" className="return"> 
                <button className="returnButton"> Home </button>
            </Link>
        
    )
}

export default ReturnHome