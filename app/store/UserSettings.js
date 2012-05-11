Ext.define('MVC.store.UserSettings', {
    extend   : 'Ext.data.Store',
    config : {
        model    : 'MVC.model.UserSettings',
        autoLoad:true,
        sorters: 'id',
        data: [
            {text: 'View Users', id : 1}
        ]   
    }
});