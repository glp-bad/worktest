<template>
    <div class="ff-navbar">
        <ul>
            <li><router-link to="/testInvoicesList">Lista test</router-link></li>
            <li><router-link to="/testTab">Tab test</router-link></li>
            <li><router-link to="/badmintonCourt">Badminton court</router-link></li>
            <li><router-link to="/test">Test grid</router-link></li>
            <li><router-link to="/testControale">Test controale</router-link></li>
            <li class="li-right" v-on:click="logout"> <a href="javascript:void(null);">Logout</a> </li>
            <li class="li-right"><a href="#about">About</a></li>
        </ul>
    </div>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';

@Options({
    components: {},
    methods: {
        logout : function(){
            console.log('am iesit');
        }
    }
})
export default class MenuMain extends Vue {}
</script>

<style scoped>
</style>
