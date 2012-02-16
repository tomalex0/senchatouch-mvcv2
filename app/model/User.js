Ext.define('MVC.model.User', {
    extend : 'Ext.data.Model',
    config :{
        fields :  [
            'firstName',
            'lastName'
        ]   
    }
});

Ext.define('MVC.model.UserSettings', {
    extend : 'Ext.data.Model',
    config : {
        fields :  [
            'text',
            'id'
        ]
    }
});