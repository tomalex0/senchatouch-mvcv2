Ext.define('MVC.controller.User', {
    extend : 'Ext.app.Controller',
    views : [
        'UserList',
        'UserSettings'
    ],
    stores : [
        'User',
        'UserSettings'
    ],
    refs : [
        {
            ref      : 'logoutButton',
            selector : '[itemId="logoutbtn"]'
        }
    ],
    init : function(){
        var me = this;
        this.control({
            // Back button
            '[itemId="logoutbtn"]' : {
                tap : function(){
                    this.logoutNav();
                }
            }
        });
    },
    getNewView : function(){
        var me = this,userStore = this.getStore('UserSettings');
        
        me.userview = me.getView('UserSettings').create({
            store : userStore
        });
        me.userview.on('disclose',function(rec){
            var tabcontroller = me.getController('UserTab');
            newview = tabcontroller.getNewView(),viewportcontroller = me.getController('Viewport');
            viewportcontroller.doNavigation(newview,forward_dir);
        });
        
        return me.userview;
    },
    logoutNav : function(){
        controller = this.getController('Login'),
        newview = controller.getNewView(),viewportcontroller = this.getController('Viewport');
        viewportcontroller.doNavigation(newview,backward_dir);
    }
});