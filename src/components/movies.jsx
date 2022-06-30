import React, { Component } from 'react';
import { toast } from 'react-toastify';
import _ from 'lodash'
import MovieTable from './movie-table';
import { fetchGenres, fetchMovies } from '../services/api';
import Pagination from './common/pagination';
import { pagination } from '../utils/pagination';
import Genres from './genres';

class Movies extends Component {
    state = { 
        movies: [],
        currentPage: 1,
        pageSize: 3,
        genres: [],
        selectedGenre: null,
        sortColumn: {path: 'title', order: 'asc'}
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

     handleGenre = (genre) => {
         this.setState({ selectedGenre: genre, currentPage: 1})
     }

     handleSort = (path) => {
         const sortColumn = {...this.state.sortColumn}

         if (sortColumn.path === path) {
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc'
         } else {
            sortColumn.path = path
            sortColumn.order = 'asc'
        }
        
         this.setState({ sortColumn })
     }

     async componentDidMount () {
         const moviesRes = await fetchMovies()
         const genresRes = await fetchGenres()
         
         this.setState({ movies: moviesRes.data, genres: [{'_id': '', 'name': 'All Movies'}, ...genresRes.data] })
     }
    render() {
        const {sortColumn, selectedGenre, currentPage, movies, pageSize, genres} = this.state

        const filtered = selectedGenre && selectedGenre._id ? movies.filter((m) => m.genre._id === selectedGenre._id) : movies
        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const _movies = pagination(sorted, currentPage, pageSize)

        return (
            <div className="container movies-page py-5">
                <p className='lead'>There are {filtered.length} movies in the database.</p>
                <div className="row">
                    <div className="col-md-3">
                        <Genres selectedItem={selectedGenre} onHandleGenre={this.handleGenre} genres={genres}/>
                    </div>
                    <div className='col'>
                        {movies.length === 0 ? <p className='lead'>There are no movies.</p> : (
                            <React.Fragment>
                                <MovieTable onHandleMovie={this.handleMovie} movies={_movies} onLiked={this.handleLiked} onSort={this.handleSort}/>
                                <Pagination currentPage={currentPage} itemsCount={filtered.length} pageSize={pageSize} onPageChange={this.handlePageChange}/>
                            </React.Fragment>
                        )}
                        
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Movies;