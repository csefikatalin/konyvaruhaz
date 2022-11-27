import "./App.css";
import Public from "./components/public/Public";

import { useState } from "react";
import { useEffect } from "react";
import Admin from "./components/admin/Admin";


function App() {
    const [felulet, setFelulet] = useState("public");
    const [tartalom, setTartalom] = useState(<Public />);

    

    function webaruhaz() {
        setFelulet("public");
        setTartalom(<Public />);
    }
    function admin() {
        setFelulet("admin");
        setTartalom(<Admin />);
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
