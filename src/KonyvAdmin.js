function KonyvAdmin(props) {
    function modosit() {
        props.modosit(props.konyvAdat);
    }
    function torol() {
        console.log("torol");
        props.torol(props.konyvAdat.id);
    }
    return (
        <tr className="konyv">
            <td>{props.konyvAdat.szerzo}</td>
            <td>{props.konyvAdat.cim}</td>
            <td>Ár: {props.konyvAdat.ar} Ft </td>
            <td>
                <button onClick={() => modosit()}>Módosít</button>
                <button onClick={() => torol()}>Töröl</button>
            </td>
        </tr>
    );
}

export default KonyvAdmin;
