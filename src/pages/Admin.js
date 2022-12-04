import "./Admin.css";
import KonyvModel from "../model/konyvaruhazModell";
import { useState } from "react";
import { useEffect } from "react";
import KonyvAdmin from "../components/admin/KonyvAdmin.js";

import UjTermekUrlap from "../components/admin/UjTermekUrlap";

let vegpont = "http://localhost:3001/adatok";
/* type KonyvTipus = {szerzo: String; cim: String; ar: integer}[] */

function Admin() {
    const konyvModel = new KonyvModel();
    const [konyvek, setKonyvek] = useState([]);

    useEffect(() => {
        konyvModel.adatBe(vegpont, setKonyvek);
    }, []);

    function torol(id) {
        konyvModel.adatTorol(vegpont, id);
        konyvModel.adatBe(vegpont, setKonyvek);
    }
    function modosit(adat) {
        konyvModel.adatModosit(vegpont, adat);
        console.log("módosít", adat);
    }
    function ujTermekMentes(adat) {
        konyvModel.adatUj(vegpont, adat, setKonyvek);
        konyvModel.adatBe(vegpont, setKonyvek);
    }

    return (
        <>
            <div className="ujtermek">
                <UjTermekUrlap mentes={ujTermekMentes} />
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
                        {konyvek.map((elem, index) => {
                            return (
                                <KonyvAdmin
                                    konyvAdat={elem}
                                    key={index}
                                    modosit={modosit}
                                    torol={torol}
                                    ujTermekMentes={ujTermekMentes}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Admin;
