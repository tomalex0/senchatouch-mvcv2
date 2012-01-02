Ext.define('MVC.controller.UserTab', {
    extend : 'Ext.app.Controller',
    views : [
        'UserTab',
        'UserList',
        'EditUser',
        'Maps'
    ],
    init : function(){
        var me = this;
        this.control({
            // Back button
            '[itemId="userlistbackbtn"]' : {
                tap : function(){
                    me.getUserSettings();
                }
            },
            '[itemId="edituserbackBtn"]' : {
                tap : function(){
                    me.backToUserList();
                }
            },
            '[itemId="mapsbackbtn"]' : {
                tap : function(){
                    me.getUserSettings();
                }
            }
            
            
            
        });
    },
    getNewView : function(){
        var me = this;
        me.usertabview = me.getView('UserTab').create();
        me.userTab   = me.usertabview.query("#usertabId")[0];
        me.mapTab   = me.usertabview.query("#maptabId")[0];
        
        me.userTab.on({
            'painted' : function(){
                console.log("userTab painted");
                var userlistpanel = me.getUserList();
                me.doNavigation(me.userTab,userlistpanel,forward_dir);
            },
            'erased' : function(){
                console.log("userTab erased");
            }
        });
        
        me.mapTab.on({
            'painted' : function(){
                console.log("mapTab painted");
                var mappanel = me.getMapPanel();
                me.doNavigation(me.mapTab,mappanel,forward_dir)
            },
            'erased' : function(){
                console.log("mapTab erased");
            }
        });
        
        return me.usertabview;
    },
    getUserList : function(){
        var me = this, userStore = this.getStore('User');
        
        me.userview = me.getView('UserList').create({
            store : userStore
        });
        
        me.userview.on('disclose',function(rec){
            console.log(rec);
            var controller = me.getController('UserTab'),
                newview = controller.getUserForm(rec),viewportcontroller = me.getController('Viewport');
                me.doNavigation(me.userTab,newview,forward_dir);
        });
        me.userview.on({
            'erased' : function(cmp){
                //cmp.destroy();
            },
            'painted' : function(){
                console.log("userview painted");
            }
        });
        
        return me.userview;
    },
    getUserForm : function(record){
        var me = this;
        me.edituser = me.getView('EditUser').create();
        me.edituser.setValues(record.data);
        console.log(me.edituser);
        return me.edituser;
    },
    getMapPanel : function(){
        var me = this;
        
        me.mapview = me.getView('Maps').create();
        me.mapview.on({
            'erased' : function(cmp){
                console.log("mapview erased");
                //cmp.destroy();
            },
            'painted' : function(){
                 console.log("mapview painted");
            }
        });
        return me.mapview;
    },
    doNavigation : function(tab,newView,anim) {
        var me            = this, oldItem = tab.getActiveItem();
        
        if(anim && tab.getLayout().setAnimation){
            tab.getLayout().setAnimation(anim);
        }
        
        tab.setActiveItem(newView,anim);
        if(oldItem){
            oldItem.destroy();
        }
        
    },
    getUserSettings : function(){
         var me = this, controller = me.getController('User'),
                newview = controller.getNewView(),viewportcontroller = me.getController('Viewport');
                viewportcontroller.doNavigation(newview,backward_dir);
    },
    backToUserList : function(){
        var me = this, userlistpanel = me.getUserList();
        console.log(me.userTab);
        me.doNavigation(me.userTab,userlistpanel,backward_dir);
    }
});