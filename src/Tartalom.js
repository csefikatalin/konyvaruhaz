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
    {
        szerzo: "Robert Merle",
        cim: "Állati elmék",
        ar: 2420,
    },
];
function Tartalom() {
    function megjelenit(adat, db) {
        console.log("A gyerekem üzeni:", adat, db, " db könyv van a kosárban!");
    }
    return (
        <>
            <div className="kosar">
                <p>A kosár tartalma:</p>
                <table className="table table-striped">
                    
                    <thead>
                        <tr>
                            <th>Szerző</th>
                            <th>Cím</th>
                            <th>Ár</th>
                            <th>Db</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <tr>.</tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                        </tr>
                        <tr>
                            <tr>.</tr>
                            <tr></tr>
                            <tr></tr>
                            <tr></tr>
                        </tr>
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
        </>
    );
}

export default Tartalom;
