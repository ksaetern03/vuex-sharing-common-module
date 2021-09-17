<template>
  <div class="app">
    <section>
      <h1 class="title">Design Pattern for Reusing a Common Store Module.</h1>
      <p>
        <router-link to="/dogs" exact>Dogs</router-link> | 
        <router-link to="/birds" exact>Birds</router-link>
      </p>
      <router-view></router-view>
    </section>
  </div>
</template>

<script>
export default {
  name: "Animal",
  components: {
  },
  computed: {
  },

  methods: {
  },

  created(){
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.router-link-active{
  font-weight: bold;
}
</style>