<template>
  <v-container>
    <v-card
      class="ma-3"
      v-for="(pokemon, index) in pokemons"
      :key="pokemon.name"
      :to="'/pokemon/'+ Number(index +1)"
    >
      <v-list two-line>
        <template>
          <v-subheader>#{{index + 1}} - {{pokemon.name}}</v-subheader>
        </template>
      </v-list>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon?offset=0&limit=151",
      spriteUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    };
  },
  methods: {
    getData() {
      fetch(this.url)
        .then(json => json.json())
        .then(data => (this.pokemons = data.results));
    }
  },
  created() {
    // this.getData();
  },
  computed: {
    pokemons() {
      return this.$store.getters.getAllPokemons;
    }
  }
};
</script>

<style>
.v-subheader {
  display: flex;
  justify-content: center;
}
.v-container {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  width: 500px;
  height: 400px;
  align-content: space-between;
}
</style>

