import "./Konyv.css";

function Konyv(props) {
    let db = 0;
    function kosarbaTesz(d) {
        db = d + 1;
        props.megjelenit(props.konyvAdat, db);
    }

    return (
        <div className="konyv">
            <h3>{props.konyvAdat.szerzo}</h3>
            <p>{props.konyvAdat.cim}</p>
            <p>Ár: {props.konyvAdat.ar} Ft </p>
            <span>
                <button onClick={() => kosarbaTesz(db)}>Kosárba</button>
            </span>
        </div>
    );
}

export default Konyv;
