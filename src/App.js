import "./App.css";
import { useState } from "react";
import Public from "./components/public/Public";
import Admin from "./components/admin/Admin";

function App() {
    const [tartalom, setTartalom] = useState(<Admin />);

    function webaruhaz() {
        setTartalom(<Public />);
    }
    function admin() {
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
