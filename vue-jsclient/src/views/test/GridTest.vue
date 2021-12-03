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
                {id: "1", caption: "Nume",      width: 50,  tableCaption:'name',    type: 'field'},
                {id: "2", caption: "Actiune",   width: 400, tableCaption:'act',     type: 'field'},
                {id: "3", caption: "Rezultat",  width: 100, tableCaption:'rez',     type: 'field'},
                {id: "4", caption: "Variabila", width: 150, tableCaption:'var',     type: 'field'},
	            {id: "5", caption: "Print",     width: 40, tableCaption: null,      type: 'printButton'},
	            {id: "6", caption: "Edit",      width: 50, tableCaption: null,      type: 'editButton'}
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
