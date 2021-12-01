<template>
    <div class="ff-grid">
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
			this.REF_THEAD      = 'refThead'
		},
		props: {
		    pHeader: {type: Array, required: true}
		},
		mounted() {
		    this.getDataFromServer();
		    this.cfgGrid();
		},
        methods:{
            cfgGrid: function () {
                let headerCells = this.$refs[this.REF_THEAD].rows[0].cells;
                this.cfgGridHeader(headerCells);
            },
            cfgGridHeader: function (headerCells) {
                for (let i = 0; i < headerCells.length; i++) {
                    let width = this.$vanilla.getAtributeValueFromArrayObject(this.pHeader,'id',headerCells[i].getAttribute('id'),'width');
                    //headerCells[i].style.width = w + 'px';
                    //headerCells[i].style.fixedWidth = w + 'px';
                    headerCells[i].firstChild.style.width = width + 'px';
                    headerCells[i].firstChild.style.fixedWidth = width + 'px';
                }
            },
            getDataFromServer: function () {

                let dataTest = new Array();
                dataTest.push({name: 'Vasile',  act: 'se duce la piata si face cumparaturii 004', rez: 'nu a castigat nimic 004', var: 'variaza + 4'});
                dataTest.push({name: 'Ion',     act: 'se duce la piata si face cumparaturii 005', rez: 'nu a castigat nimic 005', var: 'variaza + 5'});

                for(let i=0; i<5; i++){
                    dataTest.push({name: i+' Vasile',  act: 'se duce la piata si face cumparaturii 00' + i, rez: 'nu a castigat nimic ' +i, var: 'variaza +' + i});
                    dataTest.push({name: i+' Ion',  act: 'se duce la piata si face cumparaturii 00' + i, rez: 'nu a castigat nimic ' +i, var: 'variaza +' + i});
                }

                this.rezultData = dataTest;


            }

        },
		data () {
			return {
				engine:{
                },
                rezultData: new Array()
            }
		}
	}
</script>

<style scoped>
</style>
