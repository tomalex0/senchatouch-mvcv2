Ext.define('MVC.view.Main', {
    extend: 'Ext.Container',
    xtype : 'mainpanel',
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
