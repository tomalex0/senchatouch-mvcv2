Ext.define('MVC.view.Maps', {
    extend : 'Ext.Panel',
    xtype : 'mappanel',
    alias : 'widget.mappanel',
    config : {
       scope : this,
       scrollable : true,
       items :[{
          xtype : 'navigationbar',
          docked   : 'top',
          ui : 'dark',
          title : 'Maps',
          items :[{
              ui : 'back decline',
              itemId : 'mapsbackbtn',
              align : 'left',
              text : 'Back'
          }]
       },{
          html : '<div style="text-align:center;">Render Maps</div>'
       }]
    }
});
