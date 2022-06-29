import React, { Component } from 'react';
import { toast } from 'react-toastify';
import MovieTable from './movie-table';
import { fetchMovies } from '../services/api';
import Pagination from './common/pagination';
import { pagination } from '../utils/pagination';
import Genres from './genres';

class Movies extends Component {
    state = { 
        movies: [],
        currentPage: 1,
        pageSize: 3
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

     handlePageChange = (page) => {
         this.setState({ currentPage: page })
     }

     async componentDidMount () {
         const res = await fetchMovies()
         this.setState({ movies: res.data})
     }
    render() {
        const {currentPage, movies, pageSize} = this.state

        const _movies = pagination(movies, currentPage, pageSize)

        return (
            <div className="container movies-page py-5">
                <p className='lead'>There are {movies.length} movies in the database.</p>
                <div className="row">
                    <div className="col-md-3">
                        <Genres/>
                    </div>
                    <div className="col-md-9">
                        {movies.length === 0 ? <p className='lead'>There are no movies.</p> : (
                            <React.Fragment>
                                <MovieTable onHandleMovie={this.handleMovie} movies={_movies} onLiked={this.handleLiked}/>
                                <Pagination currentPage={currentPage} itemsCount={movies.length} pageSize={pageSize} onPageChange={this.handlePageChange}/>
                            </React.Fragment>
                        )}
                        
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Movies;