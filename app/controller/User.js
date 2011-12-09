Ext.define('MVC.controller.User', {
    extend : 'Ext.app.Controller',
    views : [
        'UserList'
    ],
    stores : [
        'User'
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
        var me = this,userStore = this.getStore('User');
        
        me.userview = me.getView('UserList').create({
            store : userStore
        });
        me.userview.on('disclose',function(rec){
            alert(rec.get('firstName')+" "+rec.get('lastName'))
        });
        
        return me.userview;
    },
    logoutNav : function(){
        controller = this.getController('Login'),
        newview = controller.getNewView(),viewportcontroller = this.getController('Viewport');
        viewportcontroller.doNavigation(newview,backward_dir);
    }
});