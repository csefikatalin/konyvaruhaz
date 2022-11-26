import "./Konyv.css";

function Konyv(props) {
    let db = 0;
    function kosarbaTesz(d) {
        db = d + 1;
        props.megjelenit(props.konyvAdat, db);
    }
    function torol() {
        console.log("torol");
        props.torol(props.konyvAdat.id);
    }
    return (
        <div className="konyv">
            <h3>{props.konyvAdat.szerzo}</h3>
            <p>{props.konyvAdat.cim}</p>
            <span>Ár: {props.konyvAdat.ar} Ft </span>
            <button onClick={() => kosarbaTesz(db)}>Kosárba</button>
            <button onClick={() => torol()}>Tödfsröl</button>
        </div>
    );
}

export default Konyv;
