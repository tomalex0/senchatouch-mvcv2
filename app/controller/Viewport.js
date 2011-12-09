Ext.define('MVC.controller.Viewport', {
    extend : 'Ext.app.Controller',
    refs : [
        {
            ref      : 'main',
            selector : '[xtype="cdaviewport"]'
        }
    ],
    init : function() {
        var me = this,
        controller = this.getController('Login'),
        newview = controller.getNewView();
        
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