
Ext.application({
    name               : 'MVC',
    icon: 'resources/img/icon.png',
    tabletStartupScreen: 'resources/images/tablet_startup.png',
    phoneStartupScreen: 'resources/images/phone_startup.png',
    //appFolder          : 'app',
    autoCreateViewport : true,
    controllers : ['UserTab','User','Login','ForgotPassword','Viewport'],
    config : {
        controllers : ['UserTab','User','Login','ForgotPassword','Viewport']
    },
    launch : function() {
        console.log(this.getController('Login'));
    }
});

