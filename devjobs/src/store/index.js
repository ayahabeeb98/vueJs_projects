import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";


Vue.use(Vuex);
let EMPTY = false;

export default new Vuex.Store({
    state: {
        user: {
            loggedIn: false,
            data: null
        },
        jobs: null
    },
    getters: {
        user(state) {
            return state.user
        },
        jobs(state) {
            return state.jobs
        }
    },
    mutations: {
        SET_LOGGED_IN(state, value) {
            state.user.loggedIn = value;
        },
        SET_USER(state, data) {
            state.user.data = data;
        },
        SET_JOBS(state,data) {
            if( EMPTY) {
                console.log('not empty');

                state.jobs = [...state.jobs,...data];
            }else {
                EMPTY = true;
                state.jobs = data;
            }
        }
    },
    actions: {
        fetchUser({commit}, user) {
            commit("SET_LOGGED_IN", user !== null);
            if (user) {
                commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
            } else {
                commit("SET_USER", null);
            }
        },
        fetchJobs({commit}, data) {
            commit("SET_JOBS", data);
        }
    },
    modules: {},
    plugins: [createPersistedState()]
})
