/* ************************************************************************

   qooxdoo - the new era of web development

   http://qooxdoo.org

   Copyright:
     2004-2010 1&1 Internet AG, Germany, http://www.1und1.de

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Tristan Koch (tristankoch)
     * Chris Eskew (sqville) 1/21/2021 - included controls to show new, ville.Fluent, appearances 

************************************************************************ */

/**
 * Demonstrates ville.theme.Fluent extra appearance entries:
 *
 *
 */

qx.Class.define("widgetbrowser.pages.Extras",
{
  extend: widgetbrowser.pages.AbstractPage,

  construct: function()
  {
    this.base(arguments);

    var hbox = this.__hbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(3));
    this.add(hbox, {top: 20});

    this.__grid = new qx.ui.container.Composite(new qx.ui.layout.Grid(10, 20));
    this.add(this.__grid, {top: 100});

    this.initWidgets();
  },

  members :
  {

    __hbox: null,

    __grid : null,

    initWidgets: function()
    {
      var widgets = this._widgets;

      // Primary Button
      var primbutton = new qx.ui.form.Button("Primary Button").set({appearance: "primary-button"});
      widgets.push(primbutton);
      this.__hbox.add(primbutton);

      // Secondary Button
      var secbutton = new qx.ui.form.Button("Secondary Button").set({appearance: "secondary-button"});
      widgets.push(secbutton);
      this.__hbox.add(secbutton);

      // Tertiary Button
      var terbutton = new qx.ui.form.Button("Tertiary Button").set({appearance: "tertiary-button"});
      widgets.push(terbutton);
      this.__hbox.add(terbutton);

    },

    toggleOverflow : function(tabView, enable) {
      if (!enable) {
        var children = tabView.getChildren();
        for (var i=children.length -1; i >=0; i--) {
          tabView.remove(children[i]);
        };
      } else {
        this.addTabPages(tabView);
      }
      this.addTabPages(tabView);
    }
  }
});
