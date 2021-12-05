<template>
    <my-grid :pHeader=this.gridCaption @invoicePrint="invoicePrint" @editCeva="editCeva"
    ></my-grid>

    <br>

    <div class="toolbar-icon-inline">
        <div class="divButton"><my-button :heightButton=22 :buttonType=2 ><font-awesome-icon :icon="['fas', 'print']" size="1x"/></my-button></div>
        <div class="divButton"><my-button :heightButton=22 :buttonType=2 ><font-awesome-icon :icon="['fas', 'edit']" size="1x"/></my-button></div>
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

            this.gridCaption = {
                header: [
                    this.$constGrid.HEADER.getHeader(1,'Nume',50,'name', this.$constGrid.HEADER.CAPTION_TYPE_FIELD),
                    this.$constGrid.HEADER.getHeader(2,'Actiune din functie',400,'act', this.$constGrid.HEADER.CAPTION_TYPE_FIELD),
                    this.$constGrid.HEADER.getHeader(3,'Rezultat mai bun',120,'rez', this.$constGrid.HEADER.CAPTION_TYPE_FIELD),
                    this.$constGrid.HEADER.getHeader(4,'Variabile',50,'var', this.$constGrid.HEADER.CAPTION_TYPE_FIELD),
                    this.$constGrid.HEADER.getHeader(5,'action',50,null, this.$constGrid.HEADER.CAPTION_TYPE_ACTION)
                ],
                actionButton: [
                    this.$constGrid.getActionButton(9, 'Altceva din functie', 'altCeca', this.$constGrid.getIcon('fas','skull', '#adad00')),
                    this.$constGrid.getActionButton(6, 'Print din functie', 'invoicePrint', this.$constGrid.ICON_PRINT),
                    this.$constGrid.getActionButton(7, 'Edit din functie', 'deleteCeva', this.$constGrid.ICON_DELETE),
                    this.$constGrid.getActionButton(8, 'Delete din functie', 'editCeva', this.$constGrid.ICON_EDIT)
                ]
            }

        },
        mounted() {
        },
        methods: {
            invoicePrint: function () {
                console.log('acum printez');
            },
            editCeva: function () {
                console.log('editez ceva');
            }
        },
        data() {
            return {}
        }
    }
</script>

<style scoped></style>
