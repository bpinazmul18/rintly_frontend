import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 10,
        tags: ['tag1', 'tag2', 'tag3', 'tag4']
    }

    render() {
        return (
            <React.Fragment>
                <ul>
                    {this.state.tags.map(tag => <li>{tag}</li> )}
                </ul>
            </React.Fragment>
        )
    }
}
 
export default Counter;