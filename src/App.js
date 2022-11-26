import "./App.css";
import Tartalom from "./Tartalom.js";
import KonyvModel from "./model/konyvaruhazModell";
import { useState } from "react";
import { useEffect } from "react";
import TartalomAdmin from "./TartalomAdmin";
let vegpont = "http://localhost:3002/adatok";
//type KonyvTipus = {szerzo: String; cim: String; ar: integer}[]
//let konyvek = [ ];

function App() {
    const konyvModel = new KonyvModel();
    const [konyvek, setKonyvek] = useState([]);
    let tart = <Tartalom konyvek={konyvek} torol={torol} />;
    const [tartalom, setTartalom] = useState(null);

    useEffect(() => {
        konyvModel.adatBe(vegpont, setKonyvek);
    });
    function torol(id) {
        console.log(id);
        konyvModel.adatTorol(vegpont, id);
        konyvModel.adatBe(vegpont, setKonyvek);
    }
    function modosit(id) {
        console.log("módosít", id);
    }

    function webaruhaz() {
        console.log("publikus");
        let tart = <Tartalom konyvek={konyvek} />;
        setTartalom(tart);
    }
    function admin() {
        console.log("admin");
        let tart = (
            <TartalomAdmin konyvek={konyvek} torol={torol} modosit={modosit} />
        );
        setTartalom(tart);
    }
    return (
        <div className="App">
            <header className="App-header">Könyváruház</header>
            <nav>
                <button onClick={() => webaruhaz()}>Webáruház </button>
                <button onClick={() => admin()}>Admin</button>
            </nav>
            <article>{tartalom}</article>
            <footer> @Saját név </footer>
        </div>
    );
}

export default App;
