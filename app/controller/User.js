Ext.define('MVC.controller.User', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'logout': 'logoutNav',
            'usersettings': 'showUserSettings'
        },

        refs: {
            logoutButton: {
                selector: '[itemId="logoutbtn"]'
            },
            userSettings: {
                selector: 'usersettings',
                xtype: 'usersettings'
            }
        },
        control: {
            logoutButton: {
                tap: "logoutNav"
            },
            userSettings: {
                disclose: "userSettingsNav"
            }
        }

    },
    getNewView: function () {
        var me = this;
        Ext.create('MVC.view.UserSettings', {
            store: Ext.getStore('UserSettings'),
            disclosure: true
        });

        return me.getUserSettings();
    },
    showUserSettings: function (anim) {
        var me = this, newview = me.getNewView(),
        viewportcontroller = me.getApplication().getController('Main');
        viewportcontroller.doNavigation(newview, anim || global_anim);
    },
    userSettingsNav: function () {
        var me = this, viewportcontroller = me.getApplication().getController('Main');
        global_anim = forward_dir;
        viewportcontroller.appRedirect('userlist');

        
    },
    logoutNav: function () {

        var me = this, viewportcontroller = me.getApplication().getController('Main');
        global_anim = backward_dir;
        viewportcontroller.appRedirect('login');
    }
});