<template>
    <my-button @click="myMethodTest"
               :widthButton=300
    >Test de click pe butonul meu</my-button>

    <br>
    <br>

    <my-button @click="alterWindows"
               :widthButton=120
    >Alert windows</my-button>

    <br>
    <br>


    <!-- "/img/angellist-brands.svg" -->

    <icon-test :urlSvg="'./../../assets/icons/apps_blue.svg'" />
    <!-- <icon-test :url="'./../../assets/icons/apps_blue.svg'"/> -->

</template>

<script lang="ts">
    import { Options, Vue } from 'vue-class-component';
    import Button from '../../components/base/Button.vue';
    import Icon from '../../components/base/Icon.vue';

    @Options({
        components: {
            'my-button' : Button,
            'icon-test' : Icon
        },
        methods: {
            myMethodTest(): void {
                console.log('test de log pe butonul meu');
            },

            alterWindows(): void {
                console.log('clipe pe fereastra aler');
            }
        }
    })

    export default class Controale extends Vue {}
</script>

<style scoped>
</style>
