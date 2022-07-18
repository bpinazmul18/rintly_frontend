import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureStore from "../configureStore";
import {addMovie} from "../movies";

describe('movieSlice', () => {
    let fakeAxios
    let store
    beforeEach(() => {
        fakeAxios = new MockAdapter(axios)
        store = configureStore()
    })

    const moviesSlice = () => store.getState().entities.movies
    it ('should add movie to the store if it\'s saved to the server', async () => {
        const movie = {
            title: 'New movie',
            genreId: '62b713a58fbdd0a13b6f4677',
            numberInStock: 5,
            dailyRentalRate: 3
        }
        const saveMovie = {...movie, _id: 1}
        fakeAxios.onPost('/movies').reply(200, saveMovie)

        await store.dispatch(addMovie(movie))

        expect(moviesSlice().list).toContainEqual(saveMovie)
    })

    it ('should not add movie to the store if not it\'s saved to the server', async () => {
        const movie = {
            title: 'New movie',
            genreId: '62b713a58fbdd0a13b6f4677',
            numberInStock: 5,
            dailyRentalRate: 3
        }
        fakeAxios.onPost('/movies').reply(500)

        await store.dispatch(addMovie(movie))

        expect(moviesSlice().list).toHaveLength(0)
    })
})