<template>
    <div class="ff-grid" :ref=this.REF_DIV_TABLE>
        <table class="ff-table">
            <thead class="ff-thead" :ref=this.REF_THEAD>
                <tr>
                    <th v-for="ph in pHeader" :id=ph.id>
                        <div :title=ph.caption>
                            {{ph.caption}}</div>
                    </th>
                 </tr>
            </thead>
            <tbody class="ff-tbody">
                <tr v-for="tr in this.rezultData">
                    <td v-for="td in tr">
                        <div>{{td}}</div>
                    </td>
                </tr>
            </tbody>
            <tfoot></tfoot>
        </table>
    </div>
</template>

<script>
	export default {
		name: "grid",
		created() {
            this.REF_DIV_TABLE      = 'refDivTable',
			this.REF_THEAD      = 'refThead'
		},
		props: {
		    pHeader: {type: Array, required: true},
            pHeight: {type: Number, default: 300, required: false}
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

                // form, ordinea conteaza pentru: this.engine.widthGridFromCell
                divTable.style.width = this.engine.widthGridFromCell  + 'px';
                divTable.style.height = this.pHeight  + 'px';
            },
            cfgGridHeader: function (headerCells) {
                for (let i = 0; i < headerCells.length; i++) {
                    let width = this.$vanilla.getAtributeValueFromArrayObject(this.pHeader,'id',headerCells[i].getAttribute('id'),'width');

                    this.engine.widthGridFromCell = this.engine.widthGridFromCell + width;

                    headerCells[i].style.width = width + 'px';
                    headerCells[i].style.fixedWidth = width + 'px';
                    //headerCells[i].firstChild.style.width = width + 'px';
                    //headerCells[i].firstChild.style.fixedWidth = width + 'px';

                }
            },
            getDataFromServer: function () {

                let dataTest = new Array();
                dataTest.push({name: 'Vasile',  act: 'se duce la piata si face cumparaturii 004', rez: 'nu a castigat nimic 004', var: 'variaza + 4'});
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
				    widthGridFromCell: 0
                },
                rezultData: new Array()
            }
		}
	}
</script>

<style scoped>
</style>
