import React from 'react';
import { render } from "react-dom";
import './MainStyle.css';


class App extends React.Component {

    render() {
        return(
            <div>
               Start here
            </div>
        )
    }
}

render(<App />, document.getElementById("root"));
