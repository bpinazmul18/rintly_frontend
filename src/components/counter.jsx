import React, { Component } from 'react';

class Counter extends Component {

    render() {
        const {onIncrement, onDecrement, onDelete, counter} = this.props

        return (
            <React.Fragment>
                <div className="m-2">
                    <button onClick={() => onDecrement(counter.id)} className="btn btn-secondary btn-sm"><i className="fa-solid fa-circle-minus"></i> Decrements</button>
                        <span className={this.getBadgeStyles()}>{this.counterSyles()}</span>
                    <button onClick={() => onIncrement(counter.id)} className="btn btn-secondary btn-sm"><i className="fa-solid fa-circle-plus"></i> Increment</button>
                    <button onClick={() => onDelete(counter.id)} className="btn btn-danger btn-sm mx-2">Delete</button>
                </div>
            </React.Fragment>
        )
    }

    getBadgeStyles = () => {
        return this.props.counter.value === 0 ? 'badge m-2 bg-warning' : 'badge m-2 bg-primary'
    }

    counterSyles = () => {
        const { value } = this.props.counter
        return value === 0 ? 'Zero' : value
    }
}
 
export default Counter;