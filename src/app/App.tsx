import React from 'react'
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import {Header} from "widgets/Header";


function App() {
    return (
        <div className="App">
            <Header/>
           
            <Routes>
                <Route path={"/"} element={<MainPage/>}/>
            </Routes>
        </div>
    )
}

export default App