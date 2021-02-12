import React from "react";
import { BrowserRouter, Route, Routes, Navigate, NavLink } from "react-router-dom";
import { TexturesPage } from "./pages/Textures";
import { ShapesPage } from "./pages/Shapes";
import { LightsPage } from "./pages/Lights";
import { OffscreenPage } from "./pages/Offscreen";

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <nav className="menu">
                <ul className="menu_items">
                    <li className="menu_item">
                        <NavLink to="/shapes" activeClassName="active">
                            💗 &nbsp;2D Shapes
                        </NavLink>
                    </li>
                    <li className="menu_item">
                        <NavLink to="/textures" activeClassName="active">
                            🧱 &nbsp;Textures
                        </NavLink>
                    </li>
                    <li className="menu_item">
                        <NavLink to="/lights" activeClassName="active">
                            🔆 &nbsp;Lights &amp; Shadows
                        </NavLink>
                    </li>
                    <li className="menu_item">
                        <NavLink to="/offscreen" activeClassName="active">
                            📺 &nbsp;OffScreen
                        </NavLink>
                    </li>
                    <li style={{ color: "gray" }}>&nbsp;&nbsp;/&nbsp;</li>
                    <li className="menu_item">
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
                    <ShapesPage />
                </Route>
                <Route path="/textures">
                    <TexturesPage />
                </Route>
                <Route path="/lights">
                    <LightsPage />
                </Route>
                <Route path="/offscreen">
                    <OffscreenPage />
                </Route>
                <Route path="/">
                    <Navigate to="/shapes" replace />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export { App };
