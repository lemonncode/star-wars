<template>
  <div>Test</div>

  <!-- 
    HOME PAGE  -->
</template>

<script>
import axios from "axios";

export default {
  name: "Test",
  data() {
    return {
      data: null,
    };
  },
  methods: {
    getFilms() {},
    getId(url) {
      return url.split("/").reverse()[1];
    },
  },
};
</script>
