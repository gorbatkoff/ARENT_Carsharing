import React from "react";
import { Route, Routes } from "react-router-dom";
import { MainPage } from "pages/MainPage";
import { Header } from "widgets/Header";
import { Footer } from "widgets/Footer";
import { NavigationBar } from "widgets/NavigationBar/ui/NavigationBar";

function App() {
  return (
    <div className="App">
      <Header />
      <NavigationBar />

      <Routes>
        <Route path={"/"} element={<MainPage />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
