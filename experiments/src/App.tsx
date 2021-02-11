import React from "react";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom";
import { CubePage } from "./pages/Cube";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <nav className="menu">
                <ul className="menu_items">
                    <li className="menu_item">
                        <Link to="/">👋 Hello</Link>
                    </li>
                    <li className="menu_item">
                        <Link to="/shapes">💗 2D Shapes</Link>
                    </li>
                    <li className="menu_item">
                        <Link to="/textures">🧱 Textures</Link>
                    </li>
                    <li className="menu_item">
                        <Link to="/lights">🔆 Lights &amp; Shadows</Link>
                    </li>
                    <li className="menu_item" style={{ color: "grey" }}>
                        <a
                            href="https://github.com/cedeber/kreemo"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🧑‍💻 GitHub
                        </a>
                    </li>
                </ul>
            </nav>
            <Routes>
                <Route path="/shapes">
                    <p>Hello, Shapes</p>
                </Route>
                <Route path="/textures">
                    <p>Hello, Textures</p>
                </Route>
                <Route path="/lights">
                    <p>Hello, Lights</p>
                </Route>
                <Route path="/">
                    <CubePage />
                    {/* <Navigate to="/shapes" replace /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export { App };
