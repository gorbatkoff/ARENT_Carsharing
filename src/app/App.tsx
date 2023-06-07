import React, {Suspense} from "react";
import {Route, Routes} from "react-router-dom";

import {MainPage} from "pages/MainPage";
import {SearchPage} from "pages/SearchPage";
import {NotFoundPage} from "pages/NotFoundPage";

import {Header} from "widgets/Header";
import {Footer} from "widgets/Footer";
import {Navbar} from "widgets/Navbar";

function App() {
    return (
        <div className="App">
            <Suspense fallback={""}>

                <Header/>
                <Navbar/>

                <Routes>
                    <Route path={"/"} element={<MainPage/>}/>
                    <Route path={"/search"} element={<SearchPage/>}/>
                    <Route path={"*"} element={<NotFoundPage/>}/>
                </Routes>

                <Footer/>
            </Suspense>
        </div>
    );
}

export default App;
