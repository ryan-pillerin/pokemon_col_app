<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark>
      <v-toolbar-title>Pokemon Collection App</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <Content />
    </v-main>
  </v-app>
</template>

<script>
import Content from './components/Content.vue';

export default {
  name: 'App',
  components: {
    Content
  }, mounted() {
    this.$store.dispatch('setYourFavoritePokemon');
    document.title = "Pokemon Collection App"
  }
};
</script>
