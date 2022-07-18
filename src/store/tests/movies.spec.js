import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureStore from "../configureStore";
import {addMovie, loadMovies} from "../movies";
import {loadBugs} from "../bugs";

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

    describe('loading indicator', () => {
        it ('should the true while fetching the movies', () => {
            fakeAxios.onGet('/movies').reply(() => {
                expect(moviesSlice().loading).toBe(true)
                return [200, [{ id: 1}]]
            })
        })

        it ('should the false after fetched the movies', async () => {
            fakeAxios.onGet('/movies').reply(200, [{ id: 1}])

            await store.dispatch(loadMovies())

            expect(moviesSlice().loading).toBe(false)
        })

        it ('should the false if server is error', async () => {
            fakeAxios.onGet('/movies').reply(500)

            await store.dispatch(loadMovies())

            expect(moviesSlice().loading).toBe(false)
        })
    })
})