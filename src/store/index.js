import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const url = "https://pokeapi.co/api/v2/pokemon";

export default new Vuex.Store({
  state: {
    favPokemonList: [],
  },
  getters: {
    getAllFavPokemonList: state => state.favPokemonList
  },
  mutations: {
    /* Add pokemon to the list */
    addFavPokemonInTheList: (state, payload) => {
      state.favPokemonList.push(payload);
    }
  },
  actions: {
    setYourFavoritePokemon() {
      const listOfPokemons = [
        'garchomp', 'mudkip', 'blastoise', 'scizor', 'luxray',
        'torterra', 'snorlax', 'infernape', 'tyranitar', 'ninetales',
        'flygon', 'squirtle', 'ampharos', 'typhlosion', 'absol',
        'dragonite', 'eevee', 'gardevoir', 'lucario', 'umbreon',
        'blaziken', 'Bulbasaur', 'arcanine', 'gengar', 'charizard'
      ];

      listOfPokemons.map(pokemon => {
        axios({
          method: 'GET',
          url: 'https://pokeapi.co/api/v2/pokemon/' + pokemon.toLowerCase()
        }).then((response) => {
          let poke_data = response.data;
          this.commit('addFavPokemonInTheList', {
            id: poke_data.id,
            name: poke_data.name,
            abilities: poke_data.abilities,
            weight: poke_data.weight,
            image: poke_data.sprites.front_default,
            types: poke_data.types
          });
        })
      });

    }
  },
  modules: {
  }
})
