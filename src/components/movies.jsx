import React, { Component } from 'react';
import MovieTable from './movie-table';
import { fetchMovies } from '../services/api';

class Movies extends Component {
    state = { 
        movies: []
     }

     async componentDidMount () {
         const res = await fetchMovies()
         this.setState({ movies: res.data})
     }
    render() {
        return (
            <div className="container movies-page">
                <p className='lead'>You have {this.state.movies.length} movies</p>
                <MovieTable movies={this.state.movies}/>
            </div>
        );
    }
}
 
export default Movies;