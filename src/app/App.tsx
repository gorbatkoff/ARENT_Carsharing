import React from 'react'

import "./styles/index.scss"
import Button, {ButtonTheme} from "../shared/ui/Button/Button";

function App() {
    return (
        <div className="App">
            <Button theme={ButtonTheme.PRIMARY}>
                Hello world
            </Button>
        </div>
    )
}

export default App