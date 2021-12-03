<template>
    <div class="ff-grid" :ref=this.REF_DIV_TABLE>
        <table class="ff-table">
            <thead class="ff-thead" :ref=this.REF_THEAD>
                <tr>
                    <template v-for="ph in pHeader">
                        <th :id=ph.id v-if="ph.type == 'field'" class="th--left-align">
                            <div :title=ph.caption>
                                {{ph.caption}}</div>
                        </th>


                    </template>
                 </tr>
            </thead>
            <tbody class="ff-tbody">
                <tr v-for="tr in this.rezultData">
                    <template v-for="(td, index) in tr">
                        <td>
                            <div :style="cgfTDStyle(index)" :title="td">{{td}}</div>
                        </td>
                    </template>
                    <template v-for="ph in pHeader">
                        <td v-if="ph.type == 'printButton'">
                            <div>
                                <my-button heightButton=20><font-awesome-icon :icon="['fas', 'print']" size="1x"/></my-button>
                            </div>
                        </td>
                        <td v-if="ph.type == 'editButton'">
                            <div>
                                <my-button heightButton=20><font-awesome-icon :icon="['fas', 'edit']" size="1x"/></my-button>
                            </div>
                        </td>
                    </template>
                </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
    </div>
</template>

<script>

	import Button from '@/components/base/Button.vue';

	export default {
		name: "grid",
		components: {
			'my-button': Button
		},
		created() {
            this.REF_DIV_TABLE  = 'refDivTable',
			this.REF_THEAD      = 'refThead'
		},
		props: {
		    pHeader: {type: Array, required: true},
            pHeight: {type: Number, default: 300, required: false},
            pPrintButton: {type:Boolean, default: false, required: false}
		},
		mounted() {
		    this.getDataFromServer();
		    this.cfgGrid();
		},
        methods:{
            cfgGrid: function () {
                let divTable = this.$refs[this.REF_DIV_TABLE];

                let headerCells = this.$refs[this.REF_THEAD].rows[0].cells;
                this.cfgGridHeader(headerCells);
                this.cfgGridCRUDbutton();

                // form, ordinea conteaza pentru: this.engine.widthGridFromCell
                divTable.style.width = this.engine.widthGridFromCell  + 'px';
                divTable.style.height = this.pHeight  + 'px';
            },
            cfgGridHeader: function (headerCells) {

                for (let i = 0; i < headerCells.length; i++) {
                    let width = this.$vanilla.getAtributeValueFromArrayObject(this.pHeader,'id',headerCells[i].getAttribute('id'),'width');

                    this.engine.widthGridFromCell = this.engine.widthGridFromCell + width + this.engine.constantaWidth;

                    headerCells[i].style.width = width + 'px';
                    //headerCells[i].style.fixedWidth = width + 'px';
                    //headerCells[i].firstChild.style.width = width + 'px';
                    //headerCells[i].firstChild.style.fixedWidth = width + 'px';

                }
            },
            cfgGridCRUDbutton: function () {
            	let header = this.$refs[this.REF_THEAD];
            	// console.log(header);

            },
            cgfTDStyle: function (fieldName) {
	            let width = this.$vanilla.getAtributeValueFromArrayObject(this.pHeader,'tableCaption',fieldName,'width');

	            return {
	            	width: width + 'px'
                }
            },
            getDataFromServer: function () {

                let dataTest = new Array();
                dataTest.push({name: 'Vasile',  act: 'se duce la piata si face cumparaturii 004 si inca un shir foarte lung sper eu', rez: 'nu a castigat nimic 004', var: 'variaza + 4'});
                dataTest.push({name: 'Ion',     act: 'se duce la piata si face cumparaturii 005', rez: 'nu a castigat nimic 005', var: 'variaza + 5'});

                for(let i=0; i<10; i++){
                    dataTest.push({name: i+' Vasile',  act: 'se duce la piata si face cumparaturii 00' + i, rez: 'nu a castigat nimic ' +i, var: 'variaza +' + i});
                    dataTest.push({name: i+' Ion',  act: 'se duce la piata si face cumparaturii 00' + i, rez: 'nu a castigat nimic ' +i, var: 'variaza +' + i});
                }

                this.rezultData = dataTest;


            }

        },
		data () {
			return {
				engine:{
				    widthGridFromCell: 0,
                    constantaWidth: 16
                },
                rezultData: new Array()
            }
		}
	}
</script>

<style scoped>
</style>
