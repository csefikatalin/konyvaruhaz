import "./Admin.css";
import KonyvModel from "../model/konyvaruhazModell";
import { useState } from "react";
import { useEffect } from "react";
import KonyvAdmin from "../components/admin/KonyvAdmin.js";

import UjTermekUrlap from "../components/admin/UjTermekUrlap";

let vegpont =
    "https://my-json-server.typicode.com/csefikatalin/konyvaruhaz_szerver/adatok";
/*  let vegpont = "http://localhost:3001/adatok";  */

/* type KonyvTipus = {szerzo: String; cim: String; ar: integer}[] */
const token =
    "eyJpdiI6Ik5OUmJaYWJOenlkaFE4UWZCdUtacVE9PSIsInZhbHVlIjoiQVlTRWRnWFpuMkI5NjZoM2l4WFhTbHU2ZjhaZklXRzA3Vk51eUpBOHJ5YmZMYlhxMmQ5RHk4djRiL1N4VFdGN2JubDVsR2FSNzRTK3BERFU3bkEvdkErMlU2aHBQN3ZkdWdUcWJJWlQrRkYrNWgwRnZvSmRyWit2QWpJUWJiM20iLCJtYWMiOiJkMTk2ZmEzOTMwZDg5YWQzMDhiNDJjY2YyN2ZmOGYwOWRjOWIyZGYyOGMwYzRhNGY0N2E3MzVjOGQ1ZWM5ODc1IiwidGFnIjoiIn0=";

function Admin() {
    const konyvModel = new KonyvModel(token);
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
