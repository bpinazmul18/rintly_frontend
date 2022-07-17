import configureStore from "../configureStore";
import {addMovie} from "../movies";

describe('moviesSlice', () => {
    it ('should handle the addMovies', async () => {
        const store = configureStore()
        const movie = {
            title: 'New movie',
            genreId: '62b713a58fbdd0a13b6f4677',
            numberInStock: 5,
            dailyRentalRate: 3
        }
        await store.dispatch(addMovie(movie))
        console.log(store.getState().entities.movies)

    })
})