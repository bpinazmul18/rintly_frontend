import React, { Component } from 'react';
import { toast } from 'react-toastify';
import MovieTable from './movie-table';
import { fetchMovies } from '../services/api';

class Movies extends Component {
    state = { 
        movies: []
     }

     onHandleMovie = (id) => {
         const movies = this.state.movies.filter((movie) => movie._id !== id)
         this.setState({ movies: movies })

         toast.success('😎 Successfully Delete!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
     }

     async componentDidMount () {
         const res = await fetchMovies()
         this.setState({ movies: res.data})
     }
    render() {
        return (
            <div className="container movies-page py-5">
                <p className='lead'>You have {this.state.movies.length} movies</p>
                {
                    this.state.movies.length > 0 && (
                        <MovieTable handleMovie={this.onHandleMovie} movies={this.state.movies}/>
                    )
                }
            </div>
        );
    }
}
 
export default Movies;