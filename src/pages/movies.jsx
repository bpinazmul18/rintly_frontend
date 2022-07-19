import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import {connect} from "react-redux"

import _ from 'lodash'
import MovieTable from '../components/movie-table';
import { deleteMovie } from '../services/movies';
import Pagination from '../components/common/pagination';
import { pagination } from '../utils/pagination';
import Genres from '../components/genres';
import SearchBox from '../components/common/search-box';
import { toaster } from '../components/common/toaster';
import {loadMovies, movieLiked} from "../store/movies";
import {loadGenres} from "../store/genres";

class Movies extends Component {
    state = { 
        movies: this.props.movies,
        currentPage: 1,
        pageSize: 3,
        genres: [],
        selectedGenre: null,
        sortColumn: {path: 'title', order: 'asc'},
        searchQuery: ''
     }

     handleMovie = async (id) => {
         const originalMovies = this.state.movies

         try {
            const movies = originalMovies.filter((movie) => movie._id !== id)
            this.setState({ movies })

            await deleteMovie(id)

            toaster('success', 'Successfully Delete!')
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                toaster('error', 'This post already been deleted!')

             if (ex.response && ex.response.status === 403)
                 toaster('error', ex.response.data)

            this.setState({ movies: originalMovies })
        }
     }

     handleLiked = (movie) => {
         const movies = [...this.state.movies]
         const index = movies.indexOf(movie)
         
         movies[index] = {...movies[index]}
         movies[index].liked = !movies[index].liked

         this.props.movieLiked({id: movie._id})
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

     fetchData = async () => {
         this.props.loadMovies()
         this.props.loadGenres()

         this.setState({ movies: this.props.movies, genres: [{'_id': '', 'name': 'All Movies'}, ...this.props.genres] })
     }

     async componentDidMount () {
         await this.fetchData()
     }

     async componentDidUpdate (prevProps,prevState ) {
         if (prevProps.movies !== prevState.movies) {
             await this.fetchData()
         }
     }
    render() {
        const {sortColumn, selectedGenre, currentPage, movies, pageSize, genres, searchQuery} = this.state

        const {totalCount, data} = this.getPagedData()

        return (
            <React.Fragment>
                <div className="container movies-page py-5">
                    <div className="d-flex align-items-center justify-content-between">
                        <p className='lead'>There are {totalCount} movies in the database.</p>
                        {
                            this.props.user && <NavLink className="btn btn-primary rounded-pill" to="/movies/new">New Movie</NavLink>
                        }

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

const mapStateToProps = state => ({
    movies: state.entities.movies.list,
    genres: state.entities.genres.list
})

const mapDispatchToProps = dispatch => ({
    loadMovies: () => dispatch(loadMovies()),
    loadGenres: () => dispatch(loadGenres()),
    movieLiked: (id) => dispatch(movieLiked(id))
})


export default connect(mapStateToProps, mapDispatchToProps)(Movies)
