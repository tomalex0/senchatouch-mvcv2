Ext.define('MVC.view.UserTab', {
    extend: 'Ext.TabPanel',
    xtype : 'usertab',
    alias : 'widget.usertab',
    config: {
        tabBarPosition: 'bottom',
        items: [
            {
                xtype: 'panel',
                title : 'User',
                iconCls : 'user',
                itemId : 'usertabId',
                layout     : {
                    type : 'card',
                    animation: {
                        type: 'slide',
                        direction: 'left'
                    }
                }
            },
            {
                xtype: 'panel',
                title : 'Maps',
                iconCls : 'maps',
                itemId : 'maptabId',
                layout     : {
                    type : 'card',
                    animation: {
                        type: 'slide',
                        direction: 'left'
                    }
                }
                
            }
        ]
    }
});