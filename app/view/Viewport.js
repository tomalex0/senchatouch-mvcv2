Ext.define('MVC.view.Viewport', {
    extend: 'Ext.Container',
    xtype : 'cdaviewport',
    config: {
        fullscreen: true,
        scrollable : false,
        layout     : {
            type : 'card',
            animation: {
                type: 'slide',
                direction: 'left'
            }
        }
    }
});
