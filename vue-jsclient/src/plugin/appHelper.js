import startOfMonth from '../../node_modules/date-fns/startOfMonth'
import endOfMonth   from '../../node_modules/date-fns/endOfMonth'
import format       from '../../node_modules/date-fns/format'
import urlList      from "../urlList";
import cssList      from "../cssList";



const appHelper = {
	install: (app, options) => {
        app.config.globalProperties.$url = {
            urlAppHost: process.env.VUE_APP_URL_HOST,
            urlAppLocal: process.env.VUE_APP_URL_LOCAL,
            environment: process.env.VUE_APP_ENV,
            urlList: urlList,
            getUrl: function (name) {
                let objFind = this.urlList.find( data => data.name === name);

                if(objFind === undefined){
                    return "url for [" +name+ "] not found"
                }

                return this.getBaseUrl() + '/' +objFind.url;
            },
            getBaseUrl: function () {
                let url = this.urlAppLocal;
                if(this.environment == 'host'){
                    url = this.urlAppHost;
                }
                return url;
            }
        },
            app.config.globalProperties.$css = {
                cssList: cssList,
                getCss: function (name) {
                    let objFind = this.cssList.find( data => data.name === name);

                    if(objFind === undefined){
                        return "css for [" +name+ "] not found"
                    }

                    return objFind;
                }
            },

            app.config.globalProperties.$vanilla = {
        	    disableButton: function(htmlButton){
		            htmlButton.setAttribute('disabled',true);
		            htmlButton.classList.add('disable');                    // class name
	            },
	            enabledButton: function(htmlButton){
		            htmlButton.removeAttribute('disabled');
		            htmlButton.classList.remove('disable');                    // class name
	            },
                removeClasses: function(htmlElementArray, className){
                    for (var i = 0; i < htmlElementArray.length; i++){
                        htmlElementArray[i].classList.remove(className);
                    }
                },
                addClasses: function(htmlElementArray, className){
                    for (var i = 0; i < htmlElementArray.length; i++){
                        htmlElementArray[i].classList.add(className);
                    }
                },
                dragDiv: function (container, header) {

                    let initialX = 0, initialY = 0, offsetX = 0, offsetY = 0;

                    header.onmousedown = dragMouseDown;

                    function dragMouseDown(e) {
                        e = e || window.event;
                        e.preventDefault();

                        initialX = e.clientX - offsetX;
                        initialY = e.clientY - offsetY;

                        document.onmousemove = elementDrag;
                        document.onmouseup = closeDragElement;

                        // console.log("dragMouseDown: "  + "initialX="+ initialX + " initialY="+initialY)

                    }

                    function elementDrag(e) {
                        e = e || window.event;
                        e.preventDefault();

                        let newX = e.clientX - initialX;
                        let newY = e.clientY - initialY;

                        offsetX = newX;
                        offsetY = newY;

                        //console.log("elementDrag: "  + "newX="+ newX + " newY="+newY)
                        container.style.transform = "translate3d(" + newX + "px, " + newY + "px, 0)";

                    }

                    function closeDragElement() {
                        document.onmouseup = null;
                        document.onmousemove = null;
                    }
                },
                getAtributeValueFromArrayObject: function (objArray, propNameId, propId, propNameReturn){
                    let returnVal = null;
                    for (let i = 0; i < objArray.length; i++) {
                        if(objArray[i][propNameId] == propId){
                            returnVal = objArray[i][propNameReturn];
                            break;
                        }
                    }
                    return returnVal;
                },

	            // for buttons.bt   paginate toolbar
	            generateButton(nrButton){

		            let buttonArray = new Array();
		            for(let i=0; i < nrButton; i++){
			            buttonArray.push(
				            {
					            id:i, caption: (i+1).toString(), selected: false, isDisable: false
				            }
			            );
		            }
		            return buttonArray;
	            },
                paginateArray: function (items, page, per_page, paginateLocal, totalRecords){
                    var page = page || 1,
                        per_page = per_page || 10,
                        offset = (page - 1) * per_page;

	                var  paginatedItems = null;
	                var  total_pages = null;
	                var  total = items.length;;

                    if(paginateLocal){
	                    paginatedItems = items.slice(offset).slice(0, per_page);
	                    total_pages = Math.ceil(total / per_page);
                    }else{
	                    paginatedItems = items;
	                    total_pages = Math.ceil(totalRecords / per_page);
	                    total = totalRecords;
                    }

                    return {
                        page: page,
                        per_page: per_page,
                        pre_page: page - 1 ? page - 1 : null,
                        next_page: (total_pages > page) ? page + 1 : null,
                        total: total,
                        total_pages: total_pages,
                        data: paginatedItems,
	                    buttons: {
		                    label: null,
		                    intializeButtonPage: false,
		                    bt: [
			                    {id:0, caption: '1', selected: false, isDisable: false},
			                    {id:1, caption: '2', selected: false, isDisable: false},
			                    {id:2, caption: '3', selected: false, isDisable: false},
			                    {id:3, caption: '4', selected: false,  isDisable: false},
			                    {id:4, caption: '5', selected: false, isDisable: false},
			                    {id:5, caption: '6', selected: false, isDisable: false}
		                    ]
	                    }
                    };
                }
            },


        app.config.globalProperties.$startEndCurrentMonth = function () {
            let formatString = 'dd/MM/yyyy';

            let curDate = new Date();
            let dataIn  = startOfMonth(curDate);
            let dataSf  = endOfMonth(curDate);
            return {monthIn: format(dataIn, formatString)  , monthSf: format(dataSf, formatString)};
        }

        app.config.globalProperties.$check = {
            isUndef (v) {
                return v === undefined || v === null
            },
            lenghtMinMax(string, min, max){

                let sstring = 0;

                if(!this.isUndef(string)){
                    sstring = string.length;
                }

                let mmin  = parseInt(min);
                let mmax  = parseInt(max);

                if(mmin == NaN){
                    mmin = 0;
                }

                if(mmax == NaN){
                    mmax = 4503599627370495;
                }


                if(sstring >= min && sstring <= max){
                    return true;
                }
                return false;
            },
            validateForm(refs){
                for (const item in refs) {
                    if (typeof refs[item].validate === "function") {
                        refs[item].validate();
                    }
                }
            }

        }


        app.config.globalProperties.$appServer = {
            /**
             *  sqlMessageResponse - from server
             * @param sqlMessageResponse
             */
            getHtmlSqlFormatMessage (sqlMessageResponse) {
                // succes, lastId, messages, errorMsg
                let msg = sqlMessageResponse.messages;

                if(sqlMessageResponse.admin && !sqlMessageResponse.succes){
                    msg = msg + "<br><br>"+
                        sqlMessageResponse.errorMsg ;
                }

                return msg;

            }

        }

        app.config.globalProperties.$app = {
            getObjectReturnComponent (data) {
                return JSON.parse(JSON.stringify(data));
            },
            getFormMessageClass (field, caption, message) {
                return {
                    field: field,
                    caption: caption,
                    message: message
                }
            },
            /**
             *
             * @param messages  (array from getFormMessageClass)
             * @returns {string}
             */
            getHtmlFormatMessage (messages) {
                let msg = "";

                for(var i=0; i < messages.length; i++ ){
                    msg = msg+
                        "<b>" + messages[i].caption + ": &nbsp;</b>"+
                        messages[i].message +  "<br>";
                }

                return msg;

            },
            cfgTextFIeld(){
                return { id: "",
                    minLength: 0,
                    maxLength: 0,
                    validate: "",
                    ref: "",
                    maska: "",
                    caption: "",
                    mandatory: false,
                    sizeField: 0,
                    setIdAndRef: function (id) {
                        this.id = id;
                        this.ref = id+'Ref';
                    }
                };

            },
            cfgCheckBox() {
                return {
                    id: "",
                    ref: "",
                    validate: "",
                    caption: "",
                    defaultValue: false,
                    disabled: false,
                    setIdAndRef: function (id) {
                        this.id = id;
                        this.ref = id+'Ref';
                    }
                };
            },
            cfgSelectSimple() {
                return {
                    id: "",
                    ref: "",
                    validate: "",
                    mandatory: false,
                    caption: "",
                    defaultValue: {id: 0, text: ''},
                    disabled: false,
                    width: 0,
                    setIdAndRef: function (id) {
                        this.id = id;
                        this.ref = id+'Ref';
                    }
                };
            }
        }



	}


}

export default appHelper;
