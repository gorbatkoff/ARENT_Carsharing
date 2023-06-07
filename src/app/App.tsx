import React from "react";
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {Header} from "widgets/Header";
import {Footer} from "widgets/Footer";
import {Navbar} from "widgets/Navbar";
import {NotFoundPage} from "pages/NotFoundPage";

function App() {
    return (
        <div className="App">
            <Header/>
            <Navbar/>

            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
                <Route path={"*"} element={<NotFoundPage/>}/>
            </Routes>

            <Footer/>
        </div>
    );
}

export default App;
