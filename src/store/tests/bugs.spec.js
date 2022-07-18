import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureStore from "../configureStore";
import {addBug, getUnResolvedBugs, loadBugs, resolvedBug} from "../bugs";

describe('bugSlice', () => {
    let fakeAxios
    let store
    beforeEach(() => {
        fakeAxios = new MockAdapter(axios)
        store = configureStore()
    })

    const bugsSlice = () => store.getState().entities.bugs
    const createState = () => ({
        entities: {
            bugs: {
                list: []
            }
        }
    })
    it ('should add bug to the store if it\'s saved to the server', async () => {
        const bug = { description: 'a' }
        const saveBug = {...bug, _id: 1}
        fakeAxios.onPost('/bugs').reply(200, saveBug)

        await store.dispatch(addBug(bug))

        expect(bugsSlice().list).toContainEqual(saveBug)
    })

    it ('should not add bug to the store if not it\'s saved to the server', async () => {
        const bug = { description: 'a' }
        fakeAxios.onPost('/bugs').reply(500)

        await store.dispatch(addBug(bug))

        expect(bugsSlice().list).toHaveLength(0)
    })

    it ('should mark the bug as resolved if it\'s save to the server', async () => {
        fakeAxios.onPatch('/bugs/1').reply(200, { id: 1, resolved: true })
        fakeAxios.onPost('/bugs').reply(200, { id: 1})

        await store.dispatch(addBug({}))
       await store.dispatch(resolvedBug(1))

       expect(bugsSlice().list[0].resolved).toBe(true)
    })

    it ('should not mark the bug as resolved if it\'s not save to the server', async () => {
        fakeAxios.onPatch('/bugs/1').reply(500)
        fakeAxios.onPost('/bugs').reply(200, { id: 1})

        await store.dispatch(addBug({}))
        await store.dispatch(resolvedBug(1))

        expect(bugsSlice().list[0].resolved).not.toBe(true)
    })

    describe('loading bugs', () => {
        describe('if the bugs exist in the cache', () => {})
        describe('if the bugs don\'t exist in the cache', () => {
            describe('loading indicator', () => {
                it ('should the true while fetching the bugs', () => {
                    fakeAxios.onGet('/bugs').reply(() => {
                        expect(bugsSlice().loading).toBe(true)
                        return [200, [{ id: 1}]]
                    })
                })

                it ('should the false after fetched the bugs', async () => {
                    fakeAxios.onGet('/bugs').reply(200, [{ id: 1}])

                    await store.dispatch(loadBugs())

                    expect(bugsSlice().loading).toBe(false)
                })

                it ('should the false if server is error', async () => {
                    fakeAxios.onGet('/bugs').reply(500)

                    await store.dispatch(loadBugs())

                    expect(bugsSlice().loading).toBe(false)
                })
            })
        })
    })

    describe('selectors', () => {
        it ('getUnresolvedBugs', () => {
            const state = createState()
            state.entities.bugs.list = [{id: 1, resolved: true}, {id: 2}, {id: 3}]

            const result = getUnResolvedBugs(state)

            expect(result).toHaveLength(2)
        })
    })
})