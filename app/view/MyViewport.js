/*
 * File: app/view/MyViewport.js
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

Ext.define('MyApp.view.MyViewport', {
    extend: 'Ext.container.Viewport',
    requires: [
        'MyApp.view.ExplorerTreePanel',
        'MyApp.view.UserGridPanel'
    ],

    autoScroll: false,
    layout: {
        type: 'border'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'explorertreepanel',
                    collapsible: true,
                    region: 'east',
                    split: true
                },
                {
                    xtype: 'panel',
                    height: 150,
                    collapsible: true,
                    hideCollapseTool: true,
                    region: 'north',
                    split: true
                },
                {
                    xtype: 'usergridpanel',
                    region: 'center'
                },
                {
                    xtype: 'panel',
                    width: 150,
                    layout: {
                        align: 'stretch',
                        type: 'vbox'
                    },
                    collapsed: false,
                    collapsible: true,
                    title: 'My Panel',
                    region: 'west',
                    split: true,
                    items: [
                        {
                            xtype: 'combobox',
                            height: 20
                        },
                        {
                            xtype: 'treepanel',
                            id: 'gusxmltreepanel',
                            width: 150,
                            collapsed: false,
                            title: 'GUS XML Tree Panel',
                            store: 'GUSXmlTreeStore',
                            flex: 1,
                            viewConfig: {
                                rootVisible: false
                            },
                            columns: [
                                {
                                    xtype: 'treecolumn',
                                    renderer: function(value, metaData, record, rowIndex, colIndex, store, view) {
                                        return unescape(value);
                                    },
                                    hidden: false,
                                    id: 'idTreeColumn',
                                    defaultWidth: 200,
                                    dataIndex: 'label',
                                    flex: 1,
                                    menuDisabled: false,
                                    text: ''
                                }
                            ],
                            listeners: {
                                beforeexpand: {
                                    fn: me.onGusxmltreepanelBeforeExpand,
                                    scope: me
                                }
                            }
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    onGusxmltreepanelBeforeExpand: function(p, animate, options) {
        console.log(p);
    }

});