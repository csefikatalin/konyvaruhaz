import "./Tartalom.css";
import Konyv from "./Konyv.js";
import React, { useState, useEffect } from "react";
const konyvek = [
    {
        szerzo: "Molnár Ferenccccc",
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
];
function Tartalom() {
    //A state jellemzi a programunk állapotát.
    // Sajnos csak szám, vagy szöveges típusú lehet.
    // inicializáljuk a state kezdő értékét, és megadjuk, hogy melyik függvénnyel tudjuk majd módosítani
    //Ha kétféle értéket is be akarunk állítani a state-ben, akkor
    //kétszer kell meghívni a useState() függvényt.
    const adat = {
        szerzo: "bu",
        cim: "",
        ar: 0,
        db: 0,
    };
    const [kosaram, setKosaram] = useState(adat);

    function megjelenit(adat, db) {
        console.log(adat, db, " db könyv van a kosárban!");
        setKosaram(adat) 
        console.log(kosaram.szerzo); //Erre nem ír ki semmit . De miért????
        console.log(adat);
    }
    return (
        <>
            <div className="kosar">
                <p>A kosár tartalma:</p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Szerző</th>
                            <th>Cím</th>
                            <th>Ár</th>
                            <th>Db</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{kosaram.szerzo}</td>
                            <td>{kosaram.cim}</td>
                            <td>{kosaram.ar}</td>
                            <td>{kosaram.db}</td>
                        </tr>
                        <tr>
                            <td>.</td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
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
