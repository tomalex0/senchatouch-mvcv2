Ext.define('MVC.controller.Login', {
    extend : 'Ext.app.Controller',
    views : [
        'Login'
    ],
    refs : [
        {
            ref      : 'forgotButton',
            selector : '[itemId="forgot"]'
        },
        {
            ref      : 'loginButton',
            selector : '[itemId="loginbtn"]'
        }
    ],
    init : function(){
        var me = this;
        this.control({
            // Back button
            '[itemId="forgot"]' : {
                tap : function(){
                    this.forgotNav();
                }
            },
            // Nav button
            '[itemId="loginbtn"]' : {
                tap : function(){
                    this.loginNav();
                }
            }
        });
    },
    getNewView : function(){
        var me = this;
        me.loginview = me.getView('Login').create();
       
        return me.loginview;
    },
    forgotNav : function(){
        controller = this.getController('ForgotPassword'),
        newview = controller.getNewView(),viewportcontroller = this.getController('Viewport');
        viewportcontroller.doNavigation(newview,forward_dir);
    },
    loginNav : function(){
        var me = this;
        me.loginview.submit({
            url  : requestMethod.login,
            standardSubmit: false,
            params : me.loginview.getValues(),
            waitMsg : {message:'Submitting', cls : 'form-loading'},
            success: function(form,responseObj,c) {
                var controller = me.getController('User'),
                newview = controller.getNewView(),viewportcontroller = me.getController('Viewport');
                viewportcontroller.doNavigation(newview,forward_dir);
                
            },
            failure : function(from,responseObj){
                console.log(responseObj.statusText)
                var errortext = (Ext.isObject(responseObj)) ? (responseObj.text || responseObj.statusText) : Ext.decode(responseObj).error;
                Ext.Msg.alert('Error',errortext , Ext.emptyFn);
            }
        });
        
    }
});