import React, { Component } from 'react';
import Like from './common/like';
import TableHeader from './common/table-header';

class MovieTable extends Component {

    columns = [
        {path: 'title', label: 'Title'},
        {path: 'genre.name', label: 'Genre'},
        {path: 'numberInStock', label: 'Stock'},
        {path: 'dailyRentalRate', label: 'Rate'},
        {key: 'liked'},
        {key: 'delete'},
    ]

    
    render() { 
        const {movies, onLiked, onHandleMovie, onSort, sortColumn } = this.props

        return (
            <table className="table">
                <TableHeader columns={this.columns} onSort={onSort} sortColumn={sortColumn}/>
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