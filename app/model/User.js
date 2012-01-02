Ext.define('MVC.model.User', {
    extend : 'Ext.data.Model',
    fields :  [
        'firstName',
        'lastName'
    ]
});

Ext.define('MVC.model.UserSettings', {
    extend : 'Ext.data.Model',
    fields :  [
        'text',
        'id'
    ]
});