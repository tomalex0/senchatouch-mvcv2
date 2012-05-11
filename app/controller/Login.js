Ext.define('MVC.controller.Login', {
    extend: 'Ext.app.Controller',
    config: {
        routes: {
            'login': 'loginView'
        },
        refs: {
            loginPanel: 'loginpanel',
            forgotButton: {
                selector: '[itemId="forgotbtn"]'
            },
            loginButton: {
                selector: '[itemId="loginbtn"]'
            }
        },
        control: {
            forgotButton: {
                tap: "forgotNav"
            },
            loginButton: {
                tap: "loginNav"
            }
        }

    },
    getNewView: function () {
        var me = this;
        me.loginview = Ext.create('MVC.view.Login');
        return me.loginview;
    },
    loginView: function (anim) {
        console.log("werwe");
        var controller = this.getApplication().getController('Login'),
        newview = controller.getNewView(), viewportcontroller = this.getApplication().getController('Main');
        viewportcontroller.doNavigation(newview, anim || global_anim);
    },
    forgotNav: function () {
        var viewportcontroller = this.getApplication().getController('Main');
        global_anim = backward_dir;
        viewportcontroller.appRedirect('forgot');
    },
    loginNav: function () {
        var me = this;
        console.log(me.getLoginPanel().getValues());

        me.getLoginPanel().submit({
            url: requestMethod.login,
            standardSubmit: false,
            params: me.getLoginPanel().getValues(),
            waitMsg: { message: 'Submitting', cls: 'form-loading' },
            success: function (form, responseObj, c) {
                var viewportcontroller = me.getApplication().getController('Main');
                global_anim = forward_dir;
                viewportcontroller.appRedirect('usersettings');

            },
            failure: function (from, responseObj) {
                console.log(responseObj.statusText)
                var errortext = (Ext.isObject(responseObj)) ? (responseObj.text || responseObj.statusText) : Ext.decode(responseObj).error;
                Ext.Msg.alert('Error', errortext, Ext.emptyFn);
            }
        });

    }
});