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

     onHandleIncrement = (id) => {
         const newCounters = this.state.counters.map((c) => {
             if (c.id === id) c.value++
             return c
         })

         this.setState({ counters: newCounters})

    }

    onHandleDecrement= (product) => {
        this.setState({ count: this.state.count - 1})
    }

    render() { 

        return (
            <div>
                {
                    this.state.counters.map(c => <Counter key={c.id} counter={c} handleIncrement={this.onHandleIncrement}/>)
                }
            </div>
        );
    }
}
 
export default Counters;