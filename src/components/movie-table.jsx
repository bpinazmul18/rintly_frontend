import React, { Component } from 'react';
import Like from './common/like';

class MovieTable extends Component {
    render() { 
        const {movies, onLiked, onHandleMovie } = this.props
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        movies && movies.map(movie => (
                            <tr key={movie._id}>
                                <th scope="row">{movie._id}</th>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <Like liked={movie?.liked} onLiked={() => onLiked(movie)}/>
                                </td>
                                <td>
                                    <button onClick={() => onHandleMovie(movie._id)} className="btn btn-danger btn-sm">Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}
 
export default MovieTable;