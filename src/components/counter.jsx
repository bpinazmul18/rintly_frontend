import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 10,
        imgUrl: "https://picsum.photos/200",
        tags: ['tag1', 'tag2', 'tag3', 'tag4']
    }

    styles = {
        fontSize: '20px'
    }

    render() {

        return (
            <React.Fragment>
                {/* <img src={this.state.imgUrl} alt="" /> */}
                {/* <span style={this.styles} className="badge bg-secondary m-2">{this.formateCount()}</span> */}
                {/* <span style={{ fontSize: '20px'}} className="badge bg-secondary m-2">{this.formateCount()}</span> */}
                {/* <span className="badge bg-warning">{this.formateCount()}</span> */}
                <span className={this.getBadgeClasses()}>{this.formateCount()}</span>
                <button className="btn btn-primary btn-sm">Increment</button>
                <ul>
                    {this.state.tags.map(tag => <li>{tag}</li> )}
                </ul>
            </React.Fragment>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2 bg-";
        return classes += this.state.count === 0 ? 'primary' : 'secondary';
    }

    formateCount () {
        const { count } = this.state
        return count === 0 ? 'Zero' : count
    }
}
 
export default Counter;