<template>


    <my-button @click="myMethodTest"
               :widthButton=300
    >Test de click pe butonul meu</my-button>

    <br>
    <br>

    <!--
    <my-button @click="alterWindows"
               :widthButton=120
    >Alert windows</my-button>
    -->

    <br>
    <br>

    <!-- "/img/angellist-brands.svg" -->

    <!-- <icon :urlSvg="'../../../src/assets/icons/apps_blue.svg'" /> -->

    <my-icon :svgIconName="'angellist-brands'" />
    <my-icon :svgIconName="'apps_blue'" />



    <!-- <icon :urlSvg="'/img/angellist-brands.svg'" /> -->




</template>

<script>
    import Button from '@/components/base/Button.vue';
    import Icon from '@/components/base/Icon.vue';

    export default {
        name: "controale",
        components: {
            'my-icon': Icon, 'my-button': Button
        },
        methods: {
            myMethodTest: function () {
                console.log('click pe butonul');
            }
        }

    }
</script>

<style scoped>
</style>
