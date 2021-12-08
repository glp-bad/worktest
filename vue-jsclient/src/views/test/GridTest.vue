<template>
    <my-grid ref="gridPrint"
             :pConfig=this.gridConfig
             @invoicePrint="invoicePrint"
             @editCeva="editCeva"
             @deleteCevaToolbar="deleteCevaToolbar"
    ></my-grid>

    <br>

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
            this.gridConfig = {
                header: [
                    this.$constGrid.HEADER.getHeader(1,'Nume',50,'name', this.$constGrid.HEADER.CAPTION_TYPE_FIELD),
                    this.$constGrid.HEADER.getHeader(2,'Actiune din functie',400,'fact de curaj', this.$constGrid.HEADER.CAPTION_TYPE_FIELD),
                    this.$constGrid.HEADER.getHeader(3,'Rezultat mai bun',120,'rez', this.$constGrid.HEADER.CAPTION_TYPE_FIELD),
                    this.$constGrid.HEADER.getHeader(4,'Variabile',50,'var', this.$constGrid.HEADER.CAPTION_TYPE_FIELD),
                    this.$constGrid.HEADER.getHeader(5,'action',50,null, this.$constGrid.HEADER.CAPTION_TYPE_ACTION)
                ],
	            actionButtonHeader: [
                	this.$constGrid.getActionButton(9, 'Altceva din functie', 'altCeca', this.$constGrid.getIcon('fas','skull', '#adad00')),
                    this.$constGrid.getActionButton(6, 'Print din functie', 'invoicePrint', this.$constGrid.ICON_PRINT),
                    this.$constGrid.getActionButton(7, 'Edit din functie', 'deleteCeva', this.$constGrid.ICON_DELETE),
                    this.$constGrid.getActionButton(8, 'Delete din functie', 'editCeva', this.$constGrid.ICON_EDIT)
                ],
                returnField: ['name', 'fact de curaj'],
                cfg: {
	                width: 'auto',
                    height: 300
                },
                toolbar: {
                	show: false,
	                fieldShow: {
                		field: ['fact de curaj'],
                        separator: " ",
                        includeIdPk: true
                    },
                	actionButton : [
		                this.$constGrid.getActionButton( null,  'Print din functie', 'invoicePrintToolbar', this.$constGrid.ICON_PRINT),
		                this.$constGrid.getActionButton( null,  'Edit din functie',   'deleteCevaToolbar', this.$constGrid.ICON_DELETE),
		                this.$constGrid.getActionButton( null,  'Delete din functie', 'editCevaToolbar', this.$constGrid.ICON_EDIT)
                    ]
                }
            }
        },
        mounted() {
        },
        methods: {
            invoicePrint: function (selectData) {
                console.log('acum printez');
                const reqObject = this.$app.getObjectReturnComponent(selectData);

                console.log(reqObject);
            },
            editCeva: function () {
                console.log('editez ceva');
            },
	        deleteCevaToolbar: function (selectData){
		        console.log('delete de la toolabar');
		        console.log(selectData);
            }

        },
        data() {
            return {}
        }
    }
</script>

<style scoped></style>
