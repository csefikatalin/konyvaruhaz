import Tartalom from "./Tartalom";
import KonyvModel from "../../model/konyvaruhazModell";
import { useState } from "react";
import { useEffect } from "react";
let vegpont = "http://localhost:3002/adatok";
/* type KonyvTipus = {szerzo: String; cim: String; ar: integer}[] */

function Public() {
    const konyvModel = new KonyvModel();
    const [konyvek, setKonyvek] = useState([]);

    useEffect(() => {
        konyvModel.adatBe(vegpont, setKonyvek);
    }, []);

    return <>{<Tartalom konyvek={konyvek} />}</>;
}

export default Public;
