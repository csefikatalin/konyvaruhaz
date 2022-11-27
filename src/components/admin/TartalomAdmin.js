import "./TartalomAdmin.css";
import KonyvAdmin from "./KonyvAdmin.js";
import React, { useState } from "react";
import UjTermekUrlap from "./UjTermekUrlap";

function TartalomAdmin(props) {
    function torol(id) {
        props.torol(id);
    }
    function modosit(adat) {
        console.log("Módosít", adat);
    }
    function mentes(adat) {
        console.log("Új adat", adat);
        props.ujTermekMentes(adat)
    }

    return (
        <>
            <div className="ujtermek">
                <UjTermekUrlap mentes={mentes}  />
            </div>
            <div className="adatoklistazasa">
                <table>
                    <thead>
                        <tr className="fejlec">
                            <th>Szerző</th>
                            <th>Cím</th>
                            <th>Ár</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
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
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default TartalomAdmin;

//www.robinwieruch.de/react-fetching-data/
