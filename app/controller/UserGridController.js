/*
 * File: app/controller/UserGridController.js
 *
 * This file was generated by Sencha Architect version 2.0.0.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Ext JS 4.0.x library, under independent license.
 * License of Sencha Architect does not include license for Ext JS 4.0.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('MyApp.controller.UserGridController', {
    extend: 'Ext.app.Controller',

    refs: [
        {
            ref: 'UserGrid',
            selector: '#usergrid'
        }
    ],

    onGridpanelSelectionChange: function(tablepanel, selections, options) {
        if(selections[0] && selections[0].data){
            this.getUserGrid().down('#grid').update(selections[0].data); 
            console.log(selections[0].data);
        }
    },

    init: function() {
        this.control({
            "gridpanel": {
                selectionchange: this.onGridpanelSelectionChange
            }
        });

    }

});