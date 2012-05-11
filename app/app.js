Ext.application({
    name: 'MVC',
    icon: 'resources/img/icon.png',
    tabletStartupScreen: 'resources/images/tablet_startup.png',
    phoneStartupScreen: 'resources/images/phone_startup.png',
    //appFolder          : 'app',
    autoCreateViewport: true,
    models : ['User','UserSettings'],
    stores : ['User','UserSettings'],
    controllers: ['Main','Login','ForgotPassword','User','UserTab'],
    views: ['Login','ForgotPassword','UserList','UserSettings','UserTab','UserList','EditUser','Maps'],
   
    launch: function() {
       //this.redirectTo('login');
    }
});