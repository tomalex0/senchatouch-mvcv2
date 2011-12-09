var backward_dir = {type : 'slide', direction : 'right'};
var forward_dir  = {type : 'slide', direction : 'left' };

var basePath = "app/data/"
var requestMethod = {
    login :  basePath+"login.json"
}
/**
 * Override to fix issue in Android with sticky input fields when it is focused and submitted
 */
Ext.override(Ext.form.Panel,{
    submit: function(options) {
        
        var me = this,
            form = me.element.dom || {},
            formValues,formpanel = me;

        options = Ext.apply({
            url : me.getUrl() || form.action,
            submit: false,
            method : form.method || 'post',
            autoAbort : false,
            params : null,
            waitMsg : null,
            headers : null,
            success : null,
            failure : null
        }, options || {});

        formValues = me.getValues(me.getStandardSubmit() || !options.submitDisabled);
        
        Ext.each(formpanel.getFieldsAsArray(),function(item,index){
            if(item.setDisabled){
                item.setDisabled(true);
            }
        });

        if (me.getStandardSubmit()) {
            if (options.url && Ext.isEmpty(form.action)) {
                form.action = options.url;
            }

            form.method = (options.method || form.method).toLowerCase();

            if (me.fireEvent('beforesubmit', me, formValues, options) !== false) {
                form.submit();
            }
        }
        else {
            if (me.fireEvent('beforesubmit', me, formValues, options) !== false) {
                if (options.waitMsg) {
                    me.showMask(options.waitMsg);
                }

                return Ext.Ajax.request({
                    url: options.url,
                    method: options.method,
                    rawData: Ext.urlEncode(Ext.apply(
                        Ext.apply({}, me.getBaseParams() || {}),
                        options.params || {},
                        formValues
                    )),
                    autoAbort: options.autoAbort,
                    headers: Ext.apply(
                        {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                        options.headers || {}),
                    scope    : me,
                    callback: function(callbackOptions, success, response) {
                        Ext.each(formpanel.getFieldsAsArray(),function(item,index){
                            if(item.setDisabled){
                                item.setDisabled(false);
                            }
                        });
                        var me = this,
                            responseText = response.responseText,
                            failureFn;
                        me.hideMask();
                        failureFn = function() {
                            if (Ext.isFunction(options.failure)) {
                                options.failure.call(options.scope || me, me, response, responseText);
                            }
                            me.fireEvent('exception', me, response);
                        };

                        if (success) {
                            response = Ext.decode(responseText);
                            success = !!response.success;
                            if (success) {
                                if (Ext.isFunction(options.success)) {
                                    options.success.call(options.scope || me, me, response, responseText);
                                }
                                me.fireEvent('submit', me, response);
                            } else {
                                failureFn();
                            }
                        }
                        else {
                            failureFn();
                        }
                    }
                });
            }
        }
    }
});

/**
 * Override to fix some issue with dom style when setAnimation is used and card is made active
 */
Ext.override(Ext.fx.runner.Css,{
    applyStyles: function(styles) {
        var id, element, elementStyle, properties, name, value;
        
        for (id in styles) {
            element = document.getElementById(id);
            if(element){
                elementStyle = element.style;
                properties = styles[id];
                for (name in properties) {
                    value = this.formatValue(properties[name], name);
                    name = this.formatName(name);
                    elementStyle.setProperty(name, value, 'important');
                }
            }
        }
        return this;
    }

});