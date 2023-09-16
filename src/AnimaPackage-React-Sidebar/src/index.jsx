import React from "react";
import ReactDOMClient from "react-dom/client";
import { SidebarScreen } from "./screens/SidebarScreen";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<SidebarScreen />);
