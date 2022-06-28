import React, { Component } from 'react';
import { toast } from 'react-toastify';
import MovieTable from './movie-table';
import { fetchMovies } from '../services/api';

class Movies extends Component {
    state = { 
        movies: []
     }

     handleMovie = (id) => {
         const movies = this.state.movies.filter((movie) => movie._id !== id)
         this.setState({ movies })

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

     handleLiked = (movie) => {
         const movies = [...this.state.movies]
         const index = movies.indexOf(movie)
         
         movies[index] = {...movies[index]}
         movies[index].liked = !movies[index].liked

         this.setState({ movies })
     }

     async componentDidMount () {
         const res = await fetchMovies()
         this.setState({ movies: res.data})
     }
    render() {

        return (
            <div className="container movies-page py-5">
                {
                    this.state.movies.length === 0 ? <p className='lead'>There are no movies.</p> : (
                        <React.Fragment>
                            <p className='lead'>Showing {this.state.movies.length} movies in the database.</p>
                            <MovieTable onHandleMovie={this.handleMovie} movies={this.state.movies} onLiked={this.handleLiked}/>
                        </React.Fragment>
                    )
                }
            </div>
        );
    }
}
 
export default Movies;