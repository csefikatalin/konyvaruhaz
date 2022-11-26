import "./App.css";
import Tartalom from "./Tartalom.js";

import { useState } from "react";
import { useEffect } from "react";
let vegpont = "http://localhost:3002/adatok";
//type KonyvTipus = {szerzo: String; cim: String; ar: integer}[]
//let konyvek = [ ];
function App() {
    //const [konyvek, setKonyvek] = useState<KonyvTipus>([]);
    const [konyvek, setKonyvek] = useState([]);
    useEffect(() => {
        fetch(vegpont, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setKonyvek(data);
            })
            .catch((rejectionReason) => {
                console.log(
                    "Error parsing JSON from response:",
                    rejectionReason
                );
            });
    });
    return (
        <div className="App">
            <header className="App-header">Könyváruház</header>
            <article>{<Tartalom konyvek={konyvek}/>}</article>
            <footer> @Saját név </footer>
        </div>
    );
}

export default App;
