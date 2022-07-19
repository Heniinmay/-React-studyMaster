import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { darkTheme, lightTheme } from "./theme";

ReactDOM.render(
  <>
    {/* npm i --save-dev @types/myPackage */}
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </>,
  document.getElementById("root")
);
