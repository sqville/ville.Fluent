/* ************************************************************************

   Copyright: 2022 

   License: MIT license

   Authors: sqville

************************************************************************ */

/**
 * This is a simple demo application class of "ville.Fluent"
 *
 * @asset(qx/icon/Tango/64/actions/go-top.png)
 * 
 */
qx.Class.define("demo.Application",
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
      super();

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
      //demo.ButtonStyle.Radius = "Circular";

      //create a combo box
      var comboBox1 = new qx.ui.form.ComboBox().set({width: 250});
      comboBox1.getChildrenContainer().set({quickSelection: false, maxHeight: 250});

      // fill the combo box with some stuff
      for (var i = 1; i < 6; i++) {
        var tempItem = new qx.ui.form.ListItem(
          "2^ " + i + " = " + Math.pow(2, i)
        ).set({appearance: "combobox-listitem"});
        comboBox1.add(tempItem);
      }

      var checkedList1 = new qx.ui.form.CheckedList();
      for (var i = 1; i < 6; i++) {
        var tempItem = new qx.ui.form.CheckBox("Hello"+i);
        checkedList1.add(tempItem);
      }

      var list1 = new qx.ui.form.List().set({width: 150, height: 250});
      for (var i = 1; i < 6; i++) {
        var tempItem = new qx.ui.form.ListItem("2^ " + i + " = " + Math.pow(2, i));
        list1.add(tempItem);
      }

      var select1 = new qx.ui.form.SelectBox().set({width: 250});
      //select1.getChildrenContainer().set({quickSelection: false, maxHeight: 250});
      for (var i = 1; i < 6; i++) {
        var tempItem = new qx.ui.form.ListItem("2^ " + i + " = " + Math.pow(2, i));
        select1.add(tempItem);
      }


      //var textfieldspan1 = new qx.ui.container.Composite(new qx.ui.layout.Basic()).set({appearance: "textfield-span"});
      var textfield1 = new qx.ui.form.TextField().set({placeholder: "Example"});
      //textfieldspan1.add(textfield1);

      //var sheet = qx.ui.style.Stylesheet.getInstance();
      //sheet.addRule(".qx-textfield-focused::after", "width: 100%; height: 100%; position: absolute; content: 'Hello', background-color: 'blue'; left: 0px; top: 0px, bottom: -1px; box-sizing: border-box; border-radius: inherit; transform: scaleX(0); transition-property: transform; transition-duration: 50ms; transition-delay: cubic-bezier(0.7,0,1,0.5);");
      
      // Create an Upload button
      var button1 = new qx.ui.form.Button("Example").set({width: 96});

      var buttonprim = new qx.ui.form.Button("Example").set({width: 96, appearance: "primary-button"});

      // Document is the application root
      var doc = this.getRoot();

      doc.add(comboBox1, {left: 10, top: 30});
      doc.add(list1, {left: 320, top: 30});
      doc.add(select1, {left: 550, top: 30});

      doc.add(textfield1, {left: 10, top: 130});

      // Add button to document at fixed coordinates
      doc.add(button1, {left: 10, top: 200});
      doc.add(buttonprim, {left: 10, top: 250});

    }
  }
});