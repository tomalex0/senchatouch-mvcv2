Ext.define('MVC.view.UserSettings', {
    extend : 'Ext.List',
    xtype : 'usersettings',
    
    config : {
        scrollable : true,
        allowDeselect: true,
        onItemDisclosure : true,
        grouped: false,
        indexBar: false,
        preventSelectionOnDisclose :true,
        items :[{
            xtype : 'titlebar',
            docked   : 'top',
            ui : 'dark',
            title : 'User Settings',
            items :[{
                ui : 'decline',
                itemId : 'logoutbtn',
                align : 'left',
                text : 'Logout'
            }]
        }],
        //emptyText : '<div class="emptyText">No User Found</div>',
        itemTpl: '{text}',
        singleSelect: true
    },
    initialize : function() {
        var me = this;
        
        me.callParent();
    }
});
