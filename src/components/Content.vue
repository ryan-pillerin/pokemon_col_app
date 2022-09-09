<template>
    <v-data-table
    :headers="headers"
    :items="pokemons"
    :items-per-page="5"
    class="elevation-1"
    >
        <template v-slot:item.image="{ item }">
            <div class="d-flex flex-column justify-space-between align-center">
                <v-img :src="item.image" style="width: 100px; height: 100px" />
            </div>
        </template>
        <template v-slot:item.name="{ item }">
            <div class="text-capitalize text-center">{{item.name}}</div>
        </template>
        <template v-slot:item.types="{ item }">
            <v-chip
            v-for="(item, i) in item.types"
            :key="i"
            class="mx-1">
                {{item.type.name}}
            </v-chip>
        </template>
        <template v-slot:item.action="{ item }">
            <PokemonDetails :itemProp="item" />
        </template>
    </v-data-table>
</template>

<script>
import PokemonDetails from './PokemonDetails.vue';
export default {
    name: "Content",
    data: () => ({
        headers: [
            { text: "#", align: "center", sortable: true, value: "id" },
            { text: "Default Image", align: "center", sortable: true, value: "image" },
            { text: "Pokemon", align: "center", sortable: true, value: "name" },
            { text: "Types", align: "center", sortable: true, value: "types" },
            { text: "Action", align: "center", sortable: true, value: "action" },
        ],
        displayDetails: []
    }),
    computed: {
        pokemons() {
            //console.log(this.$store.getters.getAllFavPokemonList);
            return this.$store.getters.getAllFavPokemonList;
        }
    },
    components: { PokemonDetails }
}
</script>