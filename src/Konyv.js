import "./Konyv.css";

function Konyv(props) {
    let db = 0;
    function kosarbaTesz(d) {
        console.log(props);
        db = d+1;
        console.log(db + " könyv van a kosárban");
        props.megjelenit(props.konyvAdat, db)
    }
    return (
        <div className="konyv">
            <h3>{props.konyvAdat.szerzo}</h3>
            <p>{props.konyvAdat.cim}</p>
            <span>Ár: {props.konyvAdat.ar} Ft </span>
            <button onClick={() => kosarbaTesz(db)}>Kosárba</button>
        </div>
    );
}

export default Konyv;
