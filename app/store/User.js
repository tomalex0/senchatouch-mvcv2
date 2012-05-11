Ext.define('MVC.store.User', {
    extend   : 'Ext.data.Store',
    config : {
        model    : 'MVC.model.User',
        sorters: 'firstName',
        grouper : {
            groupFn   : function(record){
                return record.get('firstName')[0];
            }
        },
        data: [
            {firstName: 'Tommy', lastName: 'Maintz', id : 1},
            {firstName: 'Ed', lastName: 'Spencer',id : 2},
            {firstName: 'Jamie', lastName: 'Avins',id : 3},
            {firstName: 'Aaron', lastName: 'Conran',id : 4},
            {firstName: 'Dave', lastName: 'Kaneda',id : 5},
            {firstName: 'Michael', lastName: 'Mullany',id : 6},
            {firstName: 'Abraham', lastName: 'Elias',id : 7},
            {firstName: 'Jay', lastName: 'Robinson',id : 8},
            {firstName: 'Zed', lastName: 'Zacharias',id : 9}
        ]   
    }
});


