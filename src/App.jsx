import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RootLayout from "./rootRouter/RootLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
