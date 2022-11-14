import "./Konyv.css"

function Konyv(props) {
    return (
        <div className="konyv">         
                <h3>{props.konyvAdat.szerzo}</h3>
                <p>{props.konyvAdat.cim}</p>
                <span>Ár: {props.konyvAdat.ar} Ft  </span>
                <button>Kosárba</button>          
        </div>
    );
}

export default Konyv;