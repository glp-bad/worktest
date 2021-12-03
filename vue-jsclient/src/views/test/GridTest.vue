<template>
    <my-grid :pHeader=this.gridCaption2
             :pPrintMethod="gridPrint"
    ></my-grid>

    <br>

    <div class="toolbar-icon-inline">
        <div class="divButton"><my-button :heightButton=22 :iconColor=11 ><font-awesome-icon :icon="['fas', 'print']" size="1x"/></my-button></div>
        <div class="divButton"><my-button :heightButton=22 :iconColor=22 ><font-awesome-icon :icon="['fas', 'edit']" size="1x"/></my-button></div>
    </div>

</template>

<script>
    import Grid from '@/components/base/Grid';
    import Button from '@/components/base/Button.vue';

    export default {
        name: "grid-test",
        components: {
            'my-grid': Grid,
            'my-button': Button
        },
        props: {},
        created() {

            this.gridCaption2 = {
                header: [
                    {id: "1", caption: "Nume",      width: 50,  tableCaption:'name',    type: 'field'},
                    {id: "2", caption: "Actiune",   width: 400, tableCaption:'act',     type: 'field'},
                    {id: "3", caption: "Rezultat",  width: 100, tableCaption:'rez',     type: 'field'},
                    {id: "4", caption: "Variabila", width: 150, tableCaption:'var',     type: 'field'},
                    {id: "5", caption: "Actiune", width: 60, tableCaption:null,         type: 'action'}
                ],
                actionButton: [
                    {id: "6", tooltip: "Print",     width: 40, tableCaption: null,      type: 'printButton', actionMethod: 'gridPrint'  },
                    {id: "7", tooltip: "Edit",      width: 50, tableCaption: null,      type: 'editButton', actionMethod: 'gridEdit'    },
                    {id: "8", tooltip: "Delete",      width: 50, tableCaption: null,    type: 'deleteButton', actionMethod: 'gridDelete'}
                ]
            },
            this.gridCaption = [
                {id: "1", caption: "Nume",      width: 50,  tableCaption:'name',    type: 'field'},
                {id: "2", caption: "Actiune",   width: 400, tableCaption:'act',     type: 'field'},
                {id: "3", caption: "Rezultat",  width: 100, tableCaption:'rez',     type: 'field'},
                {id: "4", caption: "Variabila", width: 150, tableCaption:'var',     type: 'field'},

                {id: "5", caption: "Action",  width: 80, tableCaption: null, type: 'action', action: [
                            {id: "6", tooltip: "Print",     width: 40, tableCaption: null,      type: 'printButton', actionMethod: 'gridPrint'  },
                            {id: "7", tooltip: "Edit",      width: 50, tableCaption: null,      type: 'editButton', actionMethod: 'gridEdit'  },
                            {id: "8", tooltip: "Delete",      width: 50, tableCaption: null,    type: 'deleteButton', actionMethod: 'gridDelete'  }


                    ]
                }



            ]
        },
        mounted() {
        },
        methods: {
            gridPrint: function (event) {
                let tr = event.target.closest('tr');
                console.log(tr.getAttribute(this.$constGrid.idName));

            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped></style>
