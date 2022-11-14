import "./Tartalom.css";
import Konyv from "./Konyv.js";

const konyvek = [
    {
        szerzo: "Molnár Ferenc",
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
];
function Tartalom() {
    function megjelenit(adat, db) {
        console.log("A gyerekem üzeni:", adat, db, " db könyv van a kosárban!");
    }
    return (
        <React.Fragment>
            <div className="kosar">
                <h2>A kosár tartalma:</h2>
                <table className="table table-striped">
                    <tr>
                        <th>Szerző</th>
                        <th>cím</th>
                        <th>Ár</th>
                        <th>Db</th>
                    </tr>
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
        </React.Fragment>
    );
}

export default Tartalom;
