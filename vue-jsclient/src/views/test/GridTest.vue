<template>
    <my-grid :pHeader=this.gridCaption
    ></my-grid>
</template>

<script>
    import Grid from '@/components/base/Grid';

    export default {
        name: "grid-test",
        components: {
            'my-grid': Grid,
        },
        props: {},
        created() {
            this.gridCaption = [
                {id: "1", caption: "Nume", width: 50},
                {id: "2", caption: "Actiune", width: 400},
                {id: "3", caption: "Rezultat", width: 100},
                {id: "4", caption: "Variabila", width: 150}
            ]
        },
        mounted() {
        },
        methods: {
        },
        data() {
            return {}
        }
    }
</script>

<style scoped></style>
