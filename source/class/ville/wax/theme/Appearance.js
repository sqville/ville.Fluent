/* ************************************************************************

   Copyright: 2021 sqville

   License: MIT license

   Authors: Chris Eskew (sqville) chris.eskew@sqville.com

************************************************************************ */

qx.Theme.define("ville.wax.theme.Appearance",
{
  extend : ville.theme.fluent.Appearance,

  appearances :
  {
    "header-atom" :
    {
      alias : "atom",

      style : function(states)
      {
        return {
          iconPosition: "top", 
          center: true,
          padding: [10, 6, 20, 6],
          marginBottom: 10,
          font : "headeratom"
        }
      }
    },

    "header-atom/icon" :
    {
      include : "image",

      style : function(states)
      {
        return {
          width: 120,
          height: 94
        }
      }
    },

    "control-header-atom" :
    {
      alias : "atom",

      style : function(states)
      {
        return {
          iconPosition: "top", 
          center: true,
          padding: [40, 6, 4, 6],
          font : "control-headeratom"
        }
      }
    },

     /*
    ---------------------------------------------------------------------------
      wax.demo.Button
    ---------------------------------------------------------------------------
    */

    "wax-form-button" :
    {

      style : function(states)
      {        
        return {
          backgroundColor : "blue",
          textColor : "white",
          padding : [3, 8],
          gap : 16,
          cursor: "pointer",
          center: true,
          decorator : "hym-box-noborder",
          font: "hym-form-button"
        }
      }
    },

     /*
    ---------------------------------------------------------------------------
      wax.demo.Atom
    ---------------------------------------------------------------------------
    */

   "icss-atom" :
   {
     include : "atom",

     style : function(states)
     {
       return {
        center: true, 
        padding : 16,
        gap : 16,
        iconProps : { iconAlign: "center" }
       }
     }
   },

    /*
    ---------------------------------------------------------------------------
      wax.MENUBUTTON
    ---------------------------------------------------------------------------
    */
   "mainmenubutton-frame" :
   {
     alias : "atom",

     style : function(states)
     {
       var decorator = "mainmenubutton-box";
       var padding = [14, 3, 14, 18];
       //vartextcolor = "#606060";
       var textcolor = "black";
       var opacity = .85;
       var font = "mainmenubutton";
       var iconimg = "ville/wax/wax-icon-24-outline.svg";
       //var iconimg = "ville/wax/wax-28-comb.png";

       if (!states.disabled) {
         if (states.hovered && !states.pressed && !states.checked) {
           decorator = "mainmenubutton-box-hovered";
           //padding = [14,3,14,20];
           opacity = 1;
         } 
         else if (states.pressed || states.checked) {
           decorator = "mainmenubutton-box-pressed";
           //padding = [14,3,14,20];
           opacity = 1;
           font = "mainmenubutton-bold";
           textcolor = "blue";
           iconimg = "ville/wax/wax-icon-24-filled.svg";
         }
       }

       return {
         decorator : decorator,
         padding : padding,
         cursor: states.disabled ? undefined : "pointer",
         minWidth: 5,
         minHeight: 5,
         textColor: textcolor,
         font : "mainmenubutton",
         opacity : 1,
         textColor : textcolor
       };
     }
   },

   "mainmenubutton-frame/label" : {
     alias : "atom/label",

     style : function(states)
     {
       return {
         textColor : states.disabled ? "text-disabled" : undefined
       };
     }
   },

   "mainmenubutton" :
   {
     alias : "mainmenubutton-frame",
     include : "mainmenubutton-frame",

     style : function(states)
     {
      return {
        center : false,
        minWidth : 220,
        gap : 14,
        icon : states.checked ? "ville/wax/wax-icon-24-filled.svg" : "ville/wax/wax-icon-24-outline.svg"
      };
     }
   },

   /*"mainmenubutton/icon" : {

    style : function() {
        return {
          scale: true,
          width: 28,
          height: 28
        };
      }
    },*/

    "mainmenuindicator" : {
      style : function() {
        return {
          backgroundColor : "gray",
          textColor : "white",
          height : 24,
          padding: [2,6,2,6],
          decorator : "mainmenuindicator",
          font : "mainmenuindicator"
        };
      }
    },

    "submenubutton" : {
     style : function(states)
     {
       return {
        cursor: states.disabled ? undefined : "pointer",
        textColor : states.hovered ? "black" : "#505050",
        font : "mainmenubutton",
        decorator: "mainmenubutton-box-pressed"
       };
     }
    },

    /*
    ---------------------------------------------------------------------------
      wax.MENUBUTTON - "hym" = hybrid moble (i.e. cordova/capacitor)
    ---------------------------------------------------------------------------
    */

   "mainmenubutton-frame-hym" :
   {
     alias : "atom",

     style : function(states)
     {
       var padding = [4,2,4,2];
       var textcolor = "gray";
       var icon = "ville/wax/wax-icon-24-outline.svg";

       if (!states.disabled) {
         if (states.hovered && !states.pressed && !states.checked) {
           textcolor = "gray";
         } else if (states.pressed || states.checked) {
           textcolor = "blue";
           var icon = "ville/wax/wax-icon-24-filled.svg";
         }
       }

       return {
        icon : icon, 
        padding : padding,
        cursor: states.disabled ? undefined : "pointer",
        minWidth: 5,
        minHeight: 5,
        textColor: textcolor,
        font : "mainmenubutton-hym"
       };
     }
   },

   "mainmenubutton-frame-hym/label" : {
     alias : "atom/label",

     style : function(states)
     {
       return {
         textColor : states.disabled ? "text-disabled" : undefined
       };
     }
   },

   "mainmenubutton-hym" :
   {
     alias : "mainmenubutton-frame-hym",
     include : "mainmenubutton-frame-hym",

     style : function(states)
     {
       return {
         center : true,
         gap : 2
       };
     }
   },

   "mainmenubutton-hym-home" :
   {
     alias : "mainmenubutton-hym",
     include : "mainmenubutton-hym",

     style : function(states)
     {
       return {
        icon : states.checked ? "ville/wax/Blue_House.svg" : "ville/wax/Gray_House.svg"
       };
     }
   },

   "mainmenubutton-hym-menu" :
   {
     alias : "mainmenubutton-hym",
     include : "mainmenubutton-hym",

     style : function(states)
     {
       return {
        icon : states.checked ? "ville/wax/wax_menu_blue.svg" : "ville/wax/wax_menu_gray.svg"
       };
     }
   },

   /*"mainmenubutton-hym/icon" : {

    style : function() {
        return {
          decorator : "mmenubutton-hym",
          scale: true,
          width: 28,
          height: 28
        };
      }
    },*/

   "hym-page-button" :
   {
    style : function(states)
    {
      return {
        center : false,
        gap : 12,
        padding : [12,0,11,0],
        margin : [0,0,0,14],
        decorator : "page-button-right",
        font : "default-bold"
      };
    }
   },

   "hym-page-last-button" :
   {
    style : function(states)
    {
      return {
        center : false,
        gap : 12,
        padding : [12,0,12,0],
        margin : [0,0,0,14],
        decorator : "page-button-right-last",
        font : "default-bold"
      };
    }
   },

   "hym-page-link-last-button" :
   {
    style : function(states)
    {
      return {
        center : false,
        gap : 12,
        padding : [0,0,0,0],
        margin : [0,0,0,14],
        font : "hym-app-link",
        textColor: "blue"
      };
    }
   },

   /*
    ---------------------------------------------------------------------------
      WAX SWITCH
    ---------------------------------------------------------------------------
    */
    "wax-switch":
    {
      alias : "atom",

      style : function(states)
      {
        var icon;

        return {
          icon: qx.theme.simple.Image.URLS["blank"],
          gap: 6
        };
      }
    },


    "wax-switch/icon" : {
      style : function(states)
      {
        var decorator = "wax-switch";
        //TODOs - grab color from color theme
        var bgcolor = "#e3e2e2";

        // Checked
        if (states.checked) {
          //TODOs - grab color from color theme
          bgcolor = "blue";
          decorator = "wax-switch-checked"
        } 

        return {
          decorator : decorator,
          scale : true,
          width: 48,
          height: 24,
          backgroundColor : bgcolor,
          cursor: "pointer"
        };
      }
    },

    "wax-switch-larger": "wax-switch",

    "wax-switch-larger/icon" : {
      style : function(states)
      {
        var decorator = "wax-switch-lgr";
        //TODOs - grab color from color theme
        var bgcolor = "NeutralBackground1";

        // Checked
        if (states.checked) {
          //TODOs - grab color from color theme
          bgcolor = "BrandBackground1Selected";
          decorator = "wax-switch-lgr-checked"
        } 

        return {
          decorator : decorator,
          scale : true,
          width: 48,
          height: 28,
          backgroundColor : bgcolor,
          cursor: "pointer"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      WAX TABVIEW
    ---------------------------------------------------------------------------
    */
    "tabview/bar" :
    {
      style : function(states)
      {
        return {
          marginBottom : 4,
          height : 40
        };
      }
    },

    "wax-tabview-page" : {},

    "wax-tabview-page/button" :
    {
      style : function(states)
      {

        var padding = [10, 16, 4, 16];

        return {
          zIndex : states.checked ? 10 : 5,
          textColor : states.disabled ? "text-disabled" : states.checked ? "white" : "black",
          padding : padding,
          cursor: "pointer"
        };
      }
    },

    "wax-tabview-page-line" : {},

    "wax-tabview-page-line/button" :
    {
      include: "wax-tabview-page/button",
      
      style : function(states)
      {
        return {
          textColor : "black"
        };
      }
    },

    "wax-tabview-block" : "tabview",

    "wax-tabview-block/bar" :
        
    {
      include : "tabview/bar",
      
      style : function(states)
      {
        return {
          backgroundColor : "#e3e2e2",
          paddingLeft : 4,
          decorator : "wax-tabview-bar-block"
        };
      }
    },

    "wax-tabview-page-block" : {},

    "wax-tabview-page-block/button" :
    {
      include: "wax-tabview-page/button",
      
      style : function(states)
      {
        return {
          textColor : "black"
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      WAX WINDOW
    ---------------------------------------------------------------------------
    */

    "wax-window" : {
      alias : "window",

      include: "window",

      style : function(states)
      {
        return {
         showMaximize : false,
         showMinimize : false
        };
      }
    },
    
    "wax-window/title" : {
      alias : "window/title",

      style : function(states)
      {
        return {
         textColor : "black",
         font : "control-header"
        };
      }
     },

     "wax-window/captionbar" : {
      include : "window/captionbar",
      
      style : function(states)
      {
        return {
         decorator : "window-captionbar-default"
        };
      }
     },

     "wax-window/close-button" :
    {
      alias : "button",

      style : function(states)
      {
        return {
          marginLeft : 2,
          icon : states.hovered ? "ville/wax/close-red-24px.svg" : "ville/wax/close-24px.svg",
          padding : [ 1, 2 ],
          cursor : states.disabled ? undefined : "pointer"
        };
      }
    },

    "wax-window/close-button/icon" :
    {
      alias : "image",

      style : function(states)
      {
        return {
          width : 24,
          height : 24
        };
      }
    },

    /*
    ---------------------------------------------------------------------------
      QX APPEARANCE OVERRIDES
    ---------------------------------------------------------------------------
    */

    "combobox/button" :
    {
      style : function(states)
      {
        return {
          icon : "",
          backgroundColor : "TransparentBackground",
          decorator : "button-box-right-borderless",
          padding : [2,8,0,6],
          width: 24,
          cursor : "pointer"
        };
      }
    },
    
    "combobox/button/icon" :
    {
    	include : "image",
    	
    	style : function(states)
    	{
    		return {
          html : ville.theme.fluent.Image.SVG["chevronDownRegular"],
          width : 20,
          height : 20
    		};
    	}
    },

    "combobox-listitem" :
    {
      alias : "atom",

      style : function(states)
      {
        var padding = ville.global.spacing.S;
        if (states.lead) {
          padding = [9, 9, 9, 13];
        }
        if (states.dragover) {
          padding[2] -= 2;
        }
        var backgroundColor;

        if (states.selected) {
          backgroundColor = "transparent";
          if (states.disabled) {
            backgroundColor = "background-selected-disabled";
          }
        }
        if (states.selected && states.hovered) {
          backgroundColor = "NeutralBackground1Hover";
          if (states.disabled) {
            backgroundColor = "background-selected-disabled";
          }
        }
        if (states.hovered && !states.selected) {
          backgroundColor = "NeutralBackground1Hover";
          if (states.disabled) {
            backgroundColor = "background-selected-disabled";
          }
        }
        if (!states.hovered && !states.selected) {
          backgroundColor = "transparent";
        }
        
        return {
          icon: "",
          gap : 6,
          padding : padding,
          backgroundColor : backgroundColor,
          textColor : states.disabled ? "NeutralForegroundDisabled" : "NeutralForeground1",
          decorator : states.lead ? "lead-item" : states.dragover ? "dragover" : "combobox-listitem",
          opacity : states.drag ? 0.5 : undefined
        };
      }
    },

    "combobox-listitem/icon" :
    {
      include : "image",
      style : function(states)
      {
        return {
          html: states.selected ? ville.theme.fluent.Image.SVG["checkMarkRegular"] : "",
          width : 20,
          height : 20
        };
      }
    },

    "datefield" : {
      include : "combobox",

      style : function(states)
      {
        return {
          padding : 0
        }
      }
    },	

    "datefield/button" :
    {
      style : function(states)
      {
        return {
          icon : "",
          padding : 0,
          width : 0
        };
      }
    },

    "datefield/textfield" : 
    {
      include : "textfield",

      style : function(states)
      {
        return {
          decorator : undefined,
          height : undefined,
          padding : [0,0,0,10]
        };
      }
    },

    "menu-button" :
    {
      alias : "atom",

      style : function(states)
      {
        return {
          backgroundColor : states.selected ? "NeutralBackground1Hover" : undefined,
          decorator: "button-box-common",
          embedProps: states.selected ? 
            { textColor: "BrandForeground1", iconStyle: "filled" } : 
            { textColor: "NeutralForeground2", iconStyle: "regular" },
          padding : [ 6, 6 ],
          margin: [ 0, 6, 0, 8 ]
        };
      }
    },

    "selectbox/arrow" : {
      style (states) {
        return {
          textColor : "NeutralForeground1",
          html : ville.theme.fluent.Image.SVG["chevronDownRegular"],
          width: 20,
          height : 20,
          marginRight: ville.global.spacing.S
        };
      }
    },

    "table/column-button" :
    {
      alias : "button",

      style : function(states)
      {
        return {
          decorator : "table-header-column-button",
          padding : 6,
          backgroundColor : "NeutralBackground1",
          icon : ""
        };
      }
    },
    
    "table/column-button/icon" :
    {
      alias : "image",

      style : function(states)
      {
        return {
          html: ville.theme.fluent.Image.SVG["tableSettingsRegular"],
          //svgIcon: "tableSettingsRegular",
          textColor: "NeutralForeground1",
          width: 14,
          height : 14
        };
      }
    },

    "table-column-reset-button" :
    {
      include : "menu-button",
      alias : "menu-button",

      style : function()
      {
        return {
          icon : ""
        };
      }
    },

    "table-column-reset-button/icon" :
    {
      alias : "image",

      style : function(states)
      {
        return {
          html: ville.theme.fluent.Image.SVG["arrowResetRegular"],
          textColor: "NeutralForeground1",
          width: 14,
          height : 14
        };
      }
    },

    "tabview/bar/button-forward" :
    {
      style : function(states)
      {
        icon : ""
      }
    },

    "tabview/bar/button-backward" :
    {
      style : function (states)
      {
        icon : ""
      }
    },

    "tree-folder" :
    {
      style : function(states)
      {
        return {
          padding : [3, 8, 3, 5],
          icon : "",
          iconOpened : "",
          opacity : states.drag ? 0.5 : undefined,
          cursor : "pointer"
        };
      }
    },

    "tree-folder/icon" :
    {
      include : "image",
      style : function(states)
      {
        return {
          html: states.opened ? ville.theme.fluent.Image.SVG["folderOpenRegular"] : ville.theme.fluent.Image.SVG["folderRegular"],
          marginLeft: 6,
          textColor: "NeutralForeground1",
          width : 18,
          height : 18
        };
      }
    },

    "tree-folder/open" :
    {
      include : "image",
      style : function(states)
      {
        return {
          source : "",
          html : states.opened ? ville.theme.fluent.Image.SVG["chevronDownRegular"] : ville.theme.fluent.Image.SVG["chevronRightRegular"], 
          //margin : states.opened ? [4,0,0,0] : [0,0,0,0],
          //padding : states.opened ? [4,0,0,0] : [0,0,0,0],
          textColor : "NeutralForeground1",
          alignX: "left",
          width : 14,
          height : 14
        };
      }
    },

    "tree-file" :
    {
      include : "tree-folder",
      alias : "tree-folder",

      style : function(states)
      {
        return {
          icon : "",
          opacity : states.drag ? 0.5 : undefined,
          cursor : "pointer"
        };
      }
    },
    
    "tree-file/icon" :
    {
      include : "image",
      style : function(states)
      {
        return {
          html: ville.theme.fluent.Image.SVG["documentTextRegular"],
          textColor: "NeutralForeground1",
          width : 18,
          height : 18,
          scale : true
        };
      }
    },

    "window/maximize-button/icon" :
    {
      include : "image",

      style : function(states)
      {
        return {
          decorator : "window-button-maximize-icon",
          width : 16,
          height : 16
        };
      }
    },

    "window/close-button" :
    {
      alias : "button",

      style : function(states)
      {
        return {
          icon : "",
          width : 24,
          height : 24,
          paddingBottom : 4,
          marginLeft: 6,
          cursor : states.disabled ? undefined : "pointer"
        };
      }
    },

    "window/close-button/icon" : 
    {
      include: "image",

      style : function(state)
      {
        return {
          html: ville.theme.fluent.Image.SVG["dismiss"],
          width: 20,
          height: 20,
          textColor : "NeutralForeground1"
        }
      }
    }
  }
});