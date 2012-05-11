Ext.define('MVC.view.Login', {
   extend : 'Ext.form.Panel',
    xtype : 'loginpanel',
    config : {
        scrollable : true,
        items :[{
            xtype : 'toolbar',
            docked   : 'top',
            title: 'Login'
        },{
            xtype : 'fieldset',
            centered : true,
            margin : '0 35 0 0',
            defaults: {
                labelWidth : 100
            },
            items :[{
                xtype : 'textfield',
                label : 'Username',
                name  : 'username'
            },{
                xtype : 'passwordfield',
                label : 'Password',
                name  : 'password'
            }]
        },{
            xtype : 'titlebar',
            docked   : 'bottom',
            items:[{
                text : 'Forgot Password',
                ui : 'decline',
                itemId : 'forgotbtn',
                align : 'left'
            },{
                text : 'Login',
                ui : 'action',
                itemId : 'loginbtn',
                align : 'right'
            }]
        }]
    }
});