import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    handleIncrement = (product) => {
        console.log(product)
        this.setState({ count: this.state.count + 1})
    }

    render() {
        return (
            <React.Fragment>
                <span className="badge bg-primary m-2">{this.state.count}</span>
                <button onClick={() => this.handleIncrement({ id: 1})} className="btn btn-secondary btn-sm">Increment</button>
            </React.Fragment>
        )
    }
}
 
export default Counter;