import React, { Component } from 'react';

class MovieTable extends Component {
    render() { 
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Title</th>
                    <th scope="col">Genre name</th>
                    <th scope="col">Number in stock</th>
                    <th scope="col">Daily rental rate</th>
                    <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.movies && this.props.movies.map(movie => (
                            <tr key={movie._id}>
                                <th scope="row">{movie._id}</th>
                                <td>{movie.title}</td>
                                <td>{movie.genre.name}</td>
                                <td>{movie.numberInStock}</td>
                                <td>{movie.dailyRentalRate}</td>
                                <td>
                                    <button onClick={() => this.props.handleMovie(movie._id)} className="btn btn-danger btn-sm">Delete</button>
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