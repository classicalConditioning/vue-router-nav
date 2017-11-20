# vue-router-nav

> A vue.js router navigation bar plugin based on vue-router.

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
