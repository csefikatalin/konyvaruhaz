import "./Tartalom.css";
import Konyv from "./Konyv.js";
import React, { useState } from "react";

import Kosar from "./Kosar";


function Tartalom(props) {
    //A state jellemzi a programunk állapotát.
    // inicializáljuk a state kezdő értékét, és megadjuk, hogy melyik függvénnyel tudjuk majd módosítani
    //Ha kétféle értéket is be akarunk állítani a state-ben, akkor
    //kétszer kell meghívni a useState() függvényt.

    const [kosaram, setKosaram] = useState([]);
    const [konyvDB, setKonyvDb] = useState(0);

    const [konyvOsszAr, setkonyvOsszAr] = useState(0);
    
   

    function megjelenit(adat, db) {
        kosaram.push(adat);
        setKosaram(kosaram);
        setkonyvOsszAr(konyvOsszAr + adat.ar);
        setKonyvDb(konyvDB + 1);
    }
    return (
        <>
            <div className="kosar">
                <p>A kosár tartalma:</p>
                <p>Darabbbb: {konyvDB * 2}</p>
                <p>Ősszár: {konyvOsszAr} </p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Szerzőkfdjékld </th>
                            <th>Cím</th>
                            <th>Ár</th>
                        </tr>
                    </thead>
                    <tbody>
                        {kosaram.map((elem, index) => {
                            return <Kosar kosar={elem} key={index} />;
                        })}
                    </tbody>
                </table>
            </div>
            <div className="tartalom">
                {props.konyvek.map((elem, index) => {
                    return (
                        <Konyv
                            konyvAdat={elem}
                            key={index}
                            megjelenit={megjelenit}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Tartalom;

//www.robinwieruch.de/react-fetching-data/
