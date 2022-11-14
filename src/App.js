import "./App.css";
import Tartalom from "./Tartalom.js";
function App() {
    return (
        <div className="App">
            <header className="App-header">Könyváruház</header>
            <article>
                <h2>Könyváruház</h2>
                <Tartalom />
            </article>
            <footer> @Saját név </footer>
        </div>
    );
}

export default App;
