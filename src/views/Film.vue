<template>
  <div>
    <div v-if="loading">loading....</div>
    <h1>{{ film.title }}</h1>
    <h1>Director: {{ film.director }}</h1>
    <h1>Producer: {{ film.producer }}</h1>
    <h1>Releae Date: {{ film.release_date }}</h1>
    <h1>Episode: {{ film.episode_id }}</h1>

    <br />
    <ul v-for="charUrl in film.characters" :key="charUrl">
      <li>
        <char :charUrl="charUrl"> </char>
      </li>
    </ul>
  </div>
</template>

<script>
import Char from "./Char.vue";

export default {
  components: { Char },

  data() {
    return {
      film: {},
      id: null,
      url: null,
      loading: false,
      error: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  mounted() {
    this.getFilm();
  },
  methods: {
    async getFilm() {
    try{

        await fetch(`https://swapi.dev/api/films/${this.id}`)
          .then((response) => response.json())
          //.then((data) => console.log(data))
  
          .then((data) => (this.film = data));
    }
    catch(error){
      this.error = error
    }
    finally{
      this.loading = false
    }
    },
  },
};
</script>

<style>
</style>