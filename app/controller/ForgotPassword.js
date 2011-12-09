Ext.define('MVC.controller.ForgotPassword', {
    extend : 'Ext.app.Controller',
    views : [
        'ForgotPassword'
    ],
    refs : [
        {
            ref      : 'resetButton',
            selector : '[itemId="reset"]'
        },
        {
            ref      : 'loginButton',
            selector : '[itemId="backtologinbtn"]'
        }
    ],
    init : function(){
        var me = this;
        this.control({
            // Back button
            '[itemId="reset"]' : {
                tap : function(){
                    this.resettNav();
                }
            },
            // Nav button
            '[itemId="backtologinbtn"]' : {
                tap : function(){
                    this.loginNav();
                }
            }
        });
    },
    getNewView : function(){
        var me = this;
        me.view = me.getView('ForgotPassword').create();
        return me.view;
    },
    resettNav : function(){
        console.log("forgotNav");
    },
    loginNav : function(){
        controller = this.getController('Login'),
        newview = controller.getNewView(),viewportcontroller = this.getController('Viewport');
        viewportcontroller.doNavigation(newview,backward_dir);
    }
});