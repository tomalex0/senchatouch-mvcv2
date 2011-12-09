Ext.define('MVC.view.ForgotPassword', {
   extend : 'Ext.form.Panel',
   xtype : 'forgotpassword',
   config : {
        scrollable : true,
        items :[{
            xtype : 'toolbar',
            docked   : 'top',
            title: 'Forgot Password',
            items : [{
               text : 'Login',
               ui : 'back confirm',
               itemId : 'backtologinbtn',
               align : 'left'
            }]
        },{
            xtype : 'fieldset',
            centered : true,
            margin : '0 35 0 0',
            defaults: {
                labelWidth : 40,  
            },
            items :[{
                xtype : 'emailfield',
                label : 'Email',
                name  : 'email'
            }]
        },{
            xtype : 'navigationbar',
            docked   : 'bottom',
            items:[{
                text : 'Reset Password',
                ui : 'decline',
                itemId : 'reset',
                align : 'right'
            }]
        }]
    }
});