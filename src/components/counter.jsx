import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }

    handleIncrement = (product) => {
        console.log(product)
        this.setState({ count: this.state.count + 1})
    }

    handleDecrement= (product) => {
        console.log(product)
        this.setState({ count: this.state.count - 1})
    }

    render() {
        return (
            <React.Fragment>
                <div className="m-2">
                    <button onClick={() => this.handleDecrement({ id: 1})} className="btn btn-secondary btn-sm"><i className="fa-solid fa-circle-minus"></i></button>
                        <span className="badge bg-primary m-2">{this.state.count}</span>
                    <button onClick={() => this.handleIncrement({ id: 1})} className="btn btn-secondary btn-sm"><i className="fa-solid fa-circle-plus"></i></button>
                </div>
            </React.Fragment>
        )
    }
}
 
export default Counter;