import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "Albert",
    pokemons: [],
    url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151"
  },
  mutations: {
    setPokemons(state, data) {
      state.pokemons = data;
    }
  },
  actions: {
    getPokemons(context) {
      fetch(context.state.url)
        .then(json => json.json())
        .then(data => context.commit("setPokemons", data.results));
    }
  },
  getters: {
    getName(state) {
      return state.name;
    },
    getAllPokemons(state) {
      return state.pokemons;
    }
  }
});
