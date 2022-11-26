import "./App.css";
import Tartalom from "./Tartalom.js";
import KonyvModel from "./model/konyvaruhazModell";
import { useState } from "react";
import { useEffect } from "react";
let vegpont = "http://localhost:3002/adatok";
//type KonyvTipus = {szerzo: String; cim: String; ar: integer}[]
//let konyvek = [ ];

function App() {
    const konyvModel = new KonyvModel();
    //const [konyvek, setKonyvek] = useState<KonyvTipus>([]);
    const [konyvek, setKonyvek] = useState([]);
    useEffect(() => {
        konyvModel.adatBe(vegpont, setKonyvek);
    });
    return (
        <div className="App">
            <header className="App-header">Könyváruház</header>
            <article>{<Tartalom konyvek={konyvek} />}</article>
            <footer> @Saját név </footer>
        </div>
    );
}

export default App;
