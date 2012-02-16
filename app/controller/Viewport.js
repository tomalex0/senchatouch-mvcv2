Ext.define('MVC.controller.Viewport', {
    extend : 'Ext.app.Controller',
    refs : [
        {
            ref      : 'main',
            selector : '[xtype="cdaviewport"]'
        }
    ],
    init : function() {
        console.log(this);
        
        var me = this,
        controller = this.getApplication().getController('Login');
        console.log(this.getApplication().getController('Login'));
        newview = controller.getNewView();
        console.log(controller);
        me.doNavigation(newview);
    },
    doNavigation : function(newView,anim) {
        var me            = this,
            mainView      = this.getMain(),
            mainViewItems = mainView.items,
            viewIndex     = mainViewItems.indexOf(newView),
            currentView   = mainView.getActiveItem();
        if(anim && anim.type){
            Ext.Viewport.getLayout().setAnimation(anim);
        } else {
            Ext.Viewport.getLayout().setAnimation({
                type : 'fade'
            });
        }
        var oldItem = Ext.Viewport.getActiveItem();
        Ext.Viewport.setActiveItem(newView);
        oldItem.destroy();
    }
});