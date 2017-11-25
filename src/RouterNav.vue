<template>
  <div id="router-nav">
    <div class="nav-panel-mobile">
      <div class="hamburger-icon"
          @click="toggle()">&#9776; {{currentRoute}}</div>
      <div class="mobile-menu" 
           v-if="active">
        <div class="nav-item"
             v-for="route in $router.options.routes"
             :key="route.path"
             @click="toggle()">
          <router-link class="custom-nav-item"
                       :to="route.path">
            {{route.name}}
          </router-link>
        </div>      
      </div>      
    </div>
    <div class="nav-panel">
      <div class="nav-item"
           v-for="route in $router.options.routes"
           :key="route.path">
        <router-link class="custom-nav-item"
                     :to="route.path">
          {{route.name}}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      active: false
    }
  },
  computed: {
    currentRoute: function () {
      return this.$route.name
    }
  },
  created: function() {
  },
  methods: {
    toggle: function () {
      this.active = !this.active
    }
  }
}
</script>

<style>
  .nav-panel {
    display: none;
  }
  .nav-panel-mobile {
    display: flex;
    flex-flow: column;
  }
  .mobile-menu {
    display: flex;
    flex-flow: column;     
  }
  .hamburger-icon {
    font-size: 2em;
    text-align: left;
    cursor: pointer;
    user-select: none;
  }
  .nav-item * {
    text-decoration: none;
    text-align: left;
  }

  .nav-item a {
    float: left;
  }

  .custom-nav-item {
    font-size: 1.5em;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    font-weight: bold;
    color: black;
  }
  .custom-nav-item:hover {
    border-bottom: black solid 2px;
  }

  /* media queries */
  @media only screen and (min-width: 400px) {
    .nav-panel {
      display: flex;
    }

    .router-link-exact-active {
      border-bottom: black solid 2px;
    }

    .nav-item {
      padding-left: 1em;
    }

    .nav-panel-mobile {
      display: none;
    }
  }
</style>


