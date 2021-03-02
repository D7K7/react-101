import React, { Component } from 'react';
import './App.css';
import Greet from './Components/Greet'

import SquareWithFormatting from './squareWithFormatting.jsx';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            internalState: false
        };

        // This binding is necessary to make `this` work in the callback
        this.onMenuItemClicked = this.onMenuItemClicked.bind(this);
    }

    onMenuItemClicked(e) {
        e.preventDefault();
        this.setState({ internalState: !this.state.internalState });
    }

    render() {
        return (
            <div>
                
                <br />

                <div className="App">
                    <Greet />
                    <div>
                    <div><h1>Click to change div</h1></div>
                    <br />
                    <button
                        className="btn btn-primary"
                        onClick={this.onMenuItemClicked}
                    >
                        <h1>Click</h1>
                    </button>
                </div>
                    <Grid internalState={this.state.internalState} />
                </div>
            </div>
        );
    }
}

function Grid({ internalState }) {
    return (
        <div>
            <h2><SquareWithFormatting internalState={internalState} /></h2>
        </div>
    );
}

export default App;
