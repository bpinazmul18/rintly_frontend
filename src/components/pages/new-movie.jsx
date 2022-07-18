import React from 'react';
import Joi from 'joi-browser'

import joinImg from '../../assets/img/movie.svg'
import Form from '../common/form';
import { addMovie, fetchGenres } from '../../services/api';
import { withRouter } from '../with-router';
import { toaster } from '../common/toaster';

class NewMovie extends Form {
    state = {
        data: {
            title: '',
            genreId: '',
            numberInStock: '',
            dailyRentalRate: '',
        },
        genres: [],
        errors: {}
    }

    schema = {
        _id: Joi.string(),
        title: Joi.string().required().label('Title'),
        genreId: Joi.string().required().label('Genre'),
        numberInStock: Joi.number().required().min(0).max(100).label('Number in Stock'),
        dailyRentalRate: Joi.number().required().min(0).max(10).label('Daily Rental Rate')
    }

    async componentDidMount () {
        const genresRes = await fetchGenres()
        
        this.setState({ genres: genresRes.data })
    }

    doSubmit = async () => {
        // calling the api
        try {
            await addMovie(this.state.data)
            toaster('success', '😎 Successfully Added!')
            this.props.router.navigate('/movies')
        } catch (ex) {
            if (ex.response && ex.response.status === 404)
                toaster('error', 'This post are not found!')
            console.log(ex.message)
        }
    }

    render() {
        return (
            <div className="login-page py-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <img className='img-fluid' src={joinImg} alt="Join our app" />
                        </div>
                        <div className="col-md-6">
                            <div className="page-title mb-4">
                                <h2 className='display-3'>New Movie</h2>
                            </div>
                            <form onSubmit={this.handleSubmit}>
                                {this.renderedInput('Title', 'text', 'title')}
                                {this.renderedSelect('Genre', 'genreId', this.state.genres)}
                                {this.renderedInput('Number in stock', 'text', 'numberInStock')}
                                {this.renderedInput('Rate', 'text', 'dailyRentalRate')}
                                {this.renderedButton('Save')}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default withRouter(NewMovie);