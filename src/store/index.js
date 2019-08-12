import {Actions,Events} from '../constants'
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    state: {
        progress: -1,
        logined: false,
        loginState: '',
        count:0,
        collapsed: false,
        user: {
            name: '',
            email: '',
            message: ''
        }
    },
    getters: {
        logined: state => state.logined
    },
    actions: {
        [Events.PROGRESS] (context, value) {
            context.commit(Events.PROGRESS, value);
        },
        [Events.LOGINED] (context, value) {
            context.commit(Events.LOGINED, value);
        },
        [Events.COLLAPSED] (context, value) {
            context.commit(Events.COLLAPSED, value);
        },
        [Events.COUNT] (context, value) {
            context.commit(Events.COUNT, value);
        },
        [Actions.UPDATE_USER] (context, value) {
            context.commit(Actions.UPDATE_USER, value);
        }
    },
    mutations: {
        [Events.PROGRESS] (state, value) {
            state.progress = value;
        },
        [Events.LOGINED] (state, value) {
            state.loginState = value;
            state.logined = true;
        },
        [Events.COLLAPSED] (state, value) {
            state.collapsed = !state.collapsed;
        },
        [Events.COUNT] (state, value) {
            state.count += value;
        },
        [Actions.UPDATE_USER] (state, value) {
            state.user = Object.assign(state.user, value);
        }
    }
})