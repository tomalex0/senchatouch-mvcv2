Ext.define('MVC.view.UserList', {
    extend : 'Ext.dataview.List',
    xtype : 'userlist',
    alias : 'widget.userlist',
    config : {
        scrollable : true,
        allowDeselect: true,
        disclosure: true,
        grouped: true,
        indexBar: true,
        items :[{
            xtype : 'navigationbar',
            docked   : 'top',
            ui : 'dark',
            title : 'User List',
            items :[{
                ui : 'decline',
                itemId : 'logoutbtn',
                align : 'left',
                text : 'Logout'
            }]
        }],
        //emptyText : '<div class="emptyText">No User Found</div>',
        itemTpl: '{firstName} {lastName}',
        singleSelect: true
    },
    initialize : function() {
        var me = this;
        
        me.callParent();
    }
});
