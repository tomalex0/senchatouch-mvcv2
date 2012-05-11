Ext.define('MVC.view.EditUser', {
   extend : 'Ext.form.Panel',
   xtype : 'edituser',
   alias : 'widget.edituser',
   config : {
        scope : this,
        scrollable : true,
        items :[{
            xtype : 'titlebar',
            ui : 'light',
            docked   : 'top',
            title: 'Edit User',
            items : [{
               text : 'Back',
               ui : 'back decline',
               itemId : 'edituserbackBtn'
            },{
               text : 'Submit',
               ui : 'action',
               itemId : 'submitBtn',
               align : 'right'
            }]
        },{
            xtype : 'fieldset',
            defaults: {
               labelWidth: '40%'
            },
            items :[{
               xtype : 'textfield',
               label : 'FirstName',
               name : 'firstName'
            },{
               xtype : 'textfield',
               label : 'LastName',
               name : 'lastName'
            }]
        }]
    }
});