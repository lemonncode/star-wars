<template>
  <div>
    <div>Home page</div>
    <div v-if="loading">loading....</div>
    <div v-for="film in films" :key="film.url">
      <!-- <li>{{ film.title }}</li>
      <li>{{ film.episode_id }}</li>
      <li>{{ film.opening_crawl }}</li>
      <li>{{ film.director }}</li>
      <li>{{ film.producer }}</li>
      <li>{{ film.url }}</li> -->
      <!-- <li><button @click="getId(film.url)">get details</button></li> -->
      <li>{{ film.title }}</li>
      <router-link :to="`/film/${id}`"
        ><button @click="getId(film.url)">get details</button></router-link
      >
      <br />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  data() {
    return {
      data: null,
      films: null,
      id: null,
      loading: false,
      error: null,
    };
  },

  mounted() {
    this.getFilms();
  },

  methods: {
    async getFilms() {
      this.loading = true;
      try {
        await fetch("https://swapi.dev/api/films")
          .then((response) => response.json())

          .then((data) => (this.films = data.results));
      } catch (error) {
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
    getId(url) {
      this.id = url.split("/").reverse()[1];
      console.log(this.id);
    },
  },
};
</script>
