import "./UjTermek.css";
import React, { useState } from "react";
function UjTermekUrlap(props) {
    const [szerzo, setSzerzo] = useState("");
    const [cim, setCim] = useState("");
    const [ar, setAr] = useState(0);
    const [adat, setAdat] = useState({ cim: "", szerzo: "", ar: 0 });
    function mentes() {
        console.log(adat);
        props.mentes(adat);
    }
    function adatValt(event) {
        let a = adat;
        a[event.target.id] = event.target.value;
        setAdat(a);
        setCim(a.cim);
        setAr(a.ar);
        setSzerzo(a.szerzo);
    }

    return (
        <>
            <form onSubmit={mentes}>
                <fieldset>
                    <label for="szerzo">Szerző</label>
                    <input
                        type="text"
                        id="szerzo"
                        value={szerzo}
                        onChange={adatValt}
                    />

                    <label for="cim">Cím</label>
                    <input
                        type="text"
                        id="cim"
                        value={cim}
                        onChange={adatValt}
                    />

                    <label for="ar">Ár</label>
                    <input
                        type="number"
                        id="ar"
                        value={ar}
                        onChange={adatValt}
                    />
                </fieldset>
                <input type="submit" value="Mentés" />
            </form>
        </>
    );
}

export default UjTermekUrlap;

//www.robinwieruch.de/react-fetching-data/
