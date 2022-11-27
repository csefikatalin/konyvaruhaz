import React, { useState } from "react";
import "./KonyvAdmin.css";
function KonyvAdmin(props) {
    const [szerzo, setSzerzo] = useState(props.konyvAdat.szerzo);
    const [cim, setCim] = useState(props.konyvAdat.cim);
    const [ar, setAr] = useState(props.konyvAdat.ar);
    const [adat, setAdat] = useState({
        cim: cim,
        szerzo: szerzo,
        ar: ar,
        id: props.konyvAdat.id,
    });
    function adatValt(event) {
        let a = adat;
        console.log(a);
        console.log(event.target.id);
        console.log(event.target.value);
        a[event.target.id] = event.target.value;
        setAdat(a);
        setCim(a.cim);
        setAr(a.ar);
        setSzerzo(a.szerzo);
    }
    function modosit() {
        console.log(adat);
        props.modosit(adat);
    }
    function torol() {
        console.log("torol");
        props.torol(props.konyvAdat.id);
    }
    function szerkeszt(event) {
        //event.target.classList.remove("elrejt");
        //document.getElementsByClassName("szerkeszt")[0].classList.add("elrejt");
    }
    return (
        <tr className="konyv">
            <td>
                {szerzo}
                <div>
                    <input
                        className=" elrejt"
                        type="text"
                        id="szerzo"
                        value={szerzo}
                        onChange={adatValt}
                    />
                </div>
            </td>
            <td>
                {cim}
                <div>
                    <input
                        className=" elrejt"
                        type="text"
                        id="cim"
                        value={cim}
                        onChange={adatValt}
                    />
                </div>
            </td>
            <td>
                {ar} Ft
                <div>
                    <input
                        className=" elrejt"
                        type="Number"
                        id="ar"
                        value={ar}
                        onChange={adatValt}
                    />{" "}
                </div>
            </td>
            <td>
                <button className="szerkeszt" onClick={() => szerkeszt()}>
                    Szerkeszt
                </button>
                <button className="modosit elrejt" onClick={() => modosit()}>
                    Módosít
                </button>
                <button className="torol" onClick={() => torol()}>
                    Töröl
                </button>
            </td>
        </tr>
    );
}

export default KonyvAdmin;
