import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Like from './common/like';
import Table from './common/table';
import auth from '../services/auth';

class MovieTable extends Component {

    columns = [
        {path: 'title', label: 'Title', content: (movie) => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'liked', content: (movie) => <Like liked={movie?.liked} onLiked={() => this.props.onLiked(movie)}/>}
    ]

    deleteColumn = {key: 'delete', content: (movie) => <button onClick={() => this.props.onHandleMovie(movie._id)} className="btn btn-danger btn px-5 py-3">Delete</button>}

    constructor () {
        super()
        
        const user = auth.getCurrentUser()

        if (user && user.isAdmin)
            this.columns.push(this.deleteColumn)
    }

    
    render() { 
        const {movies, onSort, sortColumn } = this.props

        return (
            <Table columns={this.columns} data={movies} onSort={onSort} sortColumn={sortColumn}/>
        );
    }
}
 
export default MovieTable;