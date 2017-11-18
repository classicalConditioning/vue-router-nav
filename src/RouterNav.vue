<template>
  <div id="router-nav">
    <ul>
      <li v-for="route in $router.options.routes"
          :key="route.path"> 
        <router-link :to="route.path">{{route.name}}</router-link>
      </li>
    </ul>  
  </div>
</template>

<script>
export default {
  name: 'router-nav',
}
</script>

<style>

</style>


