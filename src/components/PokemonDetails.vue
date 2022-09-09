<template>
    <v-row justify="space-around">
        <v-col cols="auto">
            <v-dialog
                transition="dialog-bottom-transition"
                max-width="400"
                v-model="dialog"
            >
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        dark
                        v-bind="attrs"
                        v-on="on"
                    >
                    View
                    </v-btn>
                </template>
                <v-card
                    class="mx-auto"
                    max-width="400"
                >
                    <div class="d-flex flex-column justify-space-between align-center">
                        <v-img
                        class="white--text align-center"
                        height="250px"
                        width="300px"
                        :src="itemProp.image">
                        </v-img>
                    
                        <v-card-title class="pb-1 text-capitalize text-h4">
                        {{itemProp.name}}
                        </v-card-title>
                        <v-card-subtitle class="mt-1 mx-1">ID: {{itemProp.id}}</v-card-subtitle>
                        <v-divider></v-divider>
                    </div>
                    <v-card-text class="text--primary mt-2">
                        <div class="font-weight-bold">Abilities</div>
                        <v-divider></v-divider>
                        <div>
                            <v-chip
                            v-for="(ability, i) in itemProp.abilities"
                            :key="i" class="mt-1 mx-1 mb-3 primary">
                                {{ability.ability.name}}
                            </v-chip>
                        </div>
                        <v-divider></v-divider>
                        <div class="mt-1"><span class="font-weight-bold">Weight:</span> {{itemProp.weight}}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="error" @click="dialog=false" text>Close</v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </v-col>
    </v-row>
</template>

<script>
export default {
    name: 'PokemonDetails',
    props: {
        itemProp: Object
    },
    data: () => ({
        dialog: false
    }),
    methods: {
        
    }
}
</script>