import "./Tartalom.css";
import Konyv from "./Konyv.js";
import React, { useState, useEffect } from "react";
import Kosar from "./Kosar";
const konyvek = [
    {
        szerzo: "Molnár Ferenc",
        cim: "A Pál utcai fiúk",
        ar: 1220,
    },
    {
        szerzo: "Gárdonyi Géza",
        cim: "Egri csillagok",
        ar: 1320,
    },
    {
        szerzo: "Robert Merle",
        cim: "Védett férfiak",
        ar: 1420,
    },
    {
        szerzo: "Robert Merle",
        cim: "Állati elmék",
        ar: 2420,
    },
    {
        szerzo: "Robert Merle",
        cim: "Malevil",
        ar: 3420,
    },
];
function Tartalom() {
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
                <p>A kosárban {konyvDB} db könyv van</p>
                <p>A kosárban lévő könyvek összértéke: {konyvOsszAr} </p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Szerző</th>
                            <th>Cím</th>
                            <th>Ár</th>
                           
                        </tr>
                    </thead>
                    <tbody>
                        {kosaram.map((elem, index) => {
                            return (
                                <Kosar
                                    kosar={elem}
                                    key={index}
                                 
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <div className="tartalom">
                {konyvek.map((elem, index) => {
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
