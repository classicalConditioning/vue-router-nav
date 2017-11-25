# vue-router-nav

> Minimalistic responsive navigation bar that renders routes of vue-router.

View the [demo](https://classicalconditioning.github.io/vue-router-nav/).

## Dependencies 

You need to have vue-router installed in order for vue-router-nav to work.

## Install
`npm install vue-router-nav --save`

## Usage

``` javascript
import RouterNav from 'vue-router-nav'

Vue.use(RouterNav)
```

``` html
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
```
