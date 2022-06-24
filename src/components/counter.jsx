import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 10,
        tags: ['tag1', 'tag2', 'tag3', 'tag4']
    }

    renderTags () {
        if (this.state.tags === 0) return <p>There is no tag!</p>

        return (
            <ul>
                {this.state.tags.map((tag, index) => <li key={index}>{tag}</li> )}
            </ul>
        )
    }

    render() {
        return (
            <React.Fragment>
                { this.renderTags() }
            </React.Fragment>
        )
    }
}
 
export default Counter;