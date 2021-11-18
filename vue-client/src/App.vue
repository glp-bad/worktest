<template>
  <menu-main></menu-main>
   <!--
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
  -->
  <router-view/>
</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import MenuMain from './components/app/MenuMain.vue';
    @Options({
        components: {
            'menu-main': MenuMain
        },
    })

    export default class App extends Vue {}
</script>
<style lang="scss">
@import "./scss/app.scss";
</style>
