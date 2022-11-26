import "./App.css";
import Tartalom from "./Tartalom.js";

import { useState } from "react";
import { useEffect } from "react";

//type KonyvTipus = {szerzo: String; cim: String; ar: integer}[]
//let konyvek = [ ];
function App() {
    //const [konyvek, setKonyvek] = useState<KonyvTipus>([]);

    return (
        <div className="App">
            <header className="App-header">Könyváruház</header>
            <article>{<Tartalom />}</article>
            <footer> @Saját név </footer>
        </div>
    );
}

export default App;
