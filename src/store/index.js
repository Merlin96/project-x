import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'

Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            {
                imageurl: 'https://cdn.pixabay.com/photo/2019/10/03/21/58/newyork-4524482_960_720.jpg', 
                id: '1',
                title:'Bils in New York',
                date: new Date(),
                location: 'New York',
                description: 'LOL OHAYO'
            },
            {
                imageurl: 'https://media.fshoq.com/images/149/aerial-photo-of-paris-during-the-night-149-medium.jpg', 
                id: '2',
                title:'Bils in Paris',
                date: new Date(),
                location: 'Paris',
                description: 'LOL OHAYO'
            },
            {
                imageurl: 'https://www.maxpixel.net/static/photo/1x/Mountains-Canyon-Kazakhstan-Visitalmaty-Almaty-3457154.jpg',
                 id: '3',
                 title:'Bils in Kazakhstan',
                 date: new Date(),
                 location: 'Kazakhstan',
                 description: 'LOL OHAYO'
            }

        ],
        user: null,
        loading: false,
        error: null
    },
    mutations: {
        createMeetup (state, payload) {
            state.loadedMeetups.push(payload)
        },
        setUser (state, payload) {
            state.user = payload
        },
        setLoading (state, payload) {
            state.loading = payload
        },
        setError (state, payload) {
            state.error = payload
        },
        clearError (state) {
            state.error = null
        }
    },
    actions: {
        createMeetup({commit}, payload) {
            const meetup = {
                title: payload.title,
                location: payload.location,
                imageurl: payload.imageurl,
                description: payload.description,
                date: payload.date,
                id: 'hiMark'
            }
            // Reach out to firebase and store it
            commit('createMeetup',meetup)
        },
        signUserUp ({commit}, payload) {
            commit ('setLoading', true)
            commit('clearError')

            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    commit ('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                    }
                    commit('setUser', newUser)
                }
            )
        },
        signUserIn ({commit}, payload) {
            commit ('setLoading', true)
            commit('clearError')
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
            .then(
                user => {
                    commit ('setLoading', false)
                    const newUser = {
                        id: user.uid,
                        registeredMeetups: []
                }
                commit('setUser',newUser)
            }
            )
        },
        clearError ({commit}) {
            commit('clearError')
        }
    },
    getters: {
        loadedMeetups (state) {
            return state.loadedMeetups.sort((meetupA,meetupB) => {
                return meetupA.date > meetupB.date
            })
        },
        featuredMeetups (state,getters) {
            return getters.loadedMeetups.slice(0, 5)
        },
        loadedMeetup (state) {
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) =>{
                    return meetup.id === meetupId
                    
                })
            }
        },
        user (state) {
            return state.user
        },
        loading (state) {
            return state.loading
        },
        error (state) {
            return state.error
        }
    }
})