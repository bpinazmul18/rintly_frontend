import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 10
    }

    handleIncrement () {
        console.log('Increment clicked', this)
    }

    render() {
        return (
            <React.Fragment>
                <span className="badge bg-primary m-2">{this.state.count}</span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        )
    }
}
 
export default Counter;