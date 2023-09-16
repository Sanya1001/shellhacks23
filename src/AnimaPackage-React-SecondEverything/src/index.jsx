import React from "react";
import ReactDOMClient from "react-dom/client";
import { Slide } from "./screens/Slide";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<Slide />);
