import React from "react";

const Temp =(props)=>{
    return (
        <>
        <div className="inner-container">
                <div className="creadits">
                <h3>Creadits</h3>
                <input type="text" name={`cred${props.sem}`} id="creadit" />
                </div>

                <div className="sem-name">
                    <h3>semester - {props.sem}</h3>
                </div>

                <div className="sgpa">
                <h3>SGPA</h3>
                <input type="text" name={`sgpa${props.sem}`} id="sgpa" />
                </div>

            </div>
        </>
    )
};
export default Temp;