<template>
  <div>
    <div @click="showDetails()">
      {{ character.name }}
      <div v-show="showInfo" class="bg-red-200">
        {{ details.birth_year }}
        {{ details.gender }}
        {{ details.heigh }}
        {{ details.mass }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["charUrl"],
  data() {
    return {
      id: null,
      character: {},
      details: {},
     
    };
    
  },
  computed:{
    showInfo(){
    return this.showInfo =  true
    }
  },

  created() {
    this.id = this.$route.params.id;
  },

  mounted() {
    this.getCharId(this.charUrl);
    this.getChar();
  },
  methods: {
    async getChar() {
      await fetch(`https://swapi.dev/api/people/${this.id}`)
        .then((response) => response.json())
        //.then((data) => console.log(data.name))

        .then((data) => (this.character = data));
    },
    getCharId(charUrl) {
      this.id = charUrl.split("/").reverse()[1];
      //console.log(this.id);
    },
    showDetails() {
     
      this.details = this.character;
      
    },
  },
};
</script>
<style>

</style>