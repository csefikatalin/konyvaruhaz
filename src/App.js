import "./App.css";
import { useState } from "react";
import Public from "./pages/Public";
import Admin from "./pages/Admin";
import Layout from "./pages/Layout";
import NoPage from "./pages/NoPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">Könyváruház</header>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Public />} />
                        <Route path="admin" element={<Admin />} />
                        <Route path="*" element={<NoPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
            <footer> @Saját név </footer>
        </div>
    );
}

export default App;
