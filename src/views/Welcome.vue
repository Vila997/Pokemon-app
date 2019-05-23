<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap align-center justify-center>
      <v-flex class="logo" xs8 offset-xs-2>
        <v-img width="200px" position="center center" src="tindermon.png" lazy-src="tindermon.png"></v-img>
      </v-flex>
      <v-flex class="bola" xs8 offset-xs-2>
        <router-link to="home">
          <v-img
            width="200px"
            position="center center"
            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
            lazy-src="https://upload.wikimedia.org/wikipedia/commons/5/51/Pokebola-pokeball-png-0.png"
          >
            <template v-slot:placeholder>
              <v-layout fill-height align-center justify-center ma-0>
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>
          </v-img>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {};
</script>

<style>
</style>


