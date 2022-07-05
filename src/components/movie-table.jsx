import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from './common/like';
import Table from './common/table';

class MovieTable extends Component {

    columns = [
        {path: 'title', label: 'Title', content: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'liked', content: (movie) => <Like liked={movie?.liked} onLiked={() => this.props.onLiked(movie)}/>},
        {key: 'delete', content: (movie) => <button onClick={() => this.props.onHandleMovie(movie._id)} className="btn btn-danger btn-sm">Delete</button>},
    ]

    
    render() { 
        const {movies, onSort, sortColumn } = this.props

        return (
            <Table columns={this.columns} data={movies} onSort={onSort} sortColumn={sortColumn}/>
        );
    }
}
 
export default MovieTable;