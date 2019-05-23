<template>
  <v-container>
    <v-layout row wrap>
      <v-bottom-nav fixed :value="true" color="white">
        <v-btn v-if="id > 1" color="blue" :to="'/pokemon/' + (Number(id) - 1)">
          <span>Previous</span>
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>

        <v-divider></v-divider>

        <v-btn v-if="id < 151" color="blue" :to="'/pokemon/' + (Number(id) + 1)">
          <span>Next</span>
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-bottom-nav>
    </v-layout>
    <v-card>
      <h1>{{pokemon.name}}</h1>
      <p>{{nameFromStore}}</p>
      <v-img class="pokeimagen" :src="imageUrl + id + `.png`"></v-img>
      <v-img class="pokesprite" :src="spriteUrl + id + `.png`"></v-img>
      <v-img class="pokesprite" :src="spriteShinyUrl + id + `.png`"></v-img>
      <h2>Type/s:</h2>
      <p
        class="tipos"
        v-for="(pokemon, index) in pokemon.types"
        :key="pokemon.type.name"
      >{{pokemon.type.name}}</p>
      <h2>Abilities:</h2>
      <p
        class="habilidades"
        v-for="(pokemon, index) in pokemon.abilities"
        :key="pokemon.ability.name"
      >{{pokemon.ability.name}}</p>
      <h5>Height:</h5>
      <p>{{pokemon.height}}</p>
      <h5>Weight:</h5>
      <p>{{pokemon.weight}}</p>
      <v-btn color="warning" :to="'/home'">Home</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      url: "https://pokeapi.co/api/v2/pokemon/",
      pokemon: [],
      imageUrl: "https://pokeres.bastionbot.org/images/pokemon/",
      spriteUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/",
      spriteShinyUrl:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"
    };
  },
  methods: {
    async getPokemonInfo(id) {
      fetch(this.url + id)
        .then(res => res.json())
        .then(data => {
          this.pokemon = data;
        });
    }
  },
  beforeRouteUpdate(to, from, next) {
    return this.getPokemonInfo(Number(to.params.id)).then(next);
  },
  created() {
    this.getPokemonInfo(this.id);
  },
  computed: {
    nameFromStore() {
      return this.$store.getters.getName;
    }
  }
};
</script>

<style>
.pokeimagen {
  width: 300px;
  display: block;
  margin: auto;
}
.pokesprite {
  width: 100px;
  display: inline-flex;
}
.v-card {
  text-align: center;
}
</style>
