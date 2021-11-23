<template>
    <my-login @loginWindows = "emitLogin"></my-login>
    <menu-main/>
    <router-view/>
</template>

<script>
    import MenuMain from './components/app/MenuMain';
    import Login from '@/components/app/Login.vue';


    export default {
        components: {
            'menu-main': MenuMain,
            'my-login': Login
        },
        methods: {
        	emitLogin: function () {
                console.log('am incercat sa ma loghez');
	        }
        }
    }

</script>

<style lang="scss">
    @import "./scss/app.scss";
</style>
