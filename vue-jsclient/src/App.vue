<template>
    <menu-main/>
    <router-view/>
</template>

<script>
    import MenuMain from './components/app/MenuMain';

    export default {
        components: {
            'menu-main': MenuMain
        },
        methods: {}
    }

</script>

<style lang="scss">
    @import "./scss/app.scss";
</style>
