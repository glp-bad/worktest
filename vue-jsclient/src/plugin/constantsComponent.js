const constantsComponent = {
	install: (app, options) => {
        app.config.globalProperties.$constGrid = {
            idName: 'idPk'
        }
    }
}

export default constantsComponent;
