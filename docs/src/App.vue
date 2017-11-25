<template>
  <div id="app">
    <router-nav/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

p {
  text-align: justify;
  text-indent: 3em;
  line-height: 1.65em;
}

@media screen and (min-width: 450px) {
  #app {
    margin-left: 5em;
    margin-right: 5em;
  }
}
</style>
