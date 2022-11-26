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
            <p>Ár: {props.konyvAdat.ar} Ft </p>
            <span>
                <button onClick={() => kosarbaTesz(db)}>Kosárba</button>
                <button onClick={() => torol()}>Töröl</button>
            </span>
        </div>
    );
}

export default Konyv;
