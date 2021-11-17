<template>
  <div id="nav" class="ff-navbar">

    <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
    </ul>
  </div>
  <router-view/>
</template>

<style lang="scss">
    @import './scss/app.scss';
</style>
