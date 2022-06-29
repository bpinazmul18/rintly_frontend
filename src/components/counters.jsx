import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    render() { 
        const {counters, onIncrement, onDecrement, onDelete, onReset} = this.props

        return (
            <div>
                <button onClick={onReset} className='btn btn-primary btn-sm m-2'>Reset</button>
                {
                    counters && counters.map(c => <Counter key={c.id} counter={c} onIncrement={onIncrement} onDecrement={onDecrement} onDelete={onDelete}/>)
                }
            </div>
        );
    }
}
 
export default Counters;