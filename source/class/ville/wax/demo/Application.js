/* ************************************************************************

   Copyright: 2023 sqville

   License: MIT license

   Authors: Chris Eskew (sqville) sqville@gmail.com

************************************************************************ */

/**
 * This is the main application class of "ville.Wax"
 * @asset(ville/wax/wireframe-image-sm.png)
 * @asset(ville/wax/wireframe-image-sm-blue.png)
 * @asset(ville/wax/wax-28-comb-blue.svg)
 * @asset(ville/wax/wax-28-comb.png)
 * @asset(ville/wax/wax-28-comb-blue.png)
 * @asset(ville/wax/wax-28-comb.svg)
 * @asset(ville/wax/Wax_demo_logo.png) 
 * @asset(ville/wax/round-menu-24px.svg)
 * @asset(ville/wax/round-account_circle-24px.svg)
 * @asset(ville/wax/chevron_right-24px.svg)
 * @asset(ville/wax/Wax_demo_logo.svg)
 * @asset(ville/wax/ville_Wax.png)
 * @asset(ville/wax/close-24px.svg)
 * @asset(ville/wax/close-red-24px.svg)
 * @asset(ville/wax/wax-icon-24-outline.svg)
 * @asset(ville/wax/wax-icon-24-filled.svg)
 * @asset(ville/wax/Blue_House.svg)
 * @asset(ville/wax/Gray_House.svg)
 * @asset(ville/wax/wax_menu_gray.svg)
 * @asset(ville/wax/wax_menu_blue.svg)
 * @asset(ville/wax/KeyItem.svg)
 * @asset(ville/wax/Yellow_Car_g7.jpg)
 * @asset(ville/wax/ville_logo.svg)
 * @asset(ville/wax/ville_fluent_logo.svg)
 * @asset(ville/wax/ville_fluent_logo.png)
 * FLUENT SVG ICONS:
 * @asset(ville/wax/arrow-down-outline.svg)
 * @asset(ville/wax/Brightness.svg)
 * @asset(ville/wax/ClearNight.svg)
 * @asset(ville/wax/CutRegular.svg)
 * @asset(ville/wax/CopyRegular.svg)
 * @asset(ville/wax/PasteRegular.svg)
 * @asset(ville/wax/OptionsRegular.svg)
 * @asset(ville/wax/ChevronRightRegular.svg)
 * @asset(ville/wax/PanesRegular.svg)
 */
