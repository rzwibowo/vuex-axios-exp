import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        Pegawai: []
    },
    actions: {
        loadPegawai ({ commit }) {
            axios.get("http://hidok.co.id:8082/HiDok/api/Pegawai/ListData?filter=")
            .then(result => commit('SET_PEGAWAI', result.data))
            // eslint-disable-next-line
            .catch(err => console.error(err))
        }
    },
    mutations: {
        SET_PEGAWAI (state, pgw) {
            state.Pegawai = pgw
        }
    }
})