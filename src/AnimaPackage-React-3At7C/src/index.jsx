import React from "react";
import ReactDOMClient from "react-dom/client";
import { Frame } from "./screens/Frame";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Frame />);
