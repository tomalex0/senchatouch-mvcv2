Ext.define('MVC.controller.Main', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            '': 'initialLog'
        }
    },
    initialLog: function () {
        this.appRedirect('login');
    },
    doNavigation: function (newView, anim) {
        var me = this,
            mainView = Ext.Viewport,
            mainViewItems = mainView.items,
            viewIndex = mainViewItems.indexOf(newView),
            currentView = mainView.getActiveItem();

        if (anim && anim.type) {
            try {
                Ext.Viewport.getLayout().setAnimation(anim);
            } catch (e) {
                console.log(e);
            }
        } else {
            try {
                Ext.Viewport.getLayout().setAnimation({
                    type: 'fade'
                });
            } catch (e) {
                console.log(e);
            }
        }
        var oldItem = Ext.Viewport.getActiveItem();
        Ext.Viewport.add(newView);
        Ext.Viewport.setActiveItem(newView);
        if (oldItem) {
            oldItem.destroy();
        }
    },
    appRedirect: function (page) {
        this.redirectTo(page);
    }
});