import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from 'react-router-dom';
import {ThemeProvider, createTheme} from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {main: "#a65f00"},
        secondary: { main: "#9c27b0" },
    },
    shape: {
        borderRadius: 10,
    },
    typography: {
        fontFamily: "Inter, system-ui, Arial, sans-serif",
    },
});

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <App/>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);