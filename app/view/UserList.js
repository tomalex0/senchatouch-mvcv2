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
        preventSelectionOnDisclose :true,
        items :[{
            xtype : 'navigationbar',
            docked   : 'top',
            ui : 'dark',
            title : 'User List',
            items :[{
                ui : 'back decline',
                itemId : 'userlistbackbtn',
                align : 'left',
                text : 'Back'
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