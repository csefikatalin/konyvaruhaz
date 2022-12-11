function Kosar(props) {
    function kosarTorol() {
        props.kosarTorol(props.kosar);
    }
    function dbCsokkent() {
        props.dbCsokkent(props.kosar);
    }
    function dbNovel() {
        props.dbNovel(props.kosar);
    }
    return (
        <tr>
            <td>{props.kosar.szerzo}</td>
            <td>{props.kosar.cim}</td>
            <td>{props.kosar.ar}</td>
            <td>{props.kosar.db}</td>
            <td>
                <button onClick={() => dbNovel()}>+</button>
            </td>
            <td>
                <button onClick={() => dbCsokkent()}>-</button>
            </td>
            <td>
                <button onClick={() => kosarTorol()}>X</button>
            </td>
        </tr>
    );
}
export default Kosar;
