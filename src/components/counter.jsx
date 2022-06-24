import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 10
    }

    render() {
        return (
            <React.Fragment>
                <span>{this.formateCount()}</span>
                <button className="btn btn-primary">Increment</button>
            </React.Fragment>
        )
    }

    formateCount () {
        const { count } = this.state

        return count === 0 ? 'Zero' : count
    }
}
 
export default Counter;