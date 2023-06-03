import React from 'react'
<<<<<<< HEAD
import Button, {ButtonTheme} from "shared/ui/Button/Button";
import TileLink from 'shared/ui/TileLink/TileLink';
function App() {
    return (
        <div className="App">
            {/* <Button theme={ButtonTheme.PRIMARY}>
                Hello world
            </Button> */}
            <TileLink width={"450px"} height={"450px"} url='https://github.com/gorbatkoff/production-project'>
                Грузовики
            </TileLink>
=======
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
>>>>>>> 5f9d4b018350882ef5204bd44eb79fe7c73ba34b
        </div>
    )
}

export default App