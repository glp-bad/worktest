<template>
    <div class="ff-grid-container">
        <div class="ff-grid" :ref=this.REF_DIV_TABLE>
            <table class="ff-table" :ref=REF_TABLE>
                <thead class="ff-thead" :ref=this.REF_THEAD>
                    <tr :idPk="-1">
                        <template v-for="ph in pConfig.header">
                            <th :id=ph.id v-if="ph.type == 'field'" class="th--left-align">
                                <div :title=ph.caption>
                                    {{ph.caption}}</div>
                            </th>
                            <th :id=ph.id v-if="ph.type !== 'field'" class="th--center-align">
                                <div :title=ph.caption>
                                    {{ph.caption}}</div>
                            </th>
                        </template>
                     </tr>
                </thead>
                <tbody class="ff-tbody" :ref=REF_TABLE_BODY>
                    <tr v-for="(tr, index) in this.paginate.pag.data" :idPk="tr.id" v-on:keydown.prevent="cfgKeyNavigate($event)" v-on:click.prevent="cfgMouseNavigate($event)" v-bind:key="index">
                        <template v-for="(td, index) in tr">
                            <td v-if="index != 'id'" :tabindex=this.cfgGetTabIndex() v-bind:key="index">
                                <div class="div--left-align " :style="cgfTDStyle(index)" :title="td" :fieldName="index">{{td}}</div>
                            </td>
                        </template>
                        <td :tabindex=this.cfgGetTabIndex()>
                            <div class="div--center-align-action-group" >
                                <div class="toolbar-icon-inline" >
                                    <template v-for="ph in pConfig.actionButtonHeader">
                                       <div class="divButton">
                                           <my-button @click="this.emitAction($event, ph.emitAction)" :heightButton=22 :buttonType=1 :title="ph.tooltip" :style=cfgIconColor(ph.icon.color)>
                                               <font-awesome-icon :icon=this.cfgIconPictureAction(ph.icon) size="1x"/>
                                           </my-button>
                                       </div>
                                    </template>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>

        </div>

        <div class="toolbar">
            <div class="toolbarButton"  v-if="pConfig.toolbar.show">
                <template v-for="ph in pConfig.toolbar.actionButton">
                    <div class="divButton">
                        <my-button @click="this.emitActionToolbar($event, ph.emitAction)" :heightButton=22 :buttonType=2 :title="ph.tooltip" :style=cfgIconColor(ph.icon.color)>
                            <font-awesome-icon :icon=this.cfgIconPictureAction(ph.icon) size="1x"/>
                        </my-button>
                    </div>
                </template>

                <div class="dataSelected" :title=this.showSelectedData>{{this.showSelectedData}}</div>
            </div>

            <div class="paginate" >
                <div class="divButton">
                    <my-button @click="this.goToPage($event, this.engine.paginate.buttonGoStart.id)"
                               :ref=this.engine.paginate.buttonGoStart.ref
                               :heightButton=22
                               :buttonType=2
                               :title='"goto first pagina"'>
                        <font-awesome-icon :icon=this.cfgIconPictureAction(this.engine.paginate.buttonGoStart.icon) size="1x"/>
                    </my-button>
                </div>
                <div class="divButton">
                    <my-button @click="this.goToPage($event, this.engine.paginate.buttonGoLeft.id)"
                               :ref=this.engine.paginate.buttonGoLeft.ref
                               :heightButton=22
                               :buttonType=2
                               :title='"previous page"'>
                        <font-awesome-icon :icon=this.cfgIconPictureAction(this.engine.paginate.buttonGoLeft.icon) size="1x"/>
                    </my-button>
                </div>

                <!-- <template  v-for="index in 10" :key='index'> -->
                <template  v-for="(pgn, index) in this.paginate.pag.page_number_scroll" :key='index'>
                    <div class="divButtonDinamic">
                        <my-button @click="this.goToPage($event, pgn)" :widthButton=35 :heightButton=22 :buttonType=2 :title='this.privateGetPageTitle(pgn)'>
                           {{pgn}}
                        </my-button>
                    </div>
                </template>

                <div class="divButton">
                    <my-button @click="this.goToPage($event, this.engine.paginate.buttonGoRight.id)"
                               :ref=this.engine.paginate.buttonGoRight.ref
                               :heightButton=22
                               :buttonType=2
                               :title='"next page"'>
                        <font-awesome-icon :icon=this.cfgIconPictureAction(this.engine.paginate.buttonGoRight.icon) size="1x"/>
                    </my-button>
                </div>
                <div class="divButton">
                    <my-button @click="this.goToPage($event, this.engine.paginate.buttonGoEnd.id)"
                               :ref=this.engine.paginate.buttonGoEnd.ref
                               :heightButton=22
                               :buttonType=2
                               :title='"goto last page"'>
                        <font-awesome-icon :icon=this.cfgIconPictureAction(this.engine.paginate.buttonGoEnd.icon) size="1x"/>
                    </my-button>
                </div>
            </div>

        </div>

    </div>
