import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Welcome from "./views/Welcome.vue";
import Pokemon from "./views/Pokemon.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "welcome",
      component: Welcome
    },
    {
      path: "/Home",
      name: "home",
      component: Home
    },
    {
      path: "/pokemon/:id",
      name: "pokemon",
      component: Pokemon,
      props: true
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/About.vue")
    }
  ]
});
