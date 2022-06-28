import React, { Component } from 'react';
import Counter from './counter'

class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 3},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
        ]
     }

     handleIncrement = (id) => {
         const newCounters = this.state.counters.map((c) => {
             if (c.id === id) c.value++
             return c
         })

         this.setState({ counters: newCounters})
    }

    handleDecrement= (id) => {
        const newCounters = this.state.counters.map((c) => {
            if (c.id === id) c.value--
            return c
        })

        this.setState({ counters: newCounters})
    }

    handleDelete = (id) => {
        const newCounters = this.state.counters.filter((c) => c.id !== id)
        this.setState({ counters: newCounters })
    }

    handleReset = () => {
        const newCounters = this.state.counters.map(c => {
            c.value = 0
            return c
        })

        this.setState({ counters: newCounters })
    }

    render() { 

        return (
            <div>
                <button onClick={this.handleReset} className='btn btn-primary btn-sm m-2'>Reset</button>
                {
                    this.state.counters.map(c => <Counter key={c.id} counter={c} onIncrement={this.handleIncrement} onDecrement={this.handleDecrement} onDelete={this.handleDelete}/>)
                }
            </div>
        );
    }
}
 
export default Counters;