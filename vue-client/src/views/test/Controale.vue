<template>
    <my-button @click="myMethodTest"
               :widthButton=300
    >Test de click pe butonul meu</my-button>

</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import Button from '../../components/base/Button.vue';

    @Options({
        components: {
            'my-button' : Button
        },
        methods: {
            myMethod: function () {
                console.log("clikc pe CLick me");
            },
            myMethodTest: function () {
                console.log('test de log pe butonul meu');
            }
        }
    })



    export default class Controale extends Vue {}
</script>

<style scoped>
</style>
