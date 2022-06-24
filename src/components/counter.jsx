import React, { Component } from 'react';

class Counter extends Component {
    render() {
        return (
            <React.Fragment>
                <h1 className="display-3">Hello World</h1>
                <button className="btn btn-primary">Increment</button>
            </React.Fragment>
        )
    }
}
 
export default Counter;