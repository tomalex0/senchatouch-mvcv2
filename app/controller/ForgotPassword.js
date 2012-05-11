Ext.define('MVC.controller.ForgotPassword', {
    extend : 'Ext.app.Controller',
    config: {
        routes: {
            'forgot': 'forgotView'
        },
        refs: {
            loginPanel: 'loginpanel',
            resetButton: {
                selector : '[itemId="resetbtn"]'
            },
            loginButton: {
                selector : '[itemId="backtologinbtn"]'
            }
        },
        control: {
            resetButton: {
                tap: "resetNav"
            },
            loginButton: {
                tap: "loginNav"
            }
        }
        
    },
    getNewView : function(){
        var me = this;
        me.view = Ext.create('MVC.view.ForgotPassword');
        return me.view;
    },
    forgotView : function(anim){
        var controller = this.getApplication().getController('ForgotPassword'),
        newview = controller.getNewView(),viewportcontroller = this.getApplication().getController('Main');
        viewportcontroller.doNavigation(newview, anim || global_anim);
    },
    resetNav : function(){
        console.log("resetNav");
    },
    loginNav : function(){
        controller = this.getApplication().getController('Login'),
        newview = controller.loginView(forward_dir);
    }
});