import React, { Component } from 'react';

class Like extends Component {
    render() {
        const {liked, onLiked} = this.props
        return <i onClick={onLiked} className={`fa-${liked ? 'solid' : 'regular'} fa-heart`} style={{ cursor: 'pointer'}}></i>
    }
}
 
export default Like;