qx.Class.define("ville.wax.demo.Application",
{
  extend : qx.application.Standalone,

  /*
  *****************************************************************************
    PROPERTIES
  *****************************************************************************
  */

  properties :
  {
    demoMode :
    {
      check : ["desktop", "mobile"],
      init : "desktop"
    }
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {

    _blocker : null,
    
    _northBox : null,
    
    _westBox : null,

    /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
    main : function()
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

      // *** START of Base Scaffolding *******************************************************
      // *** Base Scaffolding are objects common to all Wax - Franklin based apps  ***********

      // Change Widget to enable touch action for native scrolling
      qx.Class.include(qx.ui.core.Widget, ville.wax.MWidget);
      qx.Class.include(qx.ui.basic.Atom, ville.wax.MEmbed);  
      qx.Class.include(qx.ui.menu.AbstractButton, ville.wax.MMenuButtonEmbed);
      //qx.Class.include(qx.ui.basic.Image, ville.theme.MImage);
      qx.Class.include(qx.ui.decoration.Decorator, ville.decoration.MClipPath); 
      qx.Class.include(qx.ui.tabview.TabView, ville.wax.MTabView);

      // App's Root
      var approot = this.getRoot();
      approot.setBackgroundColor("black");

      // Add a Blocker to the application's root for the Main Menu Popup
      this._blocker = new qx.ui.core.Blocker(approot).set({color: "black", opacity: .08});
      
      // App's main Container (Composite) with Dock Layout 
      var appcompdock = new qx.ui.container.Composite(new qx.ui.layout.Dock(0, 0)).set({backgroundColor: "NeutralBackground1"});
      
      // Dock's North section (Canvas)
      var northhbox = this._northBox = new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({backgroundColor: "NeutralBackground1", decorator: "topheader-wax"});

      // Dock's West section (VBox)
      var westbox = this._westBox = new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({backgroundColor: "NeutralBackground1", padding: [10,0,10,10], decorator : "leftside"});
      westbox.setVisibility("excluded");

      // Dock's Center section (Stack) === THE STACK ===
      var centerbox = new qx.ui.container.Stack().set({backgroundColor: "NeutralBackground1", padding: 0});

      var southbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(4)).set({alignY: "middle", padding: [8,4,34,4], decorator: "bottombar"});

      // West Scroll area to fit all menu items
      var scrollwestbox = new qx.ui.container.Scroll().set({scrollbarX: "off", minWidth: 231, padding: 0, margin: 0, contentPadding: [0,0,0,0]});
      scrollwestbox.setVisibility("excluded"); 

      // Center Scroll area to fit all content
      // var scrollcenterbox = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});
      var scrollcenterbox = new ville.wax.scroll.Scroll().set({overflow: ["hidden", "auto"], padding: 0, margin: 0, contentPadding: [0,0,0,0]});

      // === North Toolbar, Parts and Buttons ===
      var northtoolbar = new qx.ui.toolbar.ToolBar().set({allowGrowX: true, padding: [0, 24, 0, 12]});
      var mainmenupart = new qx.ui.toolbar.Part(); //Top-Left of the screen 
      var profilepart = new qx.ui.toolbar.Part(); // Top-Right of the screen

      // Icon Images dsfdf
      var menuimage = "ville/wax/round-menu-24px.svg";
      var roundacct = "ville/wax/round-account_circle-24px.svg";

      // Top-Left Button
      var mainmenubtnbutton = new qx.ui.toolbar.Button("MainMenu", menuimage).set({show: "icon"});

      // Top-Right MenuButton
      var profilemenubutton = new qx.ui.toolbar.MenuButton("ProfileMenu", roundacct).set({show: "icon", showArrow: false});
      
      // Main Menu Popup (VBox)
      var mainmenupopup = new qx.ui.popup.Popup().set({allowStretchX: true, allowStretchY: true, padding: 10, minWidth: 300});
      mainmenupopup.setLayout(new qx.ui.layout.VBox(0));

      // Profile and Settings Menu and Menu Buttons
      var profilemenu = new qx.ui.menu.Menu().set({spacingX: 12});
      var switchmenubutton1 = new qx.ui.menu.Button("Switch to Mobile", "ville/wax/wireframe-image-sm.png").set({padding: 10});
      //switchmenubutton1.getChildControl("icon").set({ width: 24, height: 24 });
      var aboutmenubutton1 = new qx.ui.menu.Button("About Wax", "ville/wax/wireframe-image-sm.png").set({padding: 10});
      //aboutmenubutton1.getChildControl("icon").set({ width: 24, height: 24 });

      //create About Wax popup window
      // var winAboutWax = this.__createDetailWindow();
      
      // Add Main Menu Popup Listeners
      mainmenubtnbutton.addListener("execute", function(e)
      {
        if (qx.core.Environment.get("browser.name") != "edge"){
          this._blocker.blockContent(mainmenubtnbutton.getZIndex());
        }
        mainmenupopup.setHeight(parseInt(this.getRoot().getContentElement().getStyle("height")));
        mainmenupopup.show();
      }, this);
      

      // Assemble all base pieces  
      scrollwestbox.add(westbox);
      //scrollcenterbox.add(centerbox);
      appcompdock.add(northhbox, {edge:"north"});
      appcompdock.add(scrollwestbox, {edge:"west"});
      //appcompdock.add(scrollcenterbox, {edge:"center"});
      appcompdock.add(centerbox, {edge:"center"});
      approot.add(appcompdock, {edge: 0});
      profilemenu.add(switchmenubutton1);
      profilemenu.add(aboutmenubutton1);
      profilemenubutton.setMenu(profilemenu);

      //var atmlogocurrentpage = new qx.ui.basic.Atom("Wax","ville/wax/Wax_demo_logo.svg").set({font: "hym-app-header", gap: 10, padding: 0, visibility: "hidden"});
      //atmlogocurrentpage.getChildControl("icon").set({ scale: true, width: 48, height: 38 });
      var atmlogocurrentpage = new qx.ui.basic.Atom("Wax").set({font: "hym-app-header", gap: 10, padding: 0, visibility: "hidden"});
      //mainmenupart.add(mainmenubtnbutton);
      //profilepart.add(profilemenubutton);

      //var atmvillelogo = new qx.ui.basic.Atom("ville", "ville/wax/ville_logo.svg").set({font: "ville-logo-header"});
      var lblvillelogoheader = new qx.ui.basic.Label("ville.").set({font: "ville-logo-header", width: 100, padding: 12});
      //mainmenupart.add(atmvillelogo);
      mainmenupart.add(lblvillelogoheader);

      // Select Brand Color
      var selectbrand = new qx.ui.form.SelectBox().set({margin: [10,16,0,0], width: 100, allowStretchX: false, allowStretchY: false});
      var blueItem = new qx.ui.form.ListItem("Blue");
      var orangeItem = new qx.ui.form.ListItem("Orange");
      selectbrand.add(blueItem);
      selectbrand.add(orangeItem);

      var waxcolorswitch = new qx.ui.form.CheckBox().set({appearance: "wax-switch-larger"});

      profilepart.add(selectbrand);
      profilepart.add(waxcolorswitch);
      
      northtoolbar.add(mainmenupart);
      northtoolbar.addSpacer();
      //northtoolbar.add(atmlogocurrentpage);
      //northtoolbar.addSpacer();
      northtoolbar.add(profilepart);
      //northtoolbar.add(new qx.ui.toolbar.Separator());
      //northtoolbar.add(chckboxshowwidgets);

      northhbox.add(northtoolbar, {left: 0, right: 0});

      appcompdock.add(southbox, {edge: "south"});

      // *** END of Base Scaffolding **************************************

      // Add some simple ease in animation to the app's blocker
      var fadeinb = {duration: 300, timing: "ease-out", keyFrames : {
        0: {opacity: 0},
        100: {opacity: .07}
        }};

      this._blocker.addListener("blocked", function(e) {
        var domtable;
        if (domtable = this._blocker.getBlockerElement().getDomElement()) {
          qx.bom.element.Animation.animate(domtable, fadeinb);
        }
      }, this);

      this._blocker.addListener("unblocked", function(e) {
        var domtable;
        if (domtable = this._blocker.getBlockerElement().getDomElement()) {
          qx.bom.element.Animation.animateReverse(domtable, fadeinb);
        }
      }, this);



      // *** Populate THE STACK ***********************************************
      // Four page stack EXAMPLE
       // First Stack Page
       // Second Stack Page
       // Third Stack Page
       // Forth Stack Page (for ios and android only)
      // **********************************************************************
      
      // common stack page styling
      var stackpagepadding = [20, 30];
      var stackpageheaderfont = "control-header";
      var stackpagevboxspacing = 10;

      var firstpagehbox = new qx.ui.container.Composite(new qx.ui.layout.HBox(0));
      firstpagehbox.add(new qx.ui.core.Spacer(), {flex: 1});

      // First/Home Page
      var firststackpage = new qx.ui.container.Composite(new qx.ui.layout.VBox(stackpagevboxspacing).set({alignY: "middle"})).set({ padding : stackpagepadding, maxWidth: 800});  
      // add the pages independent scroll area

      firstpagehbox.add(firststackpage, {flex: 2});
      firstpagehbox.add(new qx.ui.core.Spacer(), {flex: 1});

      var firstscrollstackpage = new ville.wax.scroll.Scroll().set({overflow: ["hidden", "auto"], padding: 0, margin: 0, contentPadding: [0,0,0,0]});
      // var firstscrollstackpage = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});

      firstscrollstackpage.add(firstpagehbox);
      
      //var atmfirstpageheader = new qx.ui.basic.Atom("Control Showcase", "ville/wax/Wax_demo_logo.png").set({appearance: "control-header-atom", anonymous: true, focusable: false, selectable: false });
      //var atmscrolldownmsg = new qx.ui.basic.Atom("Scroll down", "ville/wax/arrow-down-outline.svg").set({center: true, padding: 0});
      //atmscrolldownmsg.getChildControl("icon").set({ scale : true, width: 24, height: 24 });
      var hboxheaderstuff = new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({padding: 0});
      //hboxheaderstuff.add(atmfirstpageheader);
      //hboxheaderstuff.add(atmscrolldownmsg);
      firststackpage.add(hboxheaderstuff);

      /*
      var bounceloopanima = {duration: 3500, keep: 100, keyFrames : {
        0 : {translate: [null, "0px"]},
        20 : {translate: [null, "0px"]},
        40 : {translate: [null, "0px"]},
        50 : {translate: [null, "0px"]},
        75 : {translate: [null, "0px"]},
        80 : {translate: [null, "-5px"]},
        85 : {translate: [null, "4px"]},
        90 : {translate: [null, "-1px"]},
        100 : {translate: [null, "0px"]}
        },
        delay : 1000,
        repeat : 4
      };
      */

      /*atmscrolldownmsg.addListener("appear", function(e) {
        var icondom = this.getChildControl("icon").getContentElement().getDomElement();
        qx.bom.element.AnimationCss.animate(icondom, bounceloopanima);
      });*/


      // Title Intro

      //firststackpage.add(new qx.ui.basic.Image("ville/wax/ville_fluent_logo.png"));
      firststackpage.add(new qx.ui.basic.Label("ville.Fluent").set({paddingTop: 30, width: 460, font: "ville-fluent-logo-display"}));
      //firststackpage.add(new qx.ui.basic.Label("ville.Fluent").set({font: "display", margin: 0, padding: [4, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("A theme for the Qooxdoo Javascript Framework. Inspired by Microsoft's Fluent Design System.").set({margin: 0, paddingBottom: 20, font: "subtitle0", rich: true, wrap: true}));

      // Line
      // About This Demo - What is different about this vs WidgetBrowser - link to WB
      firststackpage.add(new qx.ui.basic.Label("About This Demo").set({font: "heading2", allowGrowX: true, decorator: "heading2", padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("The purpose of this demo is to show what changes a qooxdoo application would need to incorporate in order to more closely follow Fluent's design principles. Light and Dark color themes are supported.").set({font: "body2", rich: true, wrap: true}));

      // Line
      // Controls in alpha order
      firststackpage.add(new qx.ui.basic.Label("Widgets").set({font: "heading2", allowGrowX: true, decorator: "heading2", padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Currently supported widgets are as follows: Button, ComboBox, DateField, List, MenuButton, ProgressBar, RadioButton, SelectBox, Slider, Spinner, SplitButton, Table, TabView, TextField, TextArea, ToggleButton, Tree, Window").set({font: "body2", rich: true, wrap: true}));

      // BUTTON
      firststackpage.add(new qx.ui.basic.Label("Button").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default Button").set({font: "body1", rich: true, wrap: true}));
      
      var iconcalendarmonth = new ville.icons.CalendarMonth().set({ width: 20, height: 20 });
      var defaultbutton = new qx.ui.form.Button("Default").set({ embed: iconcalendarmonth, minWidth: 96, allowStretchX: false, allowStretchY: false});
      firststackpage.add(defaultbutton);
      firststackpage.add(new qx.ui.basic.Label("Default Button rounded - appearance = rounded-button").set({marginTop: 40, font: "body1", rich: true, wrap: true}));
      var defaultroundedbutton = new qx.ui.form.Button("Rounded").set({minWidth: 96, appearance: "rounded-button", allowStretchX: false, allowStretchY: false});
      firststackpage.add(defaultroundedbutton);
      var iconcalendarmonth2 = iconcalendarmonth.clone().set({ textColor: "NeutralForegroundOnBrand" });
      //var iconcalendarmonth2 = new ville.wax.icons.CalendarMonthRegular().set({ width: 20, height: 20, textColor: "NeutralForegroundOnBrand" });
      firststackpage.add(new qx.ui.basic.Label("Primary Button - appearance = primary-button").set({marginTop: 40, font: "body1", rich: true, wrap: true}));
      var primarybutton = new qx.ui.form.Button("Primary").set({embed: iconcalendarmonth2, minWidth: 96, appearance: "primary-button", allowStretchX: false, allowStretchY: false});
      firststackpage.add(primarybutton);
      firststackpage.add(new qx.ui.basic.Label("Primary Button rounded - appearance = primary-rounded-button").set({marginTop: 40, font: "body1", rich: true, wrap: true}));
      var primaryroundedbutton = new qx.ui.form.Button("Rounded").set({minWidth: 96, appearance: "primary-rounded-button", allowStretchX: false, allowStretchY: false});
      firststackpage.add(primaryroundedbutton);

      //defaultroundedbutton.getContentElement().setStyle("border-radius", "4% 95% 6% 95%/95% 4% 92% 5%");

      // CheckBox
      firststackpage.add(new qx.ui.basic.Label("CheckBox").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default CheckBox").set({font: "body1", rich: true, wrap: true}));
      var defaultcheckbox = new qx.ui.form.CheckBox("Default").set({allowStretchX: false, allowStretchY: false});

      var testsvg = '<svg fill="red" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">';
      testsvg += '<path d="M0 0h24v24H0z" fill="none"/>';
      testsvg += '<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>';

      var svghtml = '<path d="M0 0h24v24H0z" fill="none"></path>';
      svghtml += '<path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"></path>';

      var svgatts = {
        fill: "red",
        xmlns: "http://www.w3.org/2000/svg",
        html: svghtml
      }; 

      var testsvgele = new qx.html.Element("svg", null, svgatts);

      //defaultcheckbox.getChildControl("icon").getContentElement().add(testsvgele);

      firststackpage.add(defaultcheckbox);

      //firststackpage.add(new qx.ui.embed.Html(testsvg));

      // CheckedSelectBox
      //firststackpage.add(new qx.ui.basic.Label("CheckedSelectBox").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      //firststackpage.add(new qx.ui.basic.Label("Default CheckedSelectBox").set({font: "body1", rich: true, wrap: true}));
      var defaultcheckedselectbox = new qx.ui.form.CheckedSelectBox("Default").set({width: 250, allowStretchX: false, allowStretchY: false});
      for (var i = 1; i < 6; i++) {
        var tempItem = new qx.ui.form.ListItem("2^ " + i + " = " + Math.pow(2, i));
        //defaultcheckedselectbox.add(tempItem);
      }
      
      //firststackpage.add(defaultcheckedselectbox);

      // ComboBox
      firststackpage.add(new qx.ui.basic.Label("ComboBox").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default ComboBox with the following modifications - quickSelection = false, and each ListItem's appearance = combobox-listitem").set({font: "body1", rich: true, wrap: true}));
      var comboBox1 = new qx.ui.form.ComboBox().set({width: 250, allowStretchX: false, allowStretchY: false});
      comboBox1.getChildrenContainer().set({quickSelection: false, maxHeight: 250});
      // fill the combo box with some stuff
      for (var i = 1; i < 6; i++) {
        var tempItem = new qx.ui.form.ListItem(
          "2^ " + i + " = " + Math.pow(2, i)
        ).set({appearance: "combobox-listitem"});
        comboBox1.add(tempItem);
      }
      firststackpage.add(comboBox1);

      // DateField
      firststackpage.add(new qx.ui.basic.Label("DateField").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default DateField").set({font: "body1", rich: true, wrap: true}));
      var datefield1 = new qx.ui.form.DateField().set({width: 250, allowStretchX: false, allowStretchY: false});
      datefield1.getChildControl("button").setVisibility("hidden");
      datefield1.getChildControl("textfield").getContentElement().setAttribute("type", "date", true);
      firststackpage.add(datefield1);

      // List
      firststackpage.add(new qx.ui.basic.Label("List").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default List widget with default ListItems").set({font: "body1", rich: true, wrap: true}));
      var list1 = new qx.ui.form.List().set({width: 150, height: 210, allowStretchX: false, allowStretchY: false});
      for (var i = 1; i < 6; i++) {
        var tempItem = new qx.ui.form.ListItem("2^ " + i + " = " + Math.pow(2, i));
        list1.add(tempItem);
      }
      firststackpage.add(list1);

      // Menu
      firststackpage.add(new qx.ui.basic.Label("Menu").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default Menu and MenuButton widgets").set({font: "body1", rich: true, wrap: true}));
      var menu1 = new qx.ui.menu.Menu();

      var cutCommand = new qx.ui.command.Command("Ctrl+X");
      cutCommand.addListener("execute", () => {console.log("cutcommand")});
      var copyCommand = new qx.ui.command.Command("Ctrl+C");
      copyCommand.addListener("execute", () => {console.log("copycommand")});
      var pasteCommand = new qx.ui.command.Command("Ctrl+P");
      pasteCommand.addListener("execute", () => {console.log("pastecommand")});

      // svg inline icons
      var iconcut = new ville.icons.Cut().set({ width: 20, height: 20});
      var iconcopy = new ville.icons.Copy().set({ width: 20, height: 20});
      var iconpaste = new ville.icons.Paste().set({ width: 20, height: 20});
      var iconoptions = new ville.icons.Options().set({ width: 20, height: 20});
      var iconpanes = new ville.icons.PanelLeftHeader().set({ width: 20, height: 20});

      var cutButton = new qx.ui.menu.Button(
        "Cut",
        null,
        cutCommand
      ).set({ embed: iconcut });
      var copyButton = new qx.ui.menu.Button(
        "Copy",
        null,
        copyCommand
      ).set({ embed: iconcopy });
      var pasteButton = new qx.ui.menu.Button(
        "Paste",
        null,
        pasteCommand
      ).set({ embed: iconpaste });

      var optionmenu1 = new qx.ui.menu.Menu();
      optionmenu1.add(new qx.ui.menu.RadioButton("Option 1"));
      optionmenu1.add(new qx.ui.menu.RadioButton("Option 2"));
      optionmenu1.add(new qx.ui.menu.RadioButton("Option 3"));

      var groupOptions = new qx.ui.form.RadioGroup();
      groupOptions.add.apply(groupOptions, optionmenu1.getChildren());
      //groupOptions.addListener("changeSelection", this.debugRadio);
      var optionButton = new qx.ui.menu.Button(
        "Options",
        null,
        null,
        optionmenu1
      ).set({ embed: iconoptions });

      var panesmenu = new qx.ui.menu.Menu();
      panesmenu.add(new qx.ui.menu.CheckBox("Show tabs"));
      panesmenu.add(new qx.ui.menu.CheckBox("Show status bar"));
      panesmenu.add(new qx.ui.menu.CheckBox("Show tree"));
      panesmenu.add(new qx.ui.menu.CheckBox("Show macros"));

      var panesButton = new qx.ui.menu.Button(
        "Panes",
        null,
        null,
        panesmenu
      ).set({ embed: iconpanes });

      // header 1
      menu1.add(new qx.ui.menu.Button("Section header").set({anonymous: true, appearance: "menu-button-header" }));
      menu1.add(cutButton);
      menu1.add(copyButton);
      menu1.add(pasteButton);
      // separator
      menu1.addSeparator();
      // header 2
      menu1.add(new qx.ui.menu.Button("Section header").set({anonymous: true, appearance: "menu-button-header" }));
      // options radiobuttons
      menu1.add(optionButton);
      // view panes check buttons
      menu1.add(panesButton);

      /*
      menu1.addListener("appear", function() {
        var menubounds = this.getBounds(); 
        var ptopstart = menubounds.top;
        
        // adjust the popup animation to accomidate for dynamic position change (above or below opener) 
        if (ptopstart < this.getOpener().getContentLocation().top)
          ptopstart += 14;
        else
          ptopstart -= 14;
        
        var popupup = {
          duration: parseInt(ville.global.duration.Slower.slice(0,-2)), 
          timing: ville.global.curve.DecelerateMid, 
          keyFrames : {
            0: {top: ptopstart + "px", opacity: 0},
            100: {top: menubounds.top + "px", opacity: 1}
          },
          keep : 100
        };
        qx.bom.element.AnimationCss.animate(this.getContentElement().getDomElement(), popupup);
      });

      optionmenu1.addListener("appear", function() {
        var menubounds = this.getBounds(); //TO-DO: Get bounds if submenu
        var plftstart = menubounds.left;

        //console.log(plftstart);
        
        // adjust the popup animation to accomidate for dynamic position change (above or below opener) 
        if (plftstart < this.getOpener().getContentLocation().left)
          plftstart += 14;
        else
          plftstart -= 14;
        
        var popupup = {
          duration: parseInt(ville.global.duration.Slower.slice(0,-2)), 
          timing: ville.global.curve.DecelerateMid, 
          keyFrames : {
            0: {left: plftstart + "px", opacity: 0},
            100: {left: menubounds.left + "px", opacity: 1}
          },
          keep : 100
        };
        qx.bom.element.AnimationCss.animate(this.getContentElement().getDomElement(), popupup);
      });

      
      panesmenu.addListener("appear", function() {
        var menubounds = this.getBounds(); 
        var plftstart = menubounds.left;
        
        // adjust the popup animation to accomidate for dynamic position change (above or below opener) 
        if (plftstart < this.getOpener().getContentLocation().left)
          plftstart += 14;
        else
          plftstart -= 14;
        
        var popupup = {
          duration: parseInt(ville.global.duration.Slower.slice(0,-2)), 
          timing: ville.global.curve.DecelerateMid, 
          keyFrames : {
            0: {left: plftstart + "px", opacity: 0},
            100: {left: menubounds.left + "px", opacity: 1}
          },
          keep : 100
        };
        qx.bom.element.AnimationCss.animate(this.getContentElement().getDomElement(), popupup);
      });
      */
      

      var menubutton1 = new qx.ui.form.MenuButton(
        "Toggle menu",
        null,
        menu1
      ).set({minWidth: 96, allowStretchX: false, allowStretchY: false});

      firststackpage.add(menubutton1);

      // ProgressBar
      firststackpage.add(new qx.ui.basic.Label("ProgressBar").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default ProgressBar").set({font: "body1", rich: true, wrap: true}));
      var progressbar1 = new qx.ui.indicator.ProgressBar(50, 100);
      firststackpage.add(progressbar1);
      firststackpage.add(new qx.ui.basic.Label("Error ProgressBar").set({font: "body1", rich: true, wrap: true}));
      var progressbar2 = new qx.ui.indicator.ProgressBar(50, 100); 
      progressbar2.getChildControl("progress").setBackgroundColor("PaletteRedBackground3");
      firststackpage.add(progressbar2);
      firststackpage.add(new qx.ui.basic.Label("Warning ProgressBar").set({font: "body1", rich: true, wrap: true}));
      var progressbar5 = new qx.ui.indicator.ProgressBar(50, 100); 
      progressbar5.getChildControl("progress").setBackgroundColor("PaletteDarkOrangeBackground3");
      firststackpage.add(progressbar5);
      firststackpage.add(new qx.ui.basic.Label("Success ProgressBar").set({font: "body1", rich: true, wrap: true}));
      var progressbar3 = new qx.ui.indicator.ProgressBar(100, 100);
      progressbar3.getChildControl("progress").setBackgroundColor("PaletteGreenBackground3");
      firststackpage.add(progressbar3);
      //firststackpage.add(new qx.ui.basic.Label("Indeterminate ProgressBar").set({font: "body1", rich: true, wrap: true}));
      //var progressbar4 = new qx.ui.indicator.ProgressBar(0, 100).set({backgroundColor: "CompoundBrandBackground"});
      //firststackpage.add(progressbar4);

      // indicator animation layer
      //var animalayer = new qx.ui.container.Composite(new qx.ui.layout.Canvas()).set({backgroundColor: "white", opacity: 0});
      //progressbar4.add(animalayer, {height: "100%", width: "100%"});
      var progressanimation = {timing: "linear", repeat: "infinite", 
        keyFrames : {
          0 : {"opacity": .5, "width": "0"},
          100 : {"opacity": .5, "width": "100%"}
        }
      };

      /*progressbar4.addListener("appear", function(e) {
        var domtable = progressbar4.getContentElement().getDomElement();
        progressbar4.getContentElement().setStyle("background-image", "linear-gradient(to right, #e6e6e6 20%, transparent 40%, #e6e6e6 80%)", true);
        //qx.bom.element.Animation.animate(domtable, progressanimation, 3000);
       }, this);*/

      // RadioButton
      firststackpage.add(new qx.ui.basic.Label("RadioButton").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default RadioButtons in a RadioButtonGroup").set({font: "body1", rich: true, wrap: true}));
      var radioButtonGroupVBox = new qx.ui.form.RadioButtonGroup();
      radioButtonGroupVBox.setLayout(new qx.ui.layout.VBox(2));
      radioButtonGroupVBox.add(new qx.ui.form.RadioButton("Red"));
      radioButtonGroupVBox.add(new qx.ui.form.RadioButton("Green"));
      radioButtonGroupVBox.add(new qx.ui.form.RadioButton("Blue"));
      firststackpage.add(radioButtonGroupVBox);

      // SelectBox
      firststackpage.add(new qx.ui.basic.Label("SelectBox").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default SelectBox with default ListItems").set({font: "body1", rich: true, wrap: true}));
      var select1 = new qx.ui.form.SelectBox().set({width: 250, allowStretchX: false, allowStretchY: false});
      for (var i = 1; i < 6; i++) {
        var tempItem = new qx.ui.form.ListItem("2^ " + i + " = " + Math.pow(2, i));
        select1.add(tempItem);
      }
      firststackpage.add(select1);

      // Slider
      firststackpage.add(new qx.ui.basic.Label("Slider").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default Slider").set({font: "body1", rich: true, wrap: true}));
      var slider1 = new qx.ui.form.Slider().set({ allowStretchX: false, allowStretchY: false, width: 250, minimum: -100, maximum: 100, singleStep: 5, pageStep: 20, value: 0 });
      var slider2 = new qx.ui.form.Slider("vertical").set({ allowStretchX: false, allowStretchY: false, height: 250, minimum: -100, maximum: 100, singleStep: 5, pageStep: 20, value: 0 });
      firststackpage.add(slider1);
      firststackpage.add(slider2);

      // Spinner
      firststackpage.add(new qx.ui.basic.Label("Spinner").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default Spinner").set({font: "body1", rich: true, wrap: true}));
      var spinner1 = new qx.ui.form.Spinner(-100, 0, 100).set({ width: 250, allowStretchX: false, allowStretchY: false });

      firststackpage.add(spinner1);

      // SplitButton
      firststackpage.add(new qx.ui.basic.Label("Split Button").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default Split Button").set({font: "body1", rich: true, wrap: true}));
      
      var splitmenu1 = new qx.ui.menu.Menu();
      var splitmb1 = new qx.ui.menu.Button("Menu Button 1");
      var splitmb2 = new qx.ui.menu.Button("Menu Button 2");
      var splitmb3 = new qx.ui.menu.Button("Menu Button 3");

      splitmenu1.add(splitmb1);
      splitmenu1.add(splitmb2);
      splitmenu1.add(splitmb3);

      var defaultsplitbutton = new qx.ui.form.SplitButton("Default Split Button", null, splitmenu1).set({ minWidth: 96, allowStretchX: false, allowStretchY: false});
      firststackpage.add(defaultsplitbutton);

      // Table
      firststackpage.add(new qx.ui.basic.Label("Table").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default Table").set({font: "body1", rich: true, wrap: true}));

      //Get the raw data
      var rowData = [];
      
      rowData.push([ "Meeting Notes", "First Last Name", "7h ago", "You edited this" ]);
      rowData.push([ "Meeting Notes", "First Last Name", "7h ago", "You edited this" ]);
      rowData.push([ "Meeting Notes", "First Last Name", "7h ago", "You edited this" ]);
      rowData.push([ "Meeting Notes", "First Last Name", "7h ago", "You edited this" ]);

      //Create the data (table) model
      var tableModel = new qx.ui.table.model.Simple();
      tableModel.setColumns([ "File", "Author", "Last updated", "Last update" ]);
      tableModel.setData(rowData);

      tableModel.setColumnEditable(0, false);
      tableModel.setColumnEditable(1, false);
      tableModel.setColumnEditable(2, false);
      tableModel.setColumnEditable(3, false);
      tableModel.setColumnSortable(0, false);
      tableModel.setColumnSortable(1, false);
      tableModel.setColumnSortable(2, false);
      tableModel.setColumnSortable(3, false);

      //Create a table view for the model
      var table1 = new qx.ui.table.Table(tableModel);
      table1.set({
        height: 280,
        rowHeight: 44,
        allowStretchX: true,
        showCellFocusIndicator: false,
        focusCellOnPointerMove: true,
        forceLineHeight: false
      });

      /*var imgrenderer = new qx.ui.table.cellrenderer.Image(24,24);
      table.getTableColumnModel().setDataCellRenderer(0, imgrenderer);

      var htmlrenderer = new qx.ui.table.cellrenderer.Html();
      table.getTableColumnModel().setDataCellRenderer(3, htmlrenderer);*/

      //var filerenderer = new qx.ui.table.cellrenderer.Default();
      //table1.getTableColumnModel().setDataCellRenderer(0, filerenderer);

      //table.getSelectionModel().setSelectionMode(qx.ui.table.selection.Model.MULTIPLE_INTERVAL_SELECTION);

      var tcm = table1.getTableColumnModel();
      tcm.setColumnWidth(0,180);
      tcm.setColumnWidth(1,180);
      tcm.setColumnWidth(2,120);
      tcm.setColumnWidth(3,180);

      /* cellinfo map
      value (var): the cell's value.
      rowData (var): contains the row data for the row, the cell belongs to. The kind of this object depends on the table model, see qx.ui.table.ITableModel#getRowData
      row (int): the model index of the row the cell belongs to.
      col (int): the model index of the column the cell belongs to.
      table (qx.ui.table.Table): the table the cell belongs to.
      xPos (int): the x position of the cell in the table pane.
      selected (boolean): whether the cell is selected.
      focusedRow (boolean): whether the cell is in the same row as the focused cell.
      editable (boolean): whether the cell is editable.
      style (string): The CSS styles that should be applied to the outer HTML element.
      styleLeft (string): The left position of the cell.
      styleWidth (string): The cell's width (pixel).
      styleHeight (string): The cell's height (pixel).
      */

      firststackpage.add(table1);


      // TabView
      firststackpage.add(new qx.ui.basic.Label("TabView").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default TabView. Works for all bar positions. Resize window to see overflow menu button.").set({font: "body1", rich: true, wrap: true}));

      // **SQ**MIXIN** START
      // add overflow menu button feature to tabview bar child control
      var tvbarmenu = new qx.ui.menu.Menu();
      
      // Create tabview
      var wtabView2 = new qx.ui.tabview.TabView();

      var page1tbv2 = new qx.ui.tabview.Page("First Tab").set({ height : 200 });
      page1tbv2.setLayout(new qx.ui.layout.VBox());
      page1tbv2.add(new qx.ui.basic.Label("First Tab Page"));
      wtabView2.add(page1tbv2);
      
      // **SQ**MIXIN** START
      var p1tbmb = new qx.ui.menu.Button("First Tab", null, null);
      p1tbmb.addListener("execute", function() {
        wtabView2.setSelection([page1tbv2]);
      });
      tvbarmenu.add(p1tbmb);

      var page2tbv2 = new qx.ui.tabview.Page("Second Tab");
      page2tbv2.setLayout(new qx.ui.layout.VBox());
      page2tbv2.add(new qx.ui.basic.Label("Second Tab Page"));
      wtabView2.add(page2tbv2);

      // **SQ**MIXIN** START
      var p2tbmb = new qx.ui.menu.Button("Second Tab", null, null);
      p2tbmb.addListener("execute", function() {
        wtabView2.setSelection([page2tbv2]);
      });
      tvbarmenu.add(p2tbmb);

      var page3tbv2 = new qx.ui.tabview.Page("Third Tab");
      page3tbv2.setLayout(new qx.ui.layout.VBox());
      page3tbv2.add(new qx.ui.basic.Label("Third Tab Page"));
      wtabView2.add(page3tbv2);

      // **SQ**MIXIN** START
      var p3tbmb = new qx.ui.menu.Button("Third Tab", null, null);
      p3tbmb.addListener("execute", function() {
        wtabView2.setSelection([page3tbv2]);
      });
      tvbarmenu.add(p3tbmb);

      var page4tbv2 = new qx.ui.tabview.Page("Fourth Tab");
      page4tbv2.setLayout(new qx.ui.layout.VBox());
      wtabView2.add(page4tbv2);

      // **SQ**MIXIN** START
      var p4tbmb = new qx.ui.menu.Button("Fourth Tab", null, null);
      p4tbmb.addListener("execute", function() {
        wtabView2.setSelection([page4tbv2]);
      });
      tvbarmenu.add(p4tbmb);

      var page5tbv2 = new qx.ui.tabview.Page("Fifth Tab");
      page5tbv2.setLayout(new qx.ui.layout.VBox());
      wtabView2.add(page5tbv2);

      // **SQ**MIXIN** START
      var p5tbmb = new qx.ui.menu.Button("Fifth Tab", null, null);
      p5tbmb.addListener("execute", function() {
        wtabView2.setSelection([page5tbv2]);
      });
      tvbarmenu.add(p5tbmb);

      firststackpage.add(wtabView2);  

      wtabView2.setSelection([page2tbv2]);

      var tabviewbarline = new qx.ui.core.Widget().set({height: 4, backgroundColor: "BrandBackground1", zIndex: 5, decorator : "tabview-page-button-line"});
      wtabView2.setDynamicMarkAnimationDuration(parseInt(ville.global.duration.Slower.slice(0,-2))); 
      wtabView2.setDynamicMarkAnimationTiming(ville.global.curve.DecelerateMid);
      wtabView2.setDynamicMark(tabviewbarline);

      // **SQ**MIXIN** START
      var tabviewoverflowmenubutton1 = new qx.ui.form.MenuButton("...", null, tvbarmenu).set({decorator : null});
      wtabView2.getChildControl("bar").add(tabviewoverflowmenubutton1);

      // **SQ**MIXIN** START
      // show hide overflow menu
      wtabView2.getChildControl("bar").getChildControl("scrollpane").addListener("update", function(e) 
      {
        var content = this.getChildren()[0];
        if (!content) {
          return;
        }

        var innerSize = this.getInnerSize();
        var contentSize = content.getBounds();

        var overflow =
        wtabView2.getChildControl("bar").getOrientation() === "horizontal"
            ? contentSize.width - 100 > innerSize.width
            : contentSize.height - 40 > innerSize.height;

        if (overflow) {
          tabviewoverflowmenubutton1.setVisibility("visible");
        } else {
          tabviewoverflowmenubutton1.setVisibility("hidden");
        }
      });

      // TextField
      firststackpage.add(new qx.ui.basic.Label("TextField").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default TextField").set({font: "body1", rich: true, wrap: true}));
      var textfield1 = new qx.ui.form.TextField().set({width: 250, placeholder: "Example", allowStretchX: false, allowStretchY: false});
      firststackpage.add(textfield1);

      // TextArea
      firststackpage.add(new qx.ui.basic.Label("TextArea").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default TextArea").set({font: "body1", rich: true, wrap: true}));
      var textarea1 = new qx.ui.form.TextArea().set({placeholder: "Example", allowStretchX: false, allowStretchY: false});
      firststackpage.add(textarea1);

      // ToggleButton
      firststackpage.add(new qx.ui.basic.Label("Toggle Button").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default Toggle Button").set({font: "body1", rich: true, wrap: true}));
      
      var defaulttogglebutton = new qx.ui.form.ToggleButton("Default Toggle").set({ minWidth: 96, allowStretchX: false, allowStretchY: false});
      firststackpage.add(defaulttogglebutton);

      // Tree
      firststackpage.add(new qx.ui.basic.Label("Tree").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default Tree").set({font: "body1", rich: true, wrap: true}));
      var tree1 = new qx.ui.tree.Tree().set({ width: 200, height: 400 });
      var root1 = new qx.ui.tree.TreeFolder("root");
      root1.setOpen(true);
      tree1.setRoot(root1);

      var te1 = new qx.ui.tree.TreeFolder("Desktop");
      te1.setOpen(true);
      root1.add(te1);

      var te1_1 = new qx.ui.tree.TreeFolder("Files");
      var te1_2 = new qx.ui.tree.TreeFolder("Workspace");
      var te1_3 = new qx.ui.tree.TreeFolder("Network");
      var te1_4 = new qx.ui.tree.TreeFolder("Trash");
      te1.add(te1_1, te1_2, te1_3, te1_4);

      var te1_2_1 = new qx.ui.tree.TreeFile("Windows (C:)");
      var te1_2_2 = new qx.ui.tree.TreeFile("Documents (D:)");
      te1_2.add(te1_2_1, te1_2_2);

      var te2 = new qx.ui.tree.TreeFolder("Inbox");

      var te2_1 = new qx.ui.tree.TreeFolder("Presets");
      var te2_2 = new qx.ui.tree.TreeFolder("Sent");
      var te2_3 = new qx.ui.tree.TreeFolder("Trash");
      var te2_4 = new qx.ui.tree.TreeFolder("Data");
      var te2_5 = new qx.ui.tree.TreeFolder("Edit");

      te2.add(te2_1, te2_2, te2_3, te2_4, te2_5);

      root1.add(te2);
      
      firststackpage.add(tree1);


      // Window
      firststackpage.add(new qx.ui.basic.Label("Window").set({font: "title3", allowGrowX: true, padding: [40, 0, 0, 0]}));
      firststackpage.add(new qx.ui.basic.Label("Default Window").set({font: "body1", rich: true, wrap: true}));
      var window1 = new qx.ui.window.Window("Window title").set({ width: 450, height: 250 });
      window1.setLayout(new qx.ui.layout.VBox(4));
      //var icondismiss = new ville.icons.Dismiss().set({ width: 20, height: 20});
      //window1.getChildControl("close-button").set({ embed: icondismiss });
      window1.add(new qx.ui.basic.Label("I am a qx.ui.window.Window"));
      var openwindowbutton1 = new qx.ui.form.Button("Open window").set({ minWidth: 96, allowStretchX: false, allowStretchY: false});
      firststackpage.add(openwindowbutton1);

      openwindowbutton1.addListener("execute", function() {
        window1.center();
        window1.fadeIn(50);
        window1.show();
      });

      // SWITCH
      //firststackpage.add(new qx.ui.basic.Label("Switch").set({font: stackpageheaderfont, padding: [60, 0, 0, 0]}));
      //firststackpage.add(new qx.ui.basic.Label("Just a simple qx.ui.form.CheckBox made to look like a switch control via appearance and decorator changes (with help of an SVG file for the white knob).").set({rich: true, wrap: true}));
      var waxswitch = new qx.ui.form.CheckBox("Default switch").set({appearance: "wax-switch"});
      //firststackpage.add(waxswitch);
      var waxswitch2 = new qx.ui.form.CheckBox("Larger switch").set({appearance: "wax-switch-larger"});
      //firststackpage.add(waxswitch2);

      // Switch - toggle switch animation
      // TODOs: Need to grab colors from Color Theme
      
      var slideright = {
        duration: 300, 
        timing: ville.global.curve.EasyEase, 
        keyFrames : {
          0: {
            "backgroundColor": qx.theme.manager.Color.getInstance().resolve("NeutralBackground1"), 
            "background-position-x": "0%", 
            "border-color": qx.theme.manager.Color.getInstance().resolve("NeutralStroke1")
          },
          100: {
            "backgroundColor": qx.theme.manager.Color.getInstance().resolve("BrandBackground1Selected"), 
            "background-position-x": "100%", 
            "border-color": qx.theme.manager.Color.getInstance().resolve("BrandBackground1Selected")
          }
        },
        keep : 100
      };

      selectbrand.addListener("changeSelection", function (e) {
        var selecteditmlbl = e.getData()[0].getLabel();
        
        if (selecteditmlbl == "Blue" && localStorage.waxthememode == "light")
        {
          qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.Brand1);
          localStorage.waxthemecolor = selecteditmlbl;
          firstscrollstackpage.getChildControl("pane").getContentElement().setStyle("color-scheme", "normal");
        }
        else if (selecteditmlbl == "Orange" && localStorage.waxthememode == "light")
        {
          qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.Brand2);
          firstscrollstackpage.getChildControl("pane").getContentElement().setStyle("color-scheme", "normal");
        }
        else if (selecteditmlbl == "Blue" && localStorage.waxthememode == "dark")
        {
          qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.Brand1Dark);
          firstscrollstackpage.getChildControl("pane").getContentElement().setStyle("color-scheme", "dark");
        }
        else if (selecteditmlbl == "Orange" && localStorage.waxthememode == "dark")
        {
          qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.Brand2Dark);
          firstscrollstackpage.getChildControl("pane").getContentElement().setStyle("color-scheme", "dark");
        }
        localStorage.waxthemecolor = selecteditmlbl;
        document.querySelector(':root').style.setProperty("--compoundbrandbackground", qx.theme.manager.Color.getInstance().resolve("CompoundBrandBackground"));
      });

      // Wax Theme switcher - light dark
      waxcolorswitch.addListener("changeValue", function(e) {
        if (e.getData()) {
          //qx.bom.element.AnimationCss.animate(cbimage, slideright);
          localStorage.waxthemecolor == "Blue" ? qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.Brand1Dark) : qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.Brand2Dark);
          firstscrollstackpage.getChildControl("pane").getContentElement().setStyle("color-scheme", "dark");
          localStorage.waxthememode = "dark";
        }
        else {
          //qx.bom.element.AnimationCss.animateReverse(cbimage, slideright);
          localStorage.waxthemecolor == "Blue" ? qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.Brand1) : qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.Brand2);
          firstscrollstackpage.getChildControl("pane").getContentElement().setStyle("color-scheme", "normal");
          localStorage.waxthememode = "light";
        }
        document.querySelector(':root').style.setProperty("--compoundbrandbackground", qx.theme.manager.Color.getInstance().resolve("CompoundBrandBackground"));
      });

      if (localStorage.waxthememode)
      {
        if (localStorage.waxthememode == "light")
        {
          waxcolorswitch.setValue(false);
          //qx.theme.manager.Color.getInstance().setTheme(ville.wax.theme.Color);
          //firstscrollstackpage.getChildControl("pane").getContentElement().setStyle("color-scheme", "normal");
        }
        else
        {
          waxcolorswitch.setValue(true);
          //qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.ColorDark);
          //firstscrollstackpage.getChildControl("pane").getContentElement().setStyle("color-scheme", "dark");
        }
      }
      else 
      {
        localStorage.waxthememode = "light";
      }

      if (localStorage.waxthemecolor)
      {
        if (localStorage.waxthemecolor == "Blue")
        {
          selectbrand.setSelection([blueItem]);
          if (waxcolorswitch.getValue())
          {
            //dark
            qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.Brand1Dark);
            firstscrollstackpage.getChildControl("pane").getContentElement().setStyle("color-scheme", "dark");
          }
          else
          {
            //light
            qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.Brand1);
            firstscrollstackpage.getChildControl("pane").getContentElement().setStyle("color-scheme", "normal");
          }
        }
        else
        {
          selectbrand.setSelection([orangeItem]);
          if (waxcolorswitch.getValue())
          {
            //dark
            qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.Brand2Dark);
            firstscrollstackpage.getChildControl("pane").getContentElement().setStyle("color-scheme", "dark");
          }
          else
          {
            //light
            qx.theme.manager.Color.getInstance().setTheme(ville.theme.fluent.Brand2);
            firstscrollstackpage.getChildControl("pane").getContentElement().setStyle("color-scheme", "normal");
          }
        }
      }
      else 
      {
        localStorage.waxthemecolor = "Blue";
      }

      // Wax Switch - animate on change of value
      waxswitch.addListener("changeValue", function(e) {
        var cbimage = waxswitch.getChildControl("icon").getContentElement().getDomElement();
        if (e.getData())
          qx.bom.element.AnimationCss.animate(cbimage, slideright);
        else
          qx.bom.element.AnimationCss.animateReverse(cbimage, slideright);
      }, this); 

      waxswitch2.addListener("changeValue", function(e) {
        var cbimage = waxswitch2.getChildControl("icon").getContentElement().getDomElement();
        if (e.getData())
          qx.bom.element.AnimationCss.animate(cbimage, slideright);
        else
          qx.bom.element.AnimationCss.animateReverse(cbimage, slideright);
      }, this); 

      //***  CODE for applying popup fading in and out  ***//
      var fadeinleft = {
        duration: 300, timing: "ease-out", origin: "left top", keep: 100,
        keyFrames : {
          0: {opacity: 0, left: "-300px"},
          100: {opacity: 1, left: "0px"}
        }
      };

      // Scroll feature
      var firstscrollcontentEl = firstscrollstackpage.getChildControl("pane").getContentElement();
      firstscrollcontentEl.addListener("scroll", function(e) {
        //var lblloctop = firstscrollstackpage.getItemTop(lblwaxdemo);
        //var lbllocbtm = firstscrollstackpage.getItemBottom(lblwaxdemo);
        var scrollval = firstscrollcontentEl.getScrollY();
        //var scrollrange = lbllocbtm - lblloctop - 15;
        //var opacityincrement = 1/scrollrange;
        //var atmopac = atmlogocurrentpage.getOpacity();
        //var lblwdopac = lblwaxdemo.getOpacity();
        //var firstscrollheight = firstscrollstackpage.getItemBottom(lbltheend);
        
        // top bar
        // if (scrollval >= lbllocbtm-6)
        if (scrollval >= 60) {
          northhbox.set({decorator: "topheader-wax-scrolldown"});
        } else {
          northhbox.set({decorator: "topheader-wax"});
        }

        /*
        //bottom bar
        var menuscrolldom = menuscrollcontentEl.getDomElement();

        //console.log("offsetheight: " + menuscrolldom.offsetHeight + " scrollTop: " + menuscrolldom.scrollTop + " scrollheight: " + menuscrolldom.scrollHeight);

        if (menuscrolldom.offsetHeight + menuscrolldom.scrollTop >= menuscrolldom.scrollHeight - 1) {
          southbox.set({backgroundColor: bckgcolormain, decorator: "bottombar-blended"});
        } else {
          southbox.set({backgroundColor: bckgcolortopbtm, decorator: "bottombar"});
        }*/

      });

      // Second Page 
      var secondstackpage = new qx.ui.container.Composite(new qx.ui.layout.VBox(stackpagevboxspacing)).set({padding: stackpagepadding});
      var lblsecondpageheader = new qx.ui.basic.Label("Second Page").set({font: stackpageheaderfont});
      secondstackpage.add(lblsecondpageheader);

      //Password show
      var txtpassword = new qx.ui.form.PasswordField();
      secondstackpage.add(txtpassword);
      var chkshowvalue = new qx.ui.form.CheckBox("Show password");
      chkshowvalue.addListener("changeValue", function(e) {
        if (e.getData())
          txtpassword.getContentElement().setAttribute("type", "text");
        else
          txtpassword.getContentElement().setAttribute("type", "password");
      });
      secondstackpage.add(chkshowvalue);

      var btngobackhome = new qx.ui.form.Button("Go Back Home").set({allowGrowX: false});
      secondstackpage.add(btngobackhome);
      btngobackhome.addListener("execute", function(e) {
        centerbox.setSelection([firstscrollstackpage]);
        westboxbuttongroup.setSelection([tbtnfirststackpage]);
      });
      
      // Wax TabView 1 - Oval mark that matches all bounds
      var wtabView1 = new qx.ui.tabview.TabView();

      var page1 = new qx.ui.tabview.Page("Home").set({appearance: "wax-tabview-page"});
      page1.setLayout(new qx.ui.layout.VBox());
      page1.add(new qx.ui.basic.Label("Home Page"));
      wtabView1.add(page1);

      var page2 = new qx.ui.tabview.Page("Next Long").set({appearance: "wax-tabview-page"});
      page2.setLayout(new qx.ui.layout.VBox());
      page2.add(new qx.ui.basic.Label("Next Long Page"));
      wtabView1.add(page2);

      var page3 = new qx.ui.tabview.Page("Last Very Long").set({appearance: "wax-tabview-page"});
      page3.setLayout(new qx.ui.layout.VBox());
      page3.add(new qx.ui.basic.Label("Last Very Long Page"));
      wtabView1.add(page3);

      // secondstackpage.add(wtabView1);
      //firststackpage.add(new qx.ui.basic.Label("TabView").set({font: stackpageheaderfont, padding: [80, 0, 0, 0]}));
      //firststackpage.add(wtabView1);

      wtabView1.setSelection([page2]);

      //--START--// Animate tabview //--//--//
      var tabviewbarmark = new qx.ui.core.Widget().set({backgroundColor: "blue", zIndex: 4, decorator : "wax-tabview-mark"});
      //add the widget to the tabview's bar
      wtabView1.getChildControl("bar").add(tabviewbarmark); 

      //animate the widget when the tabview's selection changes
      wtabView1.addListener("changeSelection", function(e) {
        //previous tabview buttons location and size details
        var oldbounds = e.getOldData()[0].getChildControl("button").getBounds();
        //the clicked tabview buttons location and size details
        var newbounds = e.getData()[0].getChildControl("button").getBounds();
        //grab the marks dom element
        var tbvmarkdom = tabviewbarmark.getContentElement().getDomElement();
        // build and adjust the animation each time since tabview buttons vary in size and location
        var tabviewbarmarkmove = {
          duration: 300, 
          timing: "ease", 
          keyFrames : {
            0: {"left": oldbounds.left + "px", "top": oldbounds.top + "px", "width": oldbounds.width + "px", "height": oldbounds.height + "px"},
            100: {"left": newbounds.left + "px", "top": newbounds.top + "px", "width": newbounds.width + "px", "height": newbounds.height + "px"}
          },
          keep : 100
        };
        //run the animation on the marks dom element
        qx.bom.element.AnimationCss.animate(tbvmarkdom, tabviewbarmarkmove);
      }, this); 
      //--//--// Animate tabview //--END--//
      wtabView1.addListenerOnce("appear", function() {
        var movetobounds = wtabView1.getSelection()[0].getChildControl("button").getBounds();
        //tabviewbarmark.setUserBounds(movetobounds.left, movetobounds.top, movetobounds.width, movetobounds.height);
        tabviewbarmark.getContentElement().setStyles({
          "left": movetobounds.left + "px", 
          "top": movetobounds.top + "px", 
          "width": movetobounds.width + "px", 
          "height": movetobounds.height + "px"
        });
      })

      

      // secondstackpage.add(wtabView2);
      

      // Wax TabView - gray bar with white block
      var wtabView3 = new qx.ui.tabview.TabView().set({appearance: "wax-tabview-block"});

      var page1tbv3 = new qx.ui.tabview.Page("Day").set({appearance: "wax-tabview-page-block"});
      page1tbv3.setLayout(new qx.ui.layout.VBox());
      page1tbv3.add(new qx.ui.basic.Label("Day"));
      wtabView3.add(page1tbv3);

      page1tbv3.addListener("appear", function() {
        var tbvmarkdom = this.getContentElement().getDomElement();
        qx.bom.element.AnimationCss.animate(tbvmarkdom,
          {
            duration: 200,
            keyFrames : 
            {
              0 : {opacity: 0, top: this.getBounds().top + 6 + "px"},
              100 : {opacity: 1, top: this.getBounds().top + "px"}
            },
            keep : 100,
            timing: "ease-in"
          });
      });

      var page2tbv3 = new qx.ui.tabview.Page("Week").set({appearance: "wax-tabview-page-block"});
      page2tbv3.setLayout(new qx.ui.layout.VBox());
      page2tbv3.add(new qx.ui.basic.Label("Week"));
      wtabView3.add(page2tbv3);

      page2tbv3.addListener("appear", function() {
        var tbvmarkdom = this.getContentElement().getDomElement();
        qx.bom.element.AnimationCss.animate(tbvmarkdom,
          {
            duration: 200,
            keyFrames : 
            {
              0 : {opacity: 0, top: this.getBounds().top + 6 + "px"},
              100 : {opacity: 1, top: this.getBounds().top + "px"}
            },
            keep : 100,
            timing: "ease-in"
          });
      });

      var page3tbv3 = new qx.ui.tabview.Page("Month").set({appearance: "wax-tabview-page-block"});
      page3tbv3.setLayout(new qx.ui.layout.VBox());
      page3tbv3.add(new qx.ui.basic.Label("Month"));
      wtabView3.add(page3tbv3);

      page3tbv3.addListener("appear", function() {
        var tbvmarkdom = this.getContentElement().getDomElement();
        qx.bom.element.AnimationCss.animate(tbvmarkdom,
          {
            duration: 200,
            keyFrames : 
            {
              0 : {opacity: 0, top: this.getBounds().top + 6 + "px"},
              100 : {opacity: 1, top: this.getBounds().top + "px"}
            },
            keep : 100,
            timing: "ease-out"
          });
      });

      // secondstackpage.add(wtabView3);
     // firststackpage.add(wtabView3);

      wtabView3.setSelection([page2tbv3]);

      var tabviewbarblock = new qx.ui.core.Widget().set({backgroundColor: "white", zIndex: 4, decorator : "wax-tabview-block"});
      wtabView3.getChildControl("bar").add(tabviewbarblock); 

      wtabView3.addListener("changeSelection", function(e) {
        var oldbounds = e.getOldData()[0].getChildControl("button").getBounds();
        var newbounds = e.getData()[0].getChildControl("button").getBounds();
        var tbvmarkdom = tabviewbarblock.getContentElement().getDomElement();
        var tabviewbarblockmove = {
          duration: 300, 
          timing: "ease", 
          keyFrames : {
            0: {"left": oldbounds.left + "px", "top": oldbounds.top + 2 + "px", "width": oldbounds.width + "px", "height": oldbounds.height - 4 + "px"},
            100: {"left": newbounds.left + "px", "top": newbounds.top + 2 + "px", "width": newbounds.width + "px", "height": newbounds.height - 4 + "px"}
          },
          keep : 100
        };
        qx.bom.element.AnimationCss.animate(tbvmarkdom, tabviewbarblockmove);
      }, this); 

      wtabView3.addListenerOnce("appear", function() {
        var movetobounds = wtabView3.getSelection()[0].getChildControl("button").getBounds();
        tabviewbarblock.getContentElement().setStyles({
          "left": movetobounds.left + "px", 
          "top": movetobounds.top + 2 + "px", 
          "width": movetobounds.width + "px", 
          "height": movetobounds.height - 4 + "px"
        });
      });

      //firststackpage.add(new qx.ui.basic.Label("Drawer").set({font: stackpageheaderfont, padding: [80, 0, 0, 0]}));

      var mainmenudrawerbutton = new qx.ui.form.Button("Left side, main menu style", menuimage).set({allowStretchX: false, allowStretchY: false});
      //firststackpage.add(mainmenudrawerbutton);

      // Add Main Menu Popup Listeners
      mainmenudrawerbutton.addListener("execute", function(e)
      {
        if (qx.core.Environment.get("browser.name") != "edge"){
          this._blocker.blockContent(mainmenudrawerbutton.getZIndex());
        }
        mainmenupopup.setHeight(parseInt(this.getRoot().getContentElement().getStyle("height")));
        mainmenupopup.show();
      }, this);

      var btnOpenwin = new qx.ui.form.Button("Try the Window based drawer").set({allowGrowX: false});
      var winDrawer = this.__createDetailWindow();
      winDrawer.set({height: 500, width: 450});
      winDrawer.setLayout(new qx.ui.layout.Canvas());
      
      var winbtndrawer = new qx.ui.form.Button("Open Window Drawer").set({allowGrowX: false});
      winDrawer.add(winbtndrawer);

      // tested using popup
      var winmenupopup = new qx.ui.popup.Popup().set({allowGrowX: false, padding: 10, minWidth: 300});
      winmenupopup.setLayout(new qx.ui.layout.VBox(0));
      winmenupopup.setAutoHide(false);
      winmenupopup.add(new qx.ui.basic.Label("This is a window drawer"));
      
      var btnclosewinmenupopup = new qx.ui.form.Button("Close drawer");
      btnclosewinmenupopup.addListener("execute", function() {
        var domtable = winmenupopup.getContentElement().getDomElement();
        qx.bom.element.Animation.animateReverse(domtable, fadeinleft).addListener("end", function() {
          winDrawer.remove(winmenupopup);
        });
      });
      winmenupopup.add(btnclosewinmenupopup);

      winbtndrawer.addListener("execute", function() {
        winmenupopup.setHeight(parseInt(winDrawer.getChildControl("pane").getContentElement().getStyle("height")));
        winDrawer.add(winmenupopup);
        winmenupopup.setVisibility("visible");
      });

      winmenupopup.addListener("appear", function() {
        this.setDomPosition(0,0);
        var domtable = this.getContentElement().getDomElement();  
        qx.bom.element.Animation.animate(domtable, fadeinleft);
      });

      //firststackpage.add(btnOpenwin);

      btnOpenwin.addListener("execute", function() {
        winDrawer.center();
        winDrawer.fadeIn(200);
        winDrawer.show();
      });

      winDrawer.addListener("beforeClose", function(e) {
        e.preventDefault();
        winDrawer.fadeOut(200).addListener("end", function() {
          winDrawer.exclude();
        });
      });

      // --Drawer--
      winDrawer.addListener("resize", function(e) {
        if (winmenupopup.getVisibility() == "visible" & !winmenupopup.getAutoHide()){
          winmenupopup.setHeight(e.getData().height);
        }
      });

      // --Mobile--
      //firststackpage.add(new qx.ui.basic.Label("Mobile").set({font: stackpageheaderfont, padding: [80, 0, 0, 0]}));
     // firststackpage.add(new qx.ui.basic.Label("Controls and features that you would expect from a mobile app, such as TabBar, modal and non-modal drawers/popups, page transitions and unimpeded scrolling").set({rich: true, wrap: true}));
      var btnSwitchtoMobileView = new qx.ui.form.Button("Switch to Mobile View").set({allowGrowX: false});
      //firststackpage.add(btnSwitchtoMobileView);

      btnSwitchtoMobileView.addListener("execute", function(e){
        this.setDemoMode("mobile");
        northhbox.setVisibility("visible");
        southbox.setVisibility("visible");
        //profilemenubutton.setVisibility("hidden");
        //mainmenupart.setVisibility("hidden");
        centerbox.setSelection([menuscrollstackpage]);
        //atmlogocurrentpage.set({visibility: "visible", label:"Menu"});
        mainmenubuttongrouphym.setSelection([tbtnmenuhym]);
      }, this);

      // Third Page
      var thirdstackpage = new qx.ui.container.Composite(new qx.ui.layout.VBox(stackpagevboxspacing)).set({padding: stackpagepadding});
      var lblthirdpageheader = new qx.ui.basic.Label("Third Page").set({font: stackpageheaderfont});     
      thirdstackpage.add(lblthirdpageheader);
      var btngobackhome3 = new qx.ui.form.Button("Go Back Home").set({allowGrowX: false});
      thirdstackpage.add(btngobackhome3);
      btngobackhome3.addListener("execute", function(e) {
        centerbox.setSelection([firstscrollstackpage]);
        westboxbuttongroup.setSelection([tbtnfirststackpage]);
      });

      firststackpage.add(new qx.ui.basic.Label("ville.Fluent").set({rich: true, backgroundColor: "NeutralBackground1", font: "ville-fluent-logo-footer", decorator: "heading2", textAlign: "center", allowGrowX: true, marginTop: 60, paddingTop: 40}));
      firststackpage.add(new qx.ui.basic.Label("Created by Chris Eskew - sqville").set({rich: true, backgroundColor: "NeutralBackground1", font: "default", textAlign: "center", allowGrowX: true, paddingBottom: 40}));



      // Menu Page for mobile only
      var bckgcolormain = "#F2F1F6";
      var bckgcolortopbtm = "#F7F7F7";
      var bordersouthbox = "#B3B3B3";
      var boxsepcolor = "#C7C7C7";
      var arrowcolor = "#C4C4C4";
      var searchboxcolor = "#E4E3E9";

      southbox.setBackgroundColor(bckgcolortopbtm);

      var menuscrollstackpage = new ville.wax.scroll.Scroll().set({overflow: ["hidden", "auto"], padding: 0, margin: 0, contentPadding: [0,0,0,0]});
      // var menuscrollstackpage = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});
      var menupage = new qx.ui.container.Composite(new qx.ui.layout.VBox(10)).set({ padding: [10, 20], backgroundColor: bckgcolormain });
      var btnAbout = new qx.ui.form.Button("Detail Screen", "ville/wax/wax-icon-24-outline.svg").set({appearance : "hym-page-button"});
      var btnSwitchBack = new qx.ui.form.Button("Switch to Desktop", "ville/wax/wax-icon-24-outline.svg").set({appearance : "hym-page-button"});
      var btnProfile = new qx.ui.form.Button("Modal Popup", "ville/wax/wax-icon-24-outline.svg").set({appearance : "hym-page-button"});
      var btnSettings = new qx.ui.form.Button("Next Item", "ville/wax/wax-icon-24-outline.svg").set({appearance : "hym-page-button"});
      var btnLogout = new qx.ui.form.Button("Next Item", "ville/wax/wax-icon-24-outline.svg").set({appearance : "hym-page-button"});
      var btnLastBtn = new qx.ui.form.Button("Last Item", "ville/wax/wax-icon-24-outline.svg").set({appearance : "hym-page-last-button"});
      
      var lblwaxdemo = new qx.ui.basic.Label("Menu").set({font: "hym-app-page-header"});
      
      var firstbtnlistmenupage = new qx.ui.container.Composite(new qx.ui.layout.VBox(0)).set({padding: [0,0], backgroundColor: "white", decorator: "hym-box-noborder"});
      firstbtnlistmenupage.add(btnSwitchBack);
      firstbtnlistmenupage.add(btnAbout);
      firstbtnlistmenupage.add(btnProfile);
      firstbtnlistmenupage.add(btnSettings);
      firstbtnlistmenupage.add(btnLogout);
      firstbtnlistmenupage.add(btnLastBtn);

      var secondbtnlistmenupage = new qx.ui.container.Composite(new qx.ui.layout.VBox(10)).set({margin: [10,0], padding: [16,0], backgroundColor: "white", decorator: "hym-box-noborder"});
      var btnAddaction = new qx.ui.form.Button("Add Something").set({appearance : "hym-page-link-last-button"});
      secondbtnlistmenupage.add(btnAddaction);

      var lblAreaHeadergetmore = new qx.ui.basic.Label("Get More From The Menu").set({padding: 0, margin: [20,0,0,0], font: "hym-app-page-section-header"});
      var thirdblockmenupage = new qx.ui.container.Composite(new qx.ui.layout.VBox(20)).set({margin: [0,0], padding: [16,14], backgroundColor: "white", decorator: "hym-box-noborder"});
      var thirdblockatom = new qx.ui.basic.Atom("<b>Set Up Your Item</b><br>When needed, your item, propertly setup, can help you in many ways. It can get you what you need done in record time.", "ville/wax/KeyItem.svg").set({rich: true, iconPosition: "top", center: true});
      thirdblockatom.getChildControl("icon").set({scale: true, width: 84, height: 84});
      //thirdblockatom.getChildControl("label").set({wrap: true});
      var btngetstartedaction = new qx.ui.form.Button("Get Started").set({appearance: "wax-form-button", allowGrowX: false, height: 40, width: 160, alignX: "center"});
      thirdblockmenupage.add(thirdblockatom);
      thirdblockmenupage.add(btngetstartedaction);

      var lblAreaHeaderarticles = new qx.ui.basic.Label("Articles").set({padding: 0, margin: [20,0,0,0], font: "hym-app-page-section-header"});
      var articleblockmenupage = new qx.ui.container.Composite(new qx.ui.layout.VBox(20).set({alignY:"bottom"})).set({height: 300, margin: [0,0], padding: [0,0], backgroundColor: "white", decorator: "article"});
      var articleblockatom = new qx.ui.basic.Atom("<b>Do Bright Colors Make for Faster Cars</b><br>We explor the connection between form and function. Does color help with speed or this this jibberish in order to take up space.").set({padding: 14, backgroundColor: "white", rich: true, center: true});
      //articleblockatom.getChildControl("icon").set({width: 300});
      articleblockmenupage.add(articleblockatom);

      var lbltheend = new qx.ui.basic.Label("The End").set({padding: 0, margin: [20,0,0,0]});

      menupage.add(lblwaxdemo);
      menupage.add(firstbtnlistmenupage);
      menupage.add(secondbtnlistmenupage);
      menupage.add(lblAreaHeadergetmore);
      menupage.add(thirdblockmenupage);
      menupage.add(lblAreaHeaderarticles);
      menupage.add(articleblockmenupage);
      menupage.add(lbltheend);
      menuscrollstackpage.add(menupage);

      // Test mobile modal window animations
      var mobilemodalwindow = new qx.ui.window.Window("Detail Window").set({ appearance: "wax-window", allowMaximize : false, allowMinimize : false, modal: true, movable: false, resizable: false });
      mobilemodalwindow.setLayout(new qx.ui.layout.VBox(4));
      mobilemodalwindow.add(new qx.ui.basic.Label("I am a modal window"));

      // northhbox.setBackgroundColor(bckgcolormain);
      //northhbox.setBackgroundColor(ville.global.color.White);
      northtoolbar.setBackgroundColor("transparent");
      //decorator : "topheader"
      atmlogocurrentpage.set({visibility: "visible", label:"Menu", opacity: 0 });

      // Scroll feature
      var menuscrollcontentEl = menuscrollstackpage.getChildControl("pane").getContentElement();
      menuscrollcontentEl.addListener("scroll", function(e) {
        var menulblloctop = menuscrollstackpage.getItemTop(lblwaxdemo);
        var menulbllocbtm = menuscrollstackpage.getItemBottom(lblwaxdemo);
        var scrollval = menuscrollcontentEl.getScrollY();
        var scrollrange = menulbllocbtm - menulblloctop - 15;
        var opacityincrement = 1/scrollrange;
        var atmopac = atmlogocurrentpage.getOpacity();
        var lblwdopac = lblwaxdemo.getOpacity();

        var menuscrollheight = menuscrollstackpage.getItemBottom(lbltheend);
        
        // top bar
        if (scrollval >= menulbllocbtm-6) {
          atmlogocurrentpage.set({ opacity: 1 });
          northhbox.set({decorator: "topheader"});
        } else {
          atmlogocurrentpage.set({ opacity: 0 });
          northhbox.set({decorator: "topheader-blended"});
        }

        
        //bottom bar
        var menuscrolldom = menuscrollcontentEl.getDomElement();

        //console.log("offsetheight: " + menuscrolldom.offsetHeight + " scrollTop: " + menuscrolldom.scrollTop + " scrollheight: " + menuscrolldom.scrollHeight);

        if (menuscrolldom.offsetHeight + menuscrolldom.scrollTop >= menuscrolldom.scrollHeight - 1) {
          southbox.set({backgroundColor: bckgcolormain, decorator: "bottombar-blended"});
        } else {
          southbox.set({backgroundColor: bckgcolortopbtm, decorator: "bottombar"});
        }
        
        /*
        if (scrollval > menulblloctop) {
          atmlogocurrentpage.set({ opacity: atmopac + opacityincrement });
        } else {
          atmlogocurrentpage.set({ opacity: 0 });
        }
        
        /*if (scrollval >= menulblloc) 
        {
          atmlogocurrentpage.set({visibility: "visible", label:"Menu" });
        } 
        else if (scrollval >= menulblloc + 10) 
        {
          northhbox.set({decorator: "topheader"});
        }
        else if (scrollval < menulblloc + 10 & scrollval > menulblloc -8) 
        {
          northhbox.set({decorator: null});
        }
        else
        {
          atmlogocurrentpage.set({visibility: "hidden"});
          northhbox.set({decorator: null});
        }*/
          
      });

      //***  CODE for applying popup fading in and out  ***//
      var scaleback = {
        duration: 400, 
        timing: "cubic-bezier(0.165, 0.84, 0.44, 1)", 
        keyFrames : {
          0: {scale: 1},
          100: {scale: .96}
        },
        keep : 100
      };

      btnProfile.addListener("execute", function(e) {
        var appdockdom = appcompdock.getContentElement().getDomElement();
        appcompdock.setDecorator("scaledback-box");
        qx.bom.element.AnimationCss.animate(appdockdom, scaleback);
        mobilemodalwindow.show();
      }, this);

      mobilemodalwindow.addListener("appear", function() {
        var appheight = parseInt(this.getRoot().getContentElement().getStyle("height"));
        var appwidth = parseInt(this.getRoot().getContentElement().getStyle("width"));
        mobilemodalwindow.moveTo(0,appheight);
        mobilemodalwindow.set({width: appwidth, height: appheight - 18});
        var popupup = {
          duration: 400, 
          timing: "cubic-bezier(0.165, 0.84, 0.44, 1)", 
          keyFrames : {
            0: {top: appheight + "px"},
            100: {top: "20px"}
          },
          keep : 100
        };
        qx.bom.element.AnimationCss.animate(mobilemodalwindow.getContentElement().getDomElement(), popupup);
      }, this);

      mobilemodalwindow.addListener("beforeClose", function(e) {
        e.preventDefault();
        var appdockdom = appcompdock.getContentElement().getDomElement();
        var appheight = parseInt(this.getRoot().getContentElement().getStyle("height"));
        qx.bom.element.AnimationCss.animateReverse(appdockdom, scaleback);
        var popupdown = {
          duration: 200, 
          timing: "ease-in", 
          keyFrames : {
            0: {top: "20px"},
            100: {top: appheight + "px"}
          },
          keep : 100
        };
        qx.bom.element.AnimationCss.animate(mobilemodalwindow.getContentElement().getDomElement(), popupdown).addListener("end", function() {
          mobilemodalwindow.hide();
          appcompdock.setDecorator("normal-box");
        });
      }, this);

      // add a mobile detail page
      var mobiledetailscrollstackpage = new ville.wax.scroll.Scroll().set({overflow: ["hidden", "auto"], padding: 0, margin: 0, contentPadding: [0,0,0,0]});
      // var mobiledetailscrollstackpage = new qx.ui.container.Scroll().set({padding: 0, margin: 0, contentPadding: [0,0,0,0]});

      var mobiledetailpage = new qx.ui.container.Composite(new qx.ui.layout.VBox(10)).set({ padding: [10, 20], backgroundColor: bckgcolormain });
      mobiledetailscrollstackpage.add(mobiledetailpage);
      var lbldetailscreen = new qx.ui.basic.Label("Detail Screen").set({font: "hym-app-page-header"});
      mobiledetailpage.add(lbldetailscreen);
      var btnBackButton = new qx.ui.form.Button("na").set({visibility: "hidden"});
      //mainmenupart.add(btnBackButton);

      btnAbout.addListener("execute", function(e) {
        centerbox.setSelection([mobiledetailscrollstackpage]);
        btnBackButton.set({ label: "Menu", visibility: "visible" });
        //mainmenupart.setVisibility("visible");
      }, this);

    
      // Assemble - THE STACK 
      centerbox.add(firstscrollstackpage);
      centerbox.add(secondstackpage);
      centerbox.add(thirdstackpage);
      centerbox.add(menuscrollstackpage);
      centerbox.add(mobiledetailscrollstackpage);

      // Show the default page
      centerbox.setSelection([firstscrollstackpage]);

      

      // *** END of THE STACK ******************************************************
      
      // *** Populate the Main Menu and Popup Main Menu with content ***************
      // Create Menu Buttons that will navigate the user through THE STACK Pages ***
      // Populate westBox with content
      var atmleftnavheader = new qx.ui.basic.Atom("Wax Demo", "ville/wax/Wax_demo_logo.png").set({appearance: "header-atom", anonymous: true, focusable: false, selectable: false });
      atmleftnavheader.getChildControl("icon").set({ scale : true });
      westbox.add(atmleftnavheader);
      var tbtnfirststackpage = new ville.wax.demo.MenuButton("Home");
      tbtnfirststackpage.getChildControl("icon").set({ scale : true , width: 28, height: 28});
      westbox.add(tbtnfirststackpage);

      var tbtnSecondPage = new ville.wax.demo.MenuButton("Second Page");
      tbtnSecondPage.getChildControl("icon").set({ scale : true , width: 28, height: 28});
      westbox.add(tbtnSecondPage);

      var tbtnThirdPage = new ville.wax.demo.MenuButton("Third Page");
      tbtnThirdPage.getChildControl("icon").set({ scale : true , width: 28, height: 28});
      westbox.add(tbtnThirdPage);

      westbox.add(new qx.ui.core.Spacer(), {flex: 1});
      westbox.add(new qx.ui.basic.Label("Bottom of area").set({textAlign: "center", allowGrowX: true, height: 40}));

      var westboxbuttongroup = new qx.ui.form.RadioGroup();
      westboxbuttongroup.add(tbtnfirststackpage, tbtnSecondPage, tbtnThirdPage);

      //--START--// Animate westbox nav //--//--//
      /*var westboxmark = new qx.ui.core.Widget();
      westbox.add(westboxmark);
      westboxbuttongroup.addListener("changeSelection", function(e) {
        if (e.getOldData()[0].getBounds() && e.getData()[0].getBounds()){
          var oldbounds = e.getOldData()[0].getBounds();
          var newbounds = e.getData()[0].getBounds();
          westboxmark.set({decorator : "mainmenubutton-box-mark"});
          e.getData()[0].setDecorator("mainmenubutton-box-new");
          //grab the marks dom element
          var westboxmarkdom = westboxmark.getContentElement().getDomElement();
          // build and adjust the animation each time since tabview buttons vary in size and location
          var westboxmarkmove = {
            duration: 300, 
            timing: "ease", 
            keyFrames : {
              0: {"left": oldbounds.left + "px", "top": oldbounds.top + "px", "width": oldbounds.width + "px", "height": oldbounds.height + "px"},
              100: {"left": newbounds.left + "px", "top": newbounds.top + "px", "width": newbounds.width + "px", "height": newbounds.height + "px"}
            },
            keep : 100
          };
          //run the animation on the marks dom element
          qx.bom.element.AnimationCss.animate(westboxmarkdom, westboxmarkmove);
        }
      }); */
      //--//--// Animate westbox nav //--END--//

      /*tbtnfirststackpage.addListener("appear", function(e) {
        westboxmark.set({opacity : .08, backgroundColor : "blue"});
        this.setBackgroundColor("yellow");
        westboxmark.setDomPosition(0, 0);
      });*/
      
     
      

      
      // CLONE the above controls
      var atmmenuleftnavheader = atmleftnavheader.clone();
      atmmenuleftnavheader.getChildControl("icon").set({ scale : true });
      var tbtnmenufirststackpage = tbtnfirststackpage.clone();
      tbtnmenufirststackpage.getChildControl("icon").set({ scale : true });
      var tbtnmenuSecondPage = tbtnSecondPage.clone();
      tbtnmenuSecondPage.getChildControl("icon").set({ scale : true });
      var tbtnmenuThirdPage = tbtnThirdPage.clone();
      tbtnmenuThirdPage.getChildControl("icon").set({ scale : true });

      // Add the clones to the Main Menu Popup
      mainmenupopup.add(atmmenuleftnavheader);
      mainmenupopup.add(tbtnmenufirststackpage);
      mainmenupopup.add(tbtnmenuSecondPage);
      mainmenupopup.add(tbtnmenuThirdPage);
      mainmenupopup.add(new qx.ui.core.Spacer(), {flex: 1});
      mainmenupopup.add(new qx.ui.basic.Label("Bottom of area").set({textAlign: "center", allowGrowX: true, height: 40}));



      // Assign all the clones their own RadioGroup
      var mainmenubuttongroup = new qx.ui.form.RadioGroup();
      mainmenubuttongroup.add(tbtnmenufirststackpage, tbtnmenuSecondPage, tbtnmenuThirdPage);
      
      


      // --Drawer--
      // Turn off auto hide so we can animate the closing of the main menu popup
      mainmenupopup.setAutoHide(false);

      // --Drawer--
      if (!mainmenupopup.getAutoHide()) {
        mainmenupopup.addListenerOnce("appear", function(e) {
          var domtable = mainmenupopup.getContentElement().getDomElement();
          qx.event.Registration.addListener(document.documentElement, "pointerdown",function(e){
            var target = qx.ui.core.Widget.getWidgetByElement(e.getTarget());
            if (mainmenupopup.isVisible() & target != mainmenupopup & !qx.ui.popup.Manager.getInstance().getContainsFunction()(mainmenupopup, target)) {
              this._blocker.unblock();
              qx.bom.element.Animation.animateReverse(domtable, fadeinleft).addListener("end", function() {
                mainmenupopup.exclude();
              });
            }
          }, this, true);
          
        }, this);
      }

      // --Drawer--
      mainmenupopup.addListener("appear", function(e) {
        var domtable = mainmenupopup.getContentElement().getDomElement();  
        qx.bom.element.Animation.animate(domtable, fadeinleft);
      }, this);

      // Hide all popups on window blur --Drawer--
      qx.bom.Element.addListener(window, "blur", function() {
        if (mainmenupopup.getVisibility() == "visible"){
          this._blocker.unblock();
          var domtable = mainmenupopup.getContentElement().getDomElement();
          qx.bom.element.Animation.animateReverse(domtable, fadeinleft).addListener("end", function() {
            mainmenupopup.hide();
          });
        }
      }, this);

      // --Drawer--
      approot.addListener("resize", function(e) {
        if (mainmenupopup.getVisibility() == "visible" & !mainmenupopup.getAutoHide()){
          mainmenupopup.setHeight(e.getData().height);
        }
      });






      // *** END of Main Menu and Main Menu Popup **********************************
    
      // *** Populate the Hybrid Mobile (hym) Main Menu  content *******************
      // Create Menu Buttons that will navigate the user through THE STACK Pages ***

      // Populate southbox with content
      var tbtnfirststackpagehym = new ville.wax.demo.MenuButton("Home").set({appearance: "mainmenubutton-hym-home", iconPosition: "top"});
      tbtnfirststackpagehym.getChildControl("icon").set({ scale : true, width: 28, height: 28 });
      var tbtnsecondstackpagehym = new ville.wax.demo.MenuButton("Second").set({appearance: "mainmenubutton-hym", iconPosition: "top"});
      tbtnsecondstackpagehym.getChildControl("icon").set({ scale : true, width: 28, height: 28 });
      var tbtnthirdpagehym = new ville.wax.demo.MenuButton("Third").set({appearance: "mainmenubutton-hym", iconPosition: "top"});
      tbtnthirdpagehym.getChildControl("icon").set({ scale : true, width: 28, height: 28 });
      var tbtnmenuhym = new ville.wax.demo.MenuButton("Menu").set({appearance: "mainmenubutton-hym-menu", iconPosition: "top"});
      tbtnmenuhym.getChildControl("icon").set({ scale : true, width: 28, height: 28 });

      southbox.add(tbtnfirststackpagehym, {flex: 1});
      southbox.add(tbtnsecondstackpagehym, {flex: 1});
      southbox.add(tbtnthirdpagehym, {flex: 1});
      southbox.add(tbtnmenuhym, {flex: 1});

      southbox.setVisibility("excluded");

      // Assign all the clones their own RadioGroup
      var mainmenubuttongrouphym = new qx.ui.form.RadioGroup();
      mainmenubuttongrouphym.add(tbtnfirststackpagehym, tbtnsecondstackpagehym, tbtnthirdpagehym, tbtnmenuhym);

      // *** END of Hybrid Mobil (hym) Main Menu and Main Menu Popup ******************************


      // *** Wire all the Main Menu Buttons to THE STACK Pages (via Listeners) ********************
      // Turn on all wax.demo.MenuButton listeners
      tbtnfirststackpage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([firstscrollstackpage]);
          mainmenubuttongroup.setSelection([tbtnmenufirststackpage]);
        }
      }, this);

      tbtnSecondPage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([secondstackpage]);
          mainmenubuttongroup.setSelection([tbtnmenuSecondPage]);
        }
      }, this);

      tbtnThirdPage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([thirdstackpage]);
          mainmenubuttongroup.setSelection([tbtnmenuThirdPage]);
        }
      }, this);

      // Popup menu buttons
      tbtnmenufirststackpage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([firstscrollstackpage]);
          westboxbuttongroup.setSelection([tbtnfirststackpage]);
          
          if (mainmenupopup.getVisibility() == "visible"){
            this._blocker.unblock();
            var domtable = mainmenupopup.getContentElement().getDomElement();
            qx.bom.element.Animation.animateReverse(domtable, fadeinleft).addListener("end", function() {
              mainmenupopup.hide();

            });
          }
        }
      }, this);

      tbtnmenuSecondPage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([secondstackpage]);
          westboxbuttongroup.setSelection([tbtnSecondPage]);

          //firststackpage.setVisibility("excluded");

          if (mainmenupopup.getVisibility() == "visible"){
            this._blocker.unblock();
            var domtable = mainmenupopup.getContentElement().getDomElement();
            qx.bom.element.Animation.animateReverse(domtable, fadeinleft).addListener("end", function() {
              mainmenupopup.hide();
            });
          }
        }
      }, this);

      tbtnmenuThirdPage.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([thirdstackpage]);
          westboxbuttongroup.setSelection([tbtnThirdPage]);

          //firststackpage.setVisibility("excluded");

          if (mainmenupopup.getVisibility() == "visible"){
            this._blocker.unblock();
            var domtable = mainmenupopup.getContentElement().getDomElement();
            qx.bom.element.Animation.animateReverse(domtable, fadeinleft).addListener("end", function() {
              mainmenupopup.hide();
            });
          }
        }
      }, this);

      // if Hybrid Mobile
      tbtnfirststackpagehym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([firstscrollstackpage]);
          atmlogocurrentpage.set({show: "both", label:"Home"});
        }
      }, this);

      tbtnsecondstackpagehym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([secondstackpage]);
          atmlogocurrentpage.set({show: "both", label:"Second Page"});
        }
      }, this);

      tbtnthirdpagehym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([thirdstackpage]);
          atmlogocurrentpage.set({show: "both", label:"Third Page"});
        }
      }, this);

      tbtnmenuhym.addListener("changeValue", function(e) {
        if (e.getData()) {
          centerbox.setSelection([menuscrollstackpage]);
          //atmlogocurrentpage.set({show: "both", label:"Menu"});
        }
      }, this);

      // Demo mode switching to Mobile
      switchmenubutton1.addListener("execute", function(e){
        this.setDemoMode("mobile");
        southbox.setVisibility("visible");
        scrollwestbox.setVisibility("excluded");
        //profilemenubutton.setVisibility("hidden");
        //mainmenupart.setVisibility("hidden");
        centerbox.setSelection([menuscrollstackpage]);
        //atmlogocurrentpage.set({visibility: "visible", label:"Menu"});
        mainmenubuttongrouphym.setSelection([tbtnmenuhym]);
      }, this);

      // Demo mode switching back to desktop
      btnSwitchBack.addListener("execute", function(e){
        this.setDemoMode("desktop");
        southbox.setVisibility("excluded");
        northhbox.setVisibility("excluded");
       // profilemenubutton.setVisibility("visible");
        atmlogocurrentpage.setVisibility("hidden");
        //mainmenupart.setVisibility("visible");
        centerbox.setSelection([firstscrollstackpage]);
        mainmenubuttongroup.setSelection([tbtnmenufirststackpage]);
        westboxbuttongroup.setSelection([tbtnfirststackpage]);
      }, this);

      //westboxbuttongroup.setSelection([tbtnSecondPage]);


      // *** END of Wiring *************************************************************************

      
      // ====================================
      // =======  MediaQuery code  ========== 
      // ====================================

      var mq1 = new qx.bom.MediaQuery("screen and (min-width: 1024px)");

      mq1.on("change", function(e){
        if(mq1.isMatching() && this.getDemoMode()=="desktop"){
          //scrollwestbox.setVisibility("visible"); 
          //mainmenupart.setVisibility("excluded");
        }
        else {
          scrollwestbox.addListener("appear", function(e) {
            var domtable = scrollwestbox.getContentElement().getDomElement();
            qx.bom.element.Animation.animate(domtable, fadeinleft);
          }, this); 
          scrollwestbox.setVisibility("excluded");
          if (this.getDemoMode() == "desktop")
            mainmenupart.setVisibility("visible");
        }
      }, this);
      if (mq1.isMatching()) {
        //scrollwestbox.setVisibility("visible"); 
        //mainmenupart.setVisibility("excluded");
      }
      else {
        scrollwestbox.addListener("appear", function(e) {
          var domtable = scrollwestbox.getContentElement().getDomElement();
          qx.bom.element.Animation.animate(domtable, fadeinleft);
        }, this); 
        scrollwestbox.setVisibility("excluded"); 
        mainmenupart.setVisibility("visible");
      }

      var mq2 = new qx.bom.MediaQuery("screen and (min-width: 767px)");

      mq2.on("change", function(e){
        if(mq2.isMatching()){}
        else {}
      });

      if (mq2.isMatching()) {}
      else {}
    },

    __createDetailWindow : function()
    {
      // Create the Window
      var win = new qx.ui.window.Window("Detail Window").set({ appearance: "wax-window", allowMaximize : true, allowMinimize : false, modal: true, movable: true });
      win.setLayout(new qx.ui.layout.VBox(4));
      win.setShowStatusbar(true);
      win.setStatus("Generic Message"); 
      win.getChildControl("title").set({padding: [10,0,0,10]});

      return win;
    }
  }
});