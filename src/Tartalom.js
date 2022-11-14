import "./Tartalom.css";
import Konyv from "./Konyv.js";

const konyvek = [
    {
        szerzo: "Molnár Ferenc",
        cim: "A Pál utcai fiúk",
        ar:1220
    },
    {
        szerzo: "Gárdonyi Géza",
        cim: "Egri csillagok",
        ar:1320
    },
    {
        szerzo: "Robert Merle",
        cim: "Védett férfiak",
        ar:1420
    },
];
function Tartalom() {
    return (
        <div className="tartalom">
        { //kapcsos zárójel a JS kód miatt
        //a map utasítás végigiterál a tömbön, és egy konkrét könyvvel tér vissza
            konyvek.map((elem, index) => {
                //konyvAdat={elem}  - itt adjuk át minden Konyv komponensnek az adatát
            return ( <Konyv konyvAdat={elem} key={index} />)
        }
        )}
           
        </div>
    );
}

export default Tartalom;
