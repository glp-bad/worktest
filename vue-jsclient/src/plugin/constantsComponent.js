const constantsComponent = {
	install: (app, options) => {
		app.config.globalProperties.$constComponent = {
			ICON_SPINNER: ['fas', 'spinner']


		},
        app.config.globalProperties.$constGrid = {
            ID_NAME: 'idPk',
            ICON_CLASS: 'fas',
            ICON_PRINT:  {fawIcon:'fas', icon: 'print', color: "darkgreen"},
            ICON_EDIT:   {fawIcon:'fas', icon: 'edit',  color: "darkblue"},
            ICON_DELETE: {fawIcon:'fas', icon: 'times', color: "darkred"},
	        ICON_UP_ORDER: {fawIcon:'fas', icon: 'caret-up', color: null},
	        ICON_DOWN_ORDER: {fawIcon:'fas', icon: 'caret-down', color: null},
	        ICON_FILTER: {fawIcon:'fas', icon: 'ellipsis-v', color: null},
            getIcon: function (fawIcon, icon, color) {
                return {fawIcon:fawIcon, icon: icon, color: color}
            },
            HEADER: {
                CAPTION_TYPE_FIELD: 'field'  ,
                CAPTION_TYPE_ACTION: 'action',
                TABLE_FIELD_NAME: 'tableFieldName',
                getHeader: function (id, caption, width, tableFieldName, type, orderBy, filterBy) {

                	if(type == this.CAPTION_TYPE_ACTION){
		                orderBy = false;
		                filterBy = false;
	                }

                    return {id: id, caption: caption,   width: width,  tableFieldName: tableFieldName,  type: type, orderBy: orderBy, filterBy: filterBy};
                }
            },
            BODY:{
                FIELD_NAME: 'fieldName'
            },
            getActionButton: function (id, tooltip, emitAction, icon) {
                return {id: id, tooltip: tooltip, emitAction: emitAction, icon: icon };
            }
        }
    }
}

export default constantsComponent;
