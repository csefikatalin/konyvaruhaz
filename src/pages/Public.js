import "./Public.css";
import Konyv from "../components/public/Konyv.js";
import React, { useState } from "react";
import { useEffect } from "react";
import Kosar from "../components/public/Kosar";

import KosarModel from "../model/kosarModell";
import KonyvModel from "../model/konyvaruhazModell";
let vegpont = "https://my-json-server.typicode.com/csefikatalin/konyvaruhaz_szerver/adatok";

/* type KonyvTipus = {szerzo: String; cim: String; ar: integer}[] */

function Public() {
    const konyvModel = new KonyvModel();
    const [konyvek, setKonyvek] = useState([]);

    useEffect(() => {
        konyvModel.adatBe(vegpont, setKonyvek);
    }, []);

    const [kosaram, setKosaram] = useState([]);
    const [konyvDB, setKonyvDb] = useState(0);

    const [konyvOsszAr, setkonyvOsszAr] = useState(0);
    const kosarModel = new KosarModel(kosaram);

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
                <p>Összár: {konyvOsszAr} </p>
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Szerzők </th>
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
        </div>
    );
}

export default Public;
