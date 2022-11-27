import KonyvModel from "../../model/konyvaruhazModell";
import { useState } from "react";
import { useEffect } from "react";
import TartalomAdmin from "./TartalomAdmin";
let vegpont = "http://localhost:3002/adatok";
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
            {
                <TartalomAdmin
                    konyvek={konyvek}
                    torol={torol}
                    modosit={modosit}
                    ujTermekMentes={ujTermekMentes}
                />
            }
        </>
    );
}

export default Admin;
