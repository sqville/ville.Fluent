/* ************************************************************************

   Copyright: 2023

   License: MIT license

   Authors: sqville

************************************************************************ */

/**
 * 
 * 
 */
qx.Class.define("widgetbrowser.Application",
{
  extend : qx.application.Standalone,

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main ()
    {
      // Call super class
      this.base(arguments);

      // Enable logging in debug variant
      if (qx.core.Environment.get("qx.debug"))
      {
        // support native logging capabilities, e.g. Firebug for Firefox
        qx.log.appender.Native;
        // support additional cross-browser console. Press F7 to toggle visibility
        qx.log.appender.Console;
      }

      /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */

      // Create a button
      var button = new qx.ui.form.Button("Hello world");

      // Document is the application root
      var doc = this.getRoot();

      // Add button to document at fixed coordinates
      doc.add(button, {left: 100, top: 50});
    }
  }
});