</template>

<script>

	import Button from '@/components/base/Button.vue';

	export default {
		name: "grid",
		components: {
			'my-button': Button
		},
        props: {
            pConfig: {type: Object, required: true}
        },
		created() {
            this.REF_DIV_TABLE  = 'refDivTable',
            this.REF_TABLE      = 'refTable',
			this.REF_THEAD      = 'refThead',
            this.REF_TABLE_BODY = 'refBody',
            this.engine = {
                tabIndexValue: 0,
                tdCurent: null,
                trCurent: null,
                maximRows: 0,
	            CLASS_SELECTED: 'selected',
                CLASS_DINAMIC_BUTTON_PAG: 'divButtonDinamic',
	            CLASS_PERMANENT_OVER: 'ff-button-selected',
                paginate: {
                    buttonGoStart:{
                        id: 'b1',
                        icon: {fawIcon:'fas', icon: 'angle-double-left', color: "darkred"},
                        ref: 'refGoStart'
                    },
                    buttonGoLeft: {
                        id: 'b2',
                        icon: {fawIcon:'fas', icon: 'angle-left', color: "darkred"},
	                    ref: 'refGoLeft'
                    },
                    buttonGoRight: {
                        id: 'b3',
                        icon: {fawIcon:'fas', icon: 'angle-right', color: "darkred"},
	                    ref: 'refGoRight'
                    },
                    buttonGoEnd:{
                        id: 'b4',
                        icon: {fawIcon:'fas', icon: 'angle-double-right', color: "darkred"},
	                    ref: 'refGoEnd'
                    },
                    maxButtonPage: 6
                }
            }
        },
		mounted() {
		    this.getDataFromServer();
		    this.cfgGrid();
			this.goToPage(null, '1');

            this.$nextTick(function () {
                this.initGrid();
	            this.goToPage(null, '1');       // prima data initializam page
            });

		},
        computed: {
        },
        methods: {
	        getDataFromServer: function () {
		        /*
		        let uri = this.$url.getUrl(this.pConfig.cfg.urlData);
		        this.axios
			        .post(uri, this.post)
			        .then(response => {
			             this.rezultData = response.data;
				        }
			        )
			        .catch(error => console.log(error));
                */
		        this.rezultData = this.getTestData();

	        }, getDataSelected: function () {
		        return this.selectdRow;
	        }, initGrid: function () {
		        this.engine.maximRows = this.paginate.pag.data.length;
		        if (this.engine.maximRows > 0) {
			        this.privateSelectedRow(this.$refs[this.REF_TABLE_BODY].rows[0]);
		        }

	        }, setFocus: function () {
		        this.engine.tdCurent.focus();
	        },

            goToPage: function (event, buttonNumber) {
		        let pageNumber = null;
		        if (buttonNumber.slice(0, 1) == 'b') {

			        if (buttonNumber == this.engine.paginate.buttonGoStart.id) {
				        pageNumber = 1;

			        }
			        else if (buttonNumber == this.engine.paginate.buttonGoLeft.id) {
				        pageNumber = this.paginate.pag.pre_page;

			        }
			        else if (buttonNumber == this.engine.paginate.buttonGoRight.id) {
				        pageNumber = this.paginate.pag.next_page;

			        }
			        else if (buttonNumber == this.engine.paginate.buttonGoEnd.id) {
				        pageNumber = this.paginate.pag.total_pages;

			        }

		        }
		        else {
			        pageNumber = parseInt(buttonNumber);

		        }


		        this.paginate.pag = this.$vanilla.paginateArray(this.rezultData, pageNumber);
	            this.privateCfgPaginateInitButtonNumber(pageNumber);
		        this.privateCfgPaginateToolBar();
	        },
            privateCfgPaginateInitButtonNumber: function (pageNumber){
	            // ruleaza o singura cand initializeaza numarul de butoane

	            let arrayPage =  this.paginate.pag.page_number_scroll;

	            console.log('trece pe aici !!!',   arrayPage );

	            if (this.paginate.pag.page_number_scroll.length == 0) {

		            let nrb = this.paginate.pag.total_pages;
		            if (nrb > this.engine.paginate.maxButtonPage) {
			            nrb = this.engine.paginate.maxButtonPage;
		            }

		            for (let i = 1; i <= nrb; i++) {
			            this.paginate.pag.page_number_scroll.push(i.toString());
		            }
	            }else{



	            	if(pageNumber > this.engine.paginate.maxButtonPage){

			            for (let i = pageNumber; i <= this.engine.paginate.maxButtonPage; i++) {
				            this.paginate.pag.page_number_scroll.push(i.toString());
			            }

                    }
                }
            },
            privateCfgPaginateToolBar:function(){
	        	let disableLeft = false;
	            let disableRight = false;

	        	if(this.paginate.pag.page == 1){
			        disableLeft = true;
                }

                if(this.paginate.pag.page == this.paginate.pag.total_pages){
	                disableRight = true;
                }

                this.privateCfgButtonPage();

	            this.$refs[this.engine.paginate.buttonGoStart.ref].disable(disableLeft);
	            this.$refs[this.engine.paginate.buttonGoLeft.ref].disable(disableLeft);

	            this.$refs[this.engine.paginate.buttonGoEnd.ref].disable(disableRight);
	            this.$refs[this.engine.paginate.buttonGoRight.ref].disable(disableRight);

            },
            privateCfgButtonPage: function (){

	        	let bHTMLCollection = this.$el.getElementsByClassName(this.engine.CLASS_DINAMIC_BUTTON_PAG);

	        	for(let i = 0;i <= bHTMLCollection.length; i++){
                    let div  = bHTMLCollection[i];
                    if(!this.$check.isUndef(div)){
                    	let button = div.firstChild;
	                    if(this.paginate.pag.page == parseInt(button.textContent)){
		                    button.classList.add(this.engine.CLASS_PERMANENT_OVER);
                        }else{
		                    button.classList.remove(this.engine.CLASS_PERMANENT_OVER);
                        }
                    }
                }

            },
            privateGetPageTitle: function (page){
	            return 'goto page ' + page;

            },
            privateSelectedRow: function (tr) {

                if(  !this.$check.isUndef(this.engine.trCurent)){
                    this.engine.trCurent.removeAttribute('class', this.engine.CLASS_SELECTED);
                }

                this.engine.trCurent = tr;
                if(this.$check.isUndef(this.engine.tdCurent)){
                    this.engine.tdCurent = this.engine.trCurent.cells[0];
                }else{
                    this.engine.tdCurent = this.engine.trCurent.cells[this.engine.tdCurent.cellIndex];
                }

                this.engine.trCurent.setAttribute('class', this.engine.CLASS_SELECTED);

                this.privateGetDataFromTr();

                this.setFocus();

            },
            privateGetDataFromTr: function (){

                let finalSelected = {};
                finalSelected[this.$constGrid.ID_NAME] = this.engine.trCurent.getAttribute(this.$constGrid.ID_NAME);

                let cells = this.engine.trCurent.cells;

                for (const c of cells) {
                    let fieldName = c.firstChild.getAttribute(this.$constGrid.BODY.FIELD_NAME);
                   if(this.pConfig.returnField.includes(fieldName)){
                        finalSelected[fieldName] = c.innerText;
                    }
                }

                this.selectdRow = finalSelected;

                this.privateMakeShowDataSelected();

            },
            privateMakeShowDataSelected: function (){
	            if(this.pConfig.toolbar.show) {

	            	let text = '';

		            for (const cfield of this.pConfig.toolbar.fieldShow.field) {
		            	text += this.selectdRow[cfield] + this.pConfig.toolbar.fieldShow.separator;
                    }

                    if(this.pConfig.toolbar.fieldShow.includeIdPk){
	                    text = '('+ this.selectdRow[this.$constGrid.ID_NAME] +') ' + text;
                    }

		            this.showSelectedData =  text;
	            }

            },
            privateSelectedCell: function (td) {
                this.engine.tdCurent = td;
                this.setFocus();

            },
            privateArrowDown: function () {
                if(this.engine.trCurent.sectionRowIndex < (this.paginate.pag.data.length - 1)) {
                    this.privateSelectedRow(this.engine.trCurent.nextSibling);
                }

            },
            privateArrowUp: function () {
                if(this.engine.trCurent.sectionRowIndex > 0) {
                    this.privateSelectedRow(this.engine.trCurent.previousSibling);
                }

            },
            privateArrowRight: function () {
                if(!this.$check.isUndef(this.engine.tdCurent.nextElementSibling) ){
                    this.privateSelectedCell(this.engine.tdCurent.nextElementSibling);
                }

            },
            privateArrowLeft: function () {
                if(!this.$check.isUndef(this.engine.tdCurent.previousElementSibling) ){
                    this.privateSelectedCell(this.engine.tdCurent.previousElementSibling);
                }

            },
		    emitAction:function(event, action) {
                this.cfgMouseNavigate(event);
                this.$emit(action, this.selectdRow);

            },
	        emitActionToolbar: function (event, action) {
            	if(this.pConfig.toolbar.show) {
		            this.$emit(action, this.getDataSelected());
	            }

	        },
            cfgGrid: function () {
                let divTable = this.$refs[this.REF_DIV_TABLE];

                let headerCells = this.$refs[this.REF_THEAD].rows[0].cells;
                this.cfgGridHeader(headerCells);
                this.cfgGridCRUDbutton();


                let widthPixel = this.pConfig.cfg.width;
                if(parseInt(widthPixel) != NaN){
	                widthPixel = widthPixel  + 'px';
                }

                divTable.style.width = widthPixel;
                divTable.style.height = this.pConfig.cfg.height  + 'px';

            },
            cfgKeyNavigate: function (event){
                if (event.key == 'ArrowRight') {
                    this.privateArrowRight();
                }else if(event.key == 'ArrowLeft'){
                    this.privateArrowLeft();
                }else if(event.key == 'ArrowDown'){
                    this.privateArrowDown();
                }else if(event.key == 'ArrowUp'){
                    this.privateArrowUp();
                }else if(event.key == 'Enter'){
                    //this.selectData();
                    //this.$emit(this.engine.emit.selectData);
                }else if(event.key == 'Tab'){
                    //this.$emit(this.engine.emit.tabKey);
                }
                // console.log('Am apasaat pe: ' + event.key);
            },
            cfgMouseNavigate(event){
                this.engine.tdCurent = event.target.closest('td');
                this.privateSelectedRow(event.target.closest('tr'));
            },
            cfgIconPictureAction: function (icon) {
                return [icon.fawIcon, icon.icon];
            },
            cfgIconColor: function (color) {
                return {
                    color: color
                }
            },
            cfgGridHeader: function (headerCells) {
                for (let i = 0; i < headerCells.length; i++) {
                    let width = this.$vanilla.getAtributeValueFromArrayObject(this.pConfig.header,'id',headerCells[i].getAttribute('id'),'width');
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
            cfgGetTabIndex: function(){
              this.engine.tabIndexValue++;
              return this.engine.tabIndexValue;
            },
            cgfTDStyle: function (fieldName) {
	            let width = this.$vanilla.getAtributeValueFromArrayObject(this.pConfig.header,this.$constGrid.HEADER.TABLE_FIELD_NAME,fieldName,'width');
	            return {
	            	width: width + 'px'
                }
            },
            getTestData: function () {
                let dataTest = new Array();
                //dataTest.push({name: 'Vasile',  'fact de curaj': 'se duce la piata si face cumparaturii 004 si inca un shir foarte lung sper eu', rez: 'nu a castigat nimic 004', var: 'variaza + 4', id: 92});
                //dataTest.push({name: 'Ion',     'fact de curaj': 'se duce la piata si face cumparaturii 005', rez: 'nu a castigat nimic 005', var: 'variaza + 5', id: 93});

                for(let i=0; i<88; i++){
                    dataTest.push({id: i, caption: i+' Vasile fact de curaj', contract: '766600' + i });
                    // dataTest.push({name: i+' Ion',  act: 'se duce la piata si face cumparaturii 00' + i, rez: 'nu a castigat nimic ' +i, var: 'variaza +' + i, id: i+30});
                }

                // this.paginate = this.$vanilla.paginateArray(dataTest);
                return dataTest;
            }

        },
		data () {
			return {
				rezultData: new Array(),
                selectdRow: {},
                showSelectedData: '...',
                paginate: {
				    buttonPageNumber: ['1','2','3','4','5','6'],
                    pag: this.$vanilla.paginateArray(new Array())
                },
				post: {wordSearch: null}
            }
		}
	}
</script>

<style scoped>
</style>
