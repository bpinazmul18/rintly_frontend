import React, { Component } from 'react';
import Like from './common/like';
import TableBody from './common/table-body';
import TableHeader from './common/table-header';

class MovieTable extends Component {

    columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'liked', content: (movie) => <Like liked={movie?.liked} onLiked={() => this.props.onLiked(movie)}/>},
        {key: 'delete', content: (movie) => <button onClick={() => this.props.onHandleMovie(movie._id)} className="btn btn-danger btn-sm">Delete</button>},
    ]

    
    render() { 
        const {movies, onSort, sortColumn } = this.props

        return (
            <table className="table">
                <TableHeader columns={this.columns} onSort={onSort} sortColumn={sortColumn}/>
                <TableBody columns={this.columns} data={movies}/>
            </table>
        );
    }
}
 
export default MovieTable;