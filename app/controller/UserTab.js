Ext.define('MVC.controller.UserTab', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            'userlist': 'showUserList',
            'maps': 'showMaps',
            'user/:id': 'showUserForm'
        },
        refs: {
            userListBack: {
                selector: '[itemId="userlistbackbtn"]'
            },
            editUserBack: {
                selector: '[itemId="edituserbackBtn"]'
            },
            mapsBack: {
                selector: '[itemId="mapsbackbtn"]'
            },
            userTab: {
                selector: '[itemId="usertabId"]'
            },
            mapTab: {
                selector: '[itemId="maptabId"]'
            },
            mainTabPanel: {
                selector: 'usertab',
                xtype: 'usertab'
            },
            userListPanel: {
                selector: 'userlist',
                xtype: 'userlist'
            },
            editUserPanel: {
                selector: 'edituser',
                xtype: 'edituser'
            },
            mapUiPanel: {
                selector: 'mappanel',
                xtype: 'mappanel'
            }
        },
        control: {
            userListBack: {
                tap: "getUserSettings"
            },
            editUserBack: {
                tap: "backToUserList"
            },
            mapsBack: {
                tap: "getUserSettings"
            }
        }

    },
    getNewView: function () {
        var me = this;
        Ext.create('MVC.view.UserTab');


        me.getUserTab().on({
            'painted': function () {

                me.showUserList(forward_dir);
            }
        });

        me.getMapTab().on({
            'painted': function () {
                me.showMaps(forward_dir);
            }
        });

        me.getMainTabPanel().on({
            'activeitemchange': function (container, tab) {
                var viewportcontroller = me.getApplication().getController('Main');
                global_anim = forward_dir;

                if (tab.getItemId() == "maptabId") {
                    viewportcontroller.appRedirect('maps');
                } else if (tab.getItemId() == "usertabId") {
                    viewportcontroller.appRedirect('userlist');
                }
            }
        });


        return me.getMainTabPanel();
    },
    showTabView: function () {



        var me = this, tabcontroller = me.getApplication().getController('UserTab'),
        newview = tabcontroller.getNewView(), viewportcontroller = me.getApplication().getController('Main');
        viewportcontroller.doNavigation(newview, forward_dir);
    },
    getUserList: function () {
        var me = this;


        Ext.create('MVC.view.UserList', {
            store: Ext.getStore('User')
        });

        me.getUserListPanel().on('disclose', function (list, rec) {
            console.log(rec.get('id'));
            var viewportcontroller = me.getApplication().getController('Main');
            global_anim = forward_dir;
            viewportcontroller.appRedirect('user/' + rec.get('id'));
        });
        me.getUserListPanel().on({
            'erased': function (cmp) {
                console.log("userview erased");
                cmp.destroy();
            },
            'painted': function () {
                console.log("userview painted");
            }
        });

        return me.getUserListPanel();
    },
    showUserList: function (anim) {
        var me = this;
        if (!me.getMainTabPanel()) {
            me.showTabView();
        }
        if (me.getUserList()) {
            me.getUserList().destroy();
        }
        var userlistpanel = me.getUserList();

        console.log(userlistpanel, "sdf");
        me.getMainTabPanel().setActiveItem(0);
        me.doNavigation(me.getUserTab(), userlistpanel, anim || global_anim);
    },
    showUserForm: function (id) {

        console.log("its here");
        //Ext.create('MVC.view.UserTab');
        var me = this;


        if (!me.getMainTabPanel()) {
            me.showTabView();
        }

        var record = Ext.getStore('User').findRecord('id', id)
        if (me.getEditUserPanel()) {
            me.getEditUserPanel().destroy();
        }
        Ext.create('MVC.view.EditUser');

        me.getEditUserPanel().on({
            'erased': function (cmp) {
                console.log("editform erased");
                cmp.destroy();
            },
            'painted': function () {
                console.log("editform painted");
            }
        });

        if (record) {
            me.getEditUserPanel().setValues(record.data);
            me.getMainTabPanel().setActiveItem(0);
            me.doNavigation(me.getUserTab(), me.getEditUserPanel(), global_anim);
        } else {
            var viewportcontroller = me.getApplication().getController('Main');
            viewportcontroller.appRedirect('userlist');
        }
    },
    showMaps: function (anim) {
        console.log("showmaps");
        var me = this;
        if (!me.getMainTabPanel()) {
            me.showTabView();
        }

        if (me.getMapUiPanel()) {
            me.getMapUiPanel().destroy();
        }

        Ext.create('MVC.view.Maps');
        me.getMapUiPanel().on({
            'erased': function (cmp) {
                console.log("mapview erased");
                cmp.destroy();
            }
        });
        me.getMainTabPanel().setActiveItem(1);
        me.doNavigation(me.getMapTab(), me.getMapUiPanel(), anim || global_anim)
    },
    doNavigation: function (tab, newView, anim) {
        console.log(tab);
        var me = this, oldItem = tab.getActiveItem();

        if (anim && tab.getLayout().setAnimation) {
            tab.getLayout().setAnimation(anim);
        }

        tab.setActiveItem(newView, anim);
        if (oldItem) {
            oldItem.destroy();
        }

    },
    getUserSettings: function () {
        var me = this, viewportcontroller = me.getApplication().getController('Main');
        global_anim = backward_dir;
        viewportcontroller.appRedirect('usersettings');

    },
    backToUserList: function () {
        var me = this, viewportcontroller = me.getApplication().getController('Main');
        global_anim = backward_dir;
        viewportcontroller.appRedirect('userlist');
    }
});