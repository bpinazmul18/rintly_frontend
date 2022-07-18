import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { toast } from 'react-toastify';
import _ from 'lodash'
import MovieTable from '../movie-table';
import { fetchGenres, fetchMovies, deleteMovie } from '../../services/api';
import Pagination from '../common/pagination';
import { pagination } from '../../utils/pagination';
import Genres from '../genres';
import SearchBox from '../common/search-box';
import { toaster } from '../common/toaster';

class Movies extends Component {
    state = { 
        movies: [],
        currentPage: 1,
        pageSize: 3,
        genres: [],
        selectedGenre: null,
        sortColumn: {path: 'title', order: 'asc'},
        searchQuery: ''
     }

     handleMovie = async (id) => {
        const originalMovies = this.state.movies
        const movies = originalMovies.filter((movie) => movie._id !== id)
        this.setState({ movies })

        try {
            await deleteMovie(id)

            toaster('success', '😎 Successfully Delete!')
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                toaster('error', 'This post already been deleted!')

            this.setState({ movies: originalMovies })
        }
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
         this.setState({ selectedGenre: genre, searchQuery: '', currentPage: 1})
     }

     handleSort = (sortColumn) => {
         this.setState({ sortColumn })
     }

     handleSearch = (query) => {
        this.setState({ searchQuery: query, selectedGenre: null, currentPage: 1})
     }

     getPagedData = () => {
        const {sortColumn, selectedGenre, currentPage, movies, pageSize, searchQuery} = this.state

        let filtered = movies

        if (searchQuery)
            filtered = movies.filter(m => m.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
        else if (selectedGenre && selectedGenre._id)
            filtered = movies.filter((m) => m.genre._id === selectedGenre._id)

        const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order])
        const _movies = pagination(sorted, currentPage, pageSize)

        return { totalCount: filtered.length, data: _movies}
     }

     async componentDidMount () {
         const moviesRes = await fetchMovies()
         const genresRes = await fetchGenres()
         
         this.setState({ movies: moviesRes.data, genres: [{'_id': '', 'name': 'All Movies'}, ...genresRes.data] })
     }
    render() {
        const {sortColumn, selectedGenre, currentPage, movies, pageSize, genres, searchQuery} = this.state

        const {totalCount, data} = this.getPagedData()

        return (
            <React.Fragment>
                <div className="container movies-page py-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='lead'>There are {totalCount} movies in the database.</p>
                        <NavLink className="btn btn-primary rounded-pill" to="/movie/new">New Movie</NavLink>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Genres selectedItem={selectedGenre} onHandleGenre={this.handleGenre} genres={genres}/>
                        </div>
                        <div className='col'>
                            <SearchBox value={searchQuery} onChange={this.handleSearch}/>
                            {movies.length === 0 ? <p className='lead'>There are no movies.</p> : (
                                <React.Fragment>
                                    <MovieTable sortColumn={sortColumn} onHandleMovie={this.handleMovie} movies={data} onLiked={this.handleLiked} onSort={this.handleSort}/>
                                    <Pagination currentPage={currentPage} itemsCount={totalCount} pageSize={pageSize} onPageChange={this.handlePageChange}/>
                                </React.Fragment>
                            )}
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Movies;