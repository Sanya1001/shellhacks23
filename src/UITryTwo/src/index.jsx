import React from "react";
import ReactDOMClient from "react-dom/client";
import { MainUi } from "./screens/MainUi";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<MainUi />);
