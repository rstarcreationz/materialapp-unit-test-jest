import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StepFive from "./Components/StepFive";
import StepSix from "./Components/StepSIx";
import { FreePage } from "./Components/FreePage";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <ThemeProvider theme={darkTheme}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StepFive />}></Route>
            <Route path="/step-six" element={<StepSix />}></Route>
            <Route path="/free" element={<FreePage />}></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
