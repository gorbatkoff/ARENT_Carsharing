import React from 'react'
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
        </div>
    )
}

export default App