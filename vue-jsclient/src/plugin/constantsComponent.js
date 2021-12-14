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
            getIcon: function (fawIcon, icon, color) {
                return {fawIcon:fawIcon, icon: icon, color: color}
            },
            HEADER: {
                CAPTION_TYPE_FIELD: 'field'  ,
                CAPTION_TYPE_ACTION: 'action',
                TABLE_FIELD_NAME: 'tableFieldName',
                getHeader: function (id, caption, width, tableFieldName, type) {
                    return {id: id, caption: caption,   width: width,  tableFieldName: tableFieldName,    type: type};
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
