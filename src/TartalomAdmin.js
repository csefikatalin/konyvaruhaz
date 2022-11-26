import "./TartalomAdmin.css";
import KonyvAdmin from "./KonyvAdmin.js";
import React, { useState } from "react";

function TartalomAdmin(props) {
    function torol(id) {
        props.torol(id);
    }
    function modosit(id) {
        console.log("Módosít");
    }

    return (
        <>
        <div className="szures">

        </div>
        <div className="adatoklistazasa">
            <table>
                <tr className="fejlec">
                    <th>Szerző</th>
                    <th>Cím</th>
                    <th>Ár</th>
                    <th></th>
                </tr>
                {props.konyvek.map((elem, index) => {
                    return (
                        <KonyvAdmin
                            konyvAdat={elem}
                            key={index}
                            modosit={modosit}
                            torol={torol}
                        />
                    );
                })}
            </table>
            </div>
        </>
    );
}

export default TartalomAdmin;

//www.robinwieruch.de/react-fetching-data/
