import "./Tartalom.css";
import Konyv from "./Konyv.js";
import React, { useState } from "react";

import Kosar from "./Kosar";
import KosarModel from "./model/kosarModell";

function Tartalom(props) {
    //A state jellemzi a programunk állapotát.
    // inicializáljuk a state kezdő értékét, és megadjuk, hogy melyik függvénnyel tudjuk majd módosítani
    //Ha kétféle értéket is be akarunk állítani a state-ben, akkor
    //kétszer kell meghívni a useState() függvényt.

    const [kosaram, setKosaram] = useState([]);
    const [konyvDB, setKonyvDb] = useState(0);

    const [konyvOsszAr, setkonyvOsszAr] = useState(0);
    const kosarModel = new KosarModel(kosaram);
    function torol(id) {
        props.torol(id);
    }
    function frissit() {
        setKosaram(kosarModel.getKosar());
        setkonyvOsszAr(kosarModel.getOsszAr());
        setKonyvDb(kosarModel.getOsszDb());
    }
    function kosarTorol(adat) {
        kosarModel.kosarbolTorol(adat);
        frissit();
    }

    function dbCsokkent(adat) {
        kosarModel.dbCsokkent(adat);
        frissit();
    }
    function dbNovel(adat) {
        kosarModel.dbNovel(adat);
        frissit();
    }
    function megjelenit(adat, db) {
        kosarModel.kosarba(adat);
        frissit();
    }
    return (
        <div className="apptartalom">
            <div className="kosar">
                <p>A kosár tartalma:</p>
                <p>Darab: {konyvDB}</p>
                <p>Ősszár: {konyvOsszAr} </p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Szerzőkfdjékld </th>
                            <th>Cím</th>
                            <th>Ár</th>
                            <th>Db</th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {kosaram.map((elem, index) => {
                            return (
                                <Kosar
                                    kosar={elem}
                                    dbCsokkent={dbCsokkent}
                                    dbNovel={dbNovel}
                                    kosarTorol={kosarTorol}
                                    key={index}
                                />
                            );
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
        </div>
    );
}

export default Tartalom;

//www.robinwieruch.de/react-fetching-data/
