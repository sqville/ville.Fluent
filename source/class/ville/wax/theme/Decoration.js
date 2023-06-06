/* ************************************************************************

   Copyright: 2021 sqville

   License: MIT license

   Authors: Chris Eskew (sqville) chris.eskew@sqville.com

************************************************************************ */
/**
 * @asset(ville/wax/wax-switch-knob.svg)
 * @asset(ville/wax/wax-switch-knob26.svg)
 * 
 */



qx.Theme.define("ville.wax.theme.Decoration",
{
  extend : ville.theme.fluent.Decoration,

  decorations :
  {

    "heading2" :
    {
      style :
      {
        width: [1,0,0,0],
        color: "NeutralBackground5"
      }
    },
    
    "scaledback-box" :
    {
      style :
      {
        radius: 3
      }
    },

    "normal-box" :
    {
      style :
      {
        radius: 0
      }
    },
    
    "nobgimg" :
    {
      style :
      {
        backgroundImage: "",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },
    
    "tablelist-list" :
    {
      style :
      {
        width : 1,
        color : "gray"
      }
    },
    
    "groupbox-open" :
    {
      style :
      {
        backgroundImage: "wax/baseline-expand_less-24px.svg",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "groupbox-closed" :
    {
      style :
      {
        backgroundImage: "wax/demo/baseline-expand_more-24px.svg",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "page-button-right" :
    {
      style :
      {
        width: [0,0,1,0],
        color: "#C7C7C7",
        backgroundImage: "ville/wax/chevron_right-24px.svg",
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "page-button-right-last" :
    {
      include: "page-button-right",
      
      style :
      {
        width: 0
      }
    },

    "white-box" :
    {
      style :
      {
        width: 1,
        color: "white-box-border",
        radius: 3
      }
    },

    "connected-top-box" :
    {
    	include : "white-box",
    	
    	style :
	    {
	      width: [1,0,0,0],
	      radius: [ 0, 0, 0, 0 ]
	    }
    },
    
    "border-me" :
    {
      style :
      {
        width : 1,
        color : "black",
        style : "solid"
      }
    },

    "topheader" :
    {
      style :
      {
        width : [0,0,1,0],
        color : "white-box-border",
        style : "solid"
      }
    },

    "topheader-blended" :
    {
      style :
      {
        width : [0,0,1,0],
        color : "#F2F1F6",
        style : "solid"
      }
    },

    "leftside" :
    {
      style :
      {
        width : [0,1,0,0],
        color : "white-box-border",
        style : "solid"
      }
    },

    "bottombar" :
    {
      style :
      {
        width : [1,0,0,0],
        color : "white-box-border",
        style : "solid"
      }
    },

    "bottombar-blended" :
    {
      style :
      {
        width : [1,0,0,0],
        color : "#F2F1F6",
        style : "solid"
      }
    },

    "mmenubutton-hym" :
    {
      include : "image",
      style :
      {
        backgroundImage: ""
      }
    },

    /*
    ---------------------------------------------------------------------------
      Main Menu Popup (Drawer)
    ---------------------------------------------------------------------------
    */
    
   "mainmenupopup" :
   {
    include : "popup", 
    
    style :
     {
       transitionProperty: ["visibility"],
       transitionDuration: "3s"
     }
   },

    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */
    
   "mainmenubutton-box" :
   {
     style :
     {
       radius : 0,
       width : [0,0,0,5],
       color : "white",
       transitionProperty: ["border-left-color"],
       transitionDuration: ".35s"
     }
   },

   "mainmenubutton-box-hovered" :
   {
     include : "mainmenubutton-box",

     style :
     {
      color : "#cccccc"
     }
   },

   "mainmenubutton-box-pressed" :
   {
     include : "mainmenubutton-box",

     style :
     {
      color : "blue"
     }
   },

   "mainmenubutton-box-mark" : 
   {
     style :
     {
      radius : 0,
      width : [0,0,0,5], 
      color : "blue"
     }
   },

   "mainmenubutton-box-new" : 
   {
     style :
     {
      radius : 0,
      width : [0,0,0,5], 
      color : "transparent"
     }
   },

   "mainmenuindicator" :
   {
    style :
     {
      radius: 3
     }
   },

   "window-captionbar-default" :
   {
     style :
     {
      width: 0
     }
   },

   "hym-box-noborder" :
   {
     style :
     {
      radius: 8
     }
   },

   "wax-form-button" :
   {
    style :
    {
     radius: 6
    }
   },

   "article": 
   {
    include : "hym-box-noborder",
    
    style: 
    {
      backgroundImage: "ville/wax/Yellow_Car_g7.jpg",
      backgroundRepeat: "no-repeat",
      backgroundPositionX: "center",
      backgroundPositionY: -30
    }
  },

    /*
    ---------------------------------------------------------------------------
      PROGRESSBAR
    ---------------------------------------------------------------------------
    */

   "progressbar" :
   {
     style:
     {
       backgroundColor: "#FFF",
       radius : 0,
       width: 0,
       color: "border-separator"
     }
   },
   
   "progressbar-trans" :
   {
       radius : 0,
       width: 0
   },


   /*
    ---------------------------------------------------------------------------
      UPLOAD
    ---------------------------------------------------------------------------
    */
   "upload-area" :
   {
     style :
     {
       width : 1,
       radius : 3,
       style : "dashed",
       color : "gray"
     }
   },
   
   "upload-area-dragover" :
   {
    include: "upload-area",
     
     style :
     {
       style : "solid",
       color : "orange"
     }
   },

   /*
    ---------------------------------------------------------------------------
      WAX TABVIEW
    ---------------------------------------------------------------------------
    */

    "wax-tabview-mark" : 
    {
      style :
      {
        radius : 30
      }
    },

    "wax-tabview-line" : 
    {
      style :
      {
        radius : 2
      }
    },

    "wax-tabview-block" : 
    {
      style :
      {
        radius : 4,
        shadowLength : 1,
        shadowBlurRadius : 3,
        shadowColor : "shadow"
      }
    },

    "wax-tabview-bar-block" : 
    {
      style :
      {
        radius : 4
      }
    },

   /*
    ---------------------------------------------------------------------------
      WAX SWITCH
    ---------------------------------------------------------------------------
    */

    "wax-switch" :
    {
      style :
      {
        radius: 70,
        width : [1,2],
        color: "#e3e2e2",
        backgroundImage: "ville/wax/wax-switch-knob.svg",
        backgroundPositionX: "left",
        backgroundPositionY: "center"
      }
    },

    "wax-switch-checked" :
    {
      style :
      {
        radius: 70,
        width : [1,2],
        color: "blue",
        backgroundImage: "ville/wax/wax-switch-knob.svg",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    },

    "wax-switch-lgr" :
    {
      style :
      {
        radius: 70,
        width : [1,2],
        color: "#e3e2e2",
        backgroundImage: "ville/wax/wax-switch-knob26.svg",
        backgroundPositionX: "left",
        backgroundPositionY: "center"
      }
    },

    "wax-switch-lgr-checked" :
    {
      style :
      {
        radius: 70,
        width : [1,2],
        color: "blue",
        backgroundImage: "ville/wax/wax-switch-knob26.svg",
        backgroundPositionX: "right",
        backgroundPositionY: "center"
      }
    }
    
  }
});