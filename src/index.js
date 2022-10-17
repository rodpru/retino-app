import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "styled-components";
import store from "./redux/store";
import { Provider } from "react-redux";

const theme = {
  colors: {
    blue_darker: "#03045E",
    blue_dark: "#0077B6",
    blue: "#00B4D8",
    blue_light: "#90E0EF",
    blue_lighter: "#CAF0F8",
    black: "#000000",
    white: "#fff",
    red: "#FF0000",
    overlay: "#023e8a",
    font_primary: "#7cb9e8",
    secondary: {
      whiteish: "#F8FBFD",
    },
  },
  fonts: ["Altform TRIAL", "sans-serif", "Roboto"],
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
