<template>
    <v-row justify="space-around">
        <v-col cols="auto">
            <v-dialog
            transition="dialog-bottom-transition"
            max-width="500px"
            v-model="dialog"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn 
                    color="primary"
                    v-bind="attrs"
                    v-on="on"
                    >
                        Search Pokemon Online
                    </v-btn>
                </template>
                <v-card>
                    <v-toolbar color="primary" class="text-h5" dark>
                        Search Pokemon Online
                        <v-spacer></v-spacer>
                        <v-btn @click="dialog=false" color="error">Close</v-btn>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-text-field 
                            v-model="search_name"
                            placeholder="Enter a pokemon name"
                            label="Search a Pokemon"
                            @keyup="searchPokemonOnline">
                            </v-text-field>
                        </v-container>
                    </v-card-text>
                    <v-card
                    max-width="375"
                    class="mx-auto d-flex flex-column justify-space-between align-center">
                        <v-img
                        height="200px"
                        width="200px"
                        v-bind:src="pokemon_img"
                        />
                        <v-card-title>{{pokemon_name}}</v-card-title>
                        <v-divider></v-divider>
                        <v-list subheader
                        class="d-flex flex-column justify-space-between align-center">
                            <v-subheader>Abilities</v-subheader>
                            <v-list-item
                                v-for="(ability, index) in pokemon_abilities"
                                :key="index"
                                class="ma-0 pa-0">
                                <v-list-item-content>
                                    <v-list-item-title v-text="ability.ability.name"></v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-divider></v-divider>
                            <v-subheader>Weight</v-subheader>
                            <v-list-item>
                                <v-list-item-content>
                                    <v-list-item-title>{{pokemon_weight}}</v-list-item-title>
                                </v-list-item-content>
                            </v-list-item>
                            <v-list-item-action>
                                <v-btn @click="addPokemonToFavorite">Add to Favorite</v-btn>
                            </v-list-item-action>
                        </v-list>
                    </v-card>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<script>
import axios from 'axios';

export default {
    name: 'SearchPokemon',
    data: () => ({
        search_name: '',
        searched_pokemon: [],
        pokemon_name: '<Name of the Pokemon>',
        pokemon_img: require('../assets/pokeball.png'),
        pokemon_abilities: [],
        pokemon_weight: 0,
        dialog: false
    }),
    methods: {
        searchPokemonOnline(e) {
            if ( e.keyCode == 13) {
                axios({
                    method: 'GET',
                    url: 'https://pokeapi.co/api/v2/pokemon/' + this.search_name            
                }).then((response) => {
                    const pokemon_data = response.data;
                    this.pokemon_img = pokemon_data.sprites.front_default;
                    this.pokemon_name = pokemon_data.name;
                    this.pokemon_abilities = pokemon_data.abilities;
                    this.pokemon_weight = pokemon_data.weight;
                    this.searched_pokemon = {
                        id: this.$store.getters.getAllFavPokemonList.length + 1,
                        name: this.pokemon_name,
                        abilities: this.pokemon_abilities,
                        weight: this.pokemon_weight,
                        image: this.pokemon_img,
                        action: ''
                    };
                });
            }
        },
        addPokemonToFavorite() {
            this.$store.commit('addFavPokemonInTheList', this.searched_pokemon);
        }
    }
};
</script>

<style scoped>
    .v-list-item__content {
        padding: 0px !important;
    }
    .v-list-item {
        min-height: 0 !important;
    }
    .v-subheader {
        height:auto;
    }
</style>