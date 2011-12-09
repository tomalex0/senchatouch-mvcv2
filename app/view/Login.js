Ext.define('MVC.view.Login', {
   extend : 'Ext.form.Panel',
    xtype : 'login',
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
                labelWidth : 60,  
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
            xtype : 'navigationbar',
            docked   : 'bottom',
            items:[{
                text : 'Forgot Password',
                ui : 'decline',
                itemId : 'forgot',
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