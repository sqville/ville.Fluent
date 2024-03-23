/* ************************************************************************

   Ville Software

   Copyright:
     None

   License:
     MIT

   Authors:
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */

/**
 * The simple qooxdoo decoration theme.
 * 
 */
qx.Theme.define("ville.theme.fluent.Decoration",
{
    
  aliases : {
    decoration : "ville/theme/fluent/decoration"
  },
   

  decorations :
  {   
    /*
    ---------------------------------------------------------------------------
      CORE
    ---------------------------------------------------------------------------
    */

    "border-blue" :
    {
      style :
      {
        width : 4,
        color : "background-selected"
      }
    },

    "main" :
    {
      style :
      {
        radius : ville.global.border.radius.Medium,
        width : ville.global.stroke.widths.Thin,
        color : "NeutralStroke1"
      }
    },

    "main-dark" :
    {
      style :
      {
        width : 1,
        color : "button-border"
      }
    },

    "popup" :
    {
      include : "shadow8",
      style :
      {
        radius : ville.global.border.radius.Medium,
        width : ville.global.stroke.widths.Thin,
        color : "NeutralStroke1"
      }
    },
    
    "dragover" :
    {
      style : {
        bottom: [2, "solid", "dark-blue"]
      }
    },

    "cursor-move" :
    {
      style : {
        width: [2,2,2,2],
        color : "black",
        style : "dotted"
      }
    },

    "cursor-nodrop" :
    {  
      style : {
        width : 0
      }
    },

    "cursor-copy" :
    {
      style : {
        width: 0
      }
    },

    "cursor-alias" :
    {
      style : {
        width: 0
      }
    },
    

	/*
    ---------------------------------------------------------------------------
      ville.Fluent icons using only Qx
      
      ICONS
    ---------------------------------------------------------------------------
    */
   "ville-icon-arrow-up" :
   {
   	  style :
      {
        color : [null,"transparent","ville-black","transparent"],
        style : [null, "solid","solid","solid"],
        width : [0,4.5,4,4.5]
      }
   },
   
   "ville-icon-arrow-up-med-gray" :
   {
   	  include : "ville-icon-arrow-up",
   	  
   	  style :
      {
        color : [null,"transparent","ville-arrow-med-gray","transparent"]
      }
   },
   
   "ville-icon-arrow-up-invert" :
   {
   	  include : "ville-icon-arrow-up",
   	  
   	  style :
      {
        color : [null,"transparent","white","transparent"]
      }
   },
   
   "ville-icon-arrow-up-small" :
   {
   	  style :
      {
        color : [null,"transparent","NeutralForeground1","transparent"],
        style : [null, "solid","solid","solid"],
        width : [0,3.5,3,3.5]
      }
   },
   
   "ville-icon-arrow-down" :
   {
   	  style :
      {
        color : ["NeutralForeground1","transparent",null,"transparent"],
        style : ["solid", "solid",null,"solid"],
        width : [4,4.5,0,4.5]
      }
   },
   
   "ville-icon-arrow-down-med-gray" :
   {
   	  include : "ville-icon-arrow-down",
   	  
   	  style :
      {
        color : ["ville-arrow-med-gray","transparent",null,"transparent"]
      }
   },
   
   "ville-icon-arrow-down-invert" :
   {
   	  include : "ville-icon-arrow-down",
   	  
   	  style :
      {
        color : ["white","transparent",null,"transparent"]
      }
   },
   
   "ville-icon-arrow-down-small" :
   {
   	  style :
      {
        color : ["NeutralForeground1","transparent",null,"transparent"],
        style : ["solid", "solid",null,"solid"],
        width : [3,3.5,0,3.5]
      }
   },
   
   "ville-icon-arrow-right" :
   {
   	  style :
      {
        color : ["transparent",null,"transparent","NeutralForeground1"],
        style : ["solid",null,"solid","solid"],
        width : [4.5,0,4.5,4]
      }
   },
   
   "ville-icon-arrow-right-invert" :
   {
   	  include : "ville-icon-arrow-right",
   	  
   	  style :
      {
        color : ["transparent",null,"transparent","white"]
      }
   },
   
   "ville-icon-arrow-right-small" :
   {
   	  style :
      {
        color : ["transparent",null,"transparent","ville-black"],
        style : ["solid",null,"solid","solid"],
        width : [3.5,0,3.5,4]
      }
   },
   
   "ville-icon-arrow-forward" :
   {
   	  style :
      {
        color : ["transparent",null,"transparent","ville-black"],
        style : ["solid",null,"solid","solid"],
        width : [3.5,0,3.5,4],
        shadowColor : "ville-black",
        shadowLength : [0, 2],
        shadowBlurRadius : 0,
        shadowSpreadRadius : 0
      }
   },

   "ville-icon-arrow-rewind" :
   {
    include : "ville-icon-arrow-left-small",   
    
    style :
   	  {
        shadowColor : "ville-black",
        shadowLength : [0, 2],
        shadowBlurRadius : 0,
        shadowSpreadRadius : 0
   	  }
   },
   
   "ville-icon-arrow-left" :
   {
   	  style :
   	  {
   	  	color : ["transparent","ville-arrow-gray","transparent",null],
        style : ["solid","solid","solid",null],
        width : [4.5,4,4.5,0]
   	  }
   },
   
   "ville-icon-arrow-left-small" :
   {
   	  style :
      {
        color : ["transparent","ville-black","transparent",null],
        style : ["solid", "solid","solid",null],
        width : [3.5,4,3.5,0]
      }
   },
   
   "ville-icon-triangle-bottom-right" :
   {
   	style :
      {
        color : [null,null,"NeutralForeground1","transparent"],
        style : [null,null,"solid","solid"],
        width : [0,0,6,6]
      }
   },
   
   "ville-icon-dot-black" :
    {
      style :
      {
        radius : 10,
        width : 1,
        color : "ville-black",
        innerColor: "white",
        innerWidth: 3
      }
    },

    /*
    ---------------------------------------------------------------------------
    Fluent

    SHADOWs
    ---------------------------------------------------------------------------
    */

    "shadowbase" :
    {
      style: {
        shadowHorizontalLength: [0, 0],
        shadowColor: ['rgba(0, 0, 0, 0.12)', 'rgba(0, 0, 0, 0.14)']
      }
    },

    "shadowbrandbase" :
    {
      style: {
        shadowHorizontalLength: [0, 0],
        shadowColor: ['rgba(0, 0, 0, 0.30)', 'rgba(0, 0, 0, 0.25)']
      }
    },
    
    "shadow2" :
    {
      include : "shadowbase",
      style : {
        shadowVerticalLength: [0, 1],
        shadowBlurRadius: [2, 2]
      }
      
    },

    "shadow4" :
    {
      include : "shadowbase",
      style : {
        shadowVerticalLength: [0, 2],
        shadowBlurRadius: [2, 4]
      }
    },

    "shadow8" :
    {
      include : "shadowbase",
      style : {
        shadowVerticalLength: [0, 4],
        shadowBlurRadius: [2, 8]
      }
    }, 

    "shadow16" :
    {
      include : "shadowbase",
      style : {
        shadowVerticalLength: [0, 8],
        shadowBlurRadius: [2, 16]
      }
    },

    "shadow28" :
    {
      include : "shadowbase",
      style : {
        shadowVerticalLength: [0, 14],
        shadowBlurRadius: [2, 28]
      }
    },

    "shadow64" :
    {
      include : "shadowbase",
      style : {
        shadowVerticalLength: [0, 32],
        shadowBlurRadius: [2, 64]
      }
    },

    /*
    ---------------------------------------------------------------------------
      BUTTON
    ---------------------------------------------------------------------------
    */

    "button-box-common" :
    {
      style : {
        radius : ville.global.border.radius.Medium,
        width : ville.global.stroke.widths.Thin
      }
    },
    
    "button-box" :
    {
      include : "button-box-common",
      style :
      {
        color : "NeutralStroke1",
        transitionProperty: ['background','border','color'],
        transitionDuration: ville.global.duration.Faster,
        transitionTimingFunction : ville.global.curve.EasyEase
      }
    },

    "button-box-hovered" :
    {
      include : "button-box-common",
      style : { color : "NeutralStroke1Hover" }
    },

    "button-box-pressed" :
    {
      include : "button-box-common",
      style : { color : "NeutralStroke1Pressed" }
    },

    "button-box-blank" :
    {
      include : "button-box",

      style :
      {
        backgroundColor : "white"
      }
    },

    "button-box-pressed-hovered" :
    {
      include : "button-box-pressed",
      style : { color : "button-border-hovered" }
    },

    "rounded-button-box" :
    {
      include : "button-box",
      style : { radius : ville.global.border.radius.Circular }
    },

    "rounded-button-box-hovered" :
    {
      include : "button-box-hovered",
      style : { radius : ville.global.border.radius.Circular }
    },

    "rounded-button-box-pressed" :
    {
      include : "button-box-pressed",
      style : { radius : ville.global.border.radius.Circular }
    },



    /*
    ---------------------------------------------------------------------------
      PRIMARY BUTTON
    ---------------------------------------------------------------------------
    */
    "primary-button-box" :
    {
      include : "button-box-common",
      style :
      {
        color : "BrandBackground1"
        //transitionProperty: ['background','border','color'],
        //transitionDuration: ville.global.duration.Faster,
        //transitionTimingFunction : ville.global.curve.EasyEase
      }
    },

    "primary-button-box-hovered" :
    {
      include : "button-box-common",
      style : { color : "BrandBackground1Hover" }
    },

    "primary-button-box-pressed" :
    {
      include : "button-box-common",
      style : { color : "BrandBackground1Pressed" }
    },

    "primary-rounded-button-box" :
    {
      include : "rounded-button-box",
      style : { color : "BrandBackground1" }
    },

    "primary-rounded-button-box-hovered" :
    {
      include : "rounded-button-box-hovered",
      style : { color : "BrandBackground1Hover" }
    },

    "primary-rounded-button-box-pressed" :
    {
      include : "rounded-button-box-pressed",
      style : { color : "BrandBackground1Pressed" }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON INVALID
    ---------------------------------------------------------------------------
    */
    "button-box-invalid" :
    {
      include : "button-box",

      style :
      {
        color : "invalid"
      }
    },

    "button-box-pressed-invalid" :
    {
      include : "button-box-pressed",

      style :
      {
        color : "invalid"
      }
    },

    "button-box-hovered-invalid" : {include: "button-box-invalid"},

    "button-box-pressed-hovered-invalid" : {include: "button-box-pressed-invalid"},


    /*
    ---------------------------------------------------------------------------
      BUTTON FOCUSED
    ---------------------------------------------------------------------------
    */
    "button-box-focused" :
    {
      include : "button-box-pressed"
    },

    "button-box-pressed-focused" :
    {
      include : "button-box-pressed",

      style :
      {
        color : "background-selected"
      }
    },

    "button-box-hovered-focused" : {include: "button-box-focused"},

    "button-box-pressed-hovered-focused" : {include: "button-box-pressed-focused"},


    /*
    ---------------------------------------------------------------------------
      BUTTON RIGHT
    ---------------------------------------------------------------------------
    */
    "button-box-right" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-pressed-right" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-pressed-hovered-right" :
    {
      include : "button-box-pressed-hovered",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-hovered-right" :
    {
      include : "button-box-hovered",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-focused-right" :
    {
      include : "button-box-focused",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-hovered-focused-right" :
    {
      include : "button-box-hovered-focused",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-pressed-focused-right" :
    {
      include : "button-box-pressed-focused",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },

    "button-box-pressed-hovered-focused-right" :
    {
      include : "button-box-pressed-hovered-focused",

      style :
      {
        radius : [0, 3, 3, 0]
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON BORDERLESS RIGHT
    ---------------------------------------------------------------------------
    */
    
    "button-box-right-borderless" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 2, 2, 0],
        width : 0
      }
    },

    "button-box-pressed-right-borderless" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [0, 2, 2, 0],
        width: 0
      }
    },

    "button-box-pressed-hovered-right-borderless" :
    {
      include : "button-box-pressed-hovered",

      style :
      {
        radius : [0, 2, 2, 0],
        width: 0
      }
    },

    "button-box-hovered-right-borderless" :
    {
      include : "button-box-hovered",

      style :
      {
        radius : [0, 2, 2, 0],
        width: 0
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON TOP RIGHT
    ---------------------------------------------------------------------------
    */
    "button-box-top-right" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 3, 0, 0],
        width: [1, 1, 1, 1],
        color: "transparent"
      }
    },
    
    "button-box-hovered-top-right" : 
    {
      include : "button-box-top-right",

      style :
      {
        color: "textfield-selected"
      }
    },

    /*
    ---------------------------------------------------------------------------
      BUTTON BOTTOM RIGHT
    ---------------------------------------------------------------------------
    */
    "button-box-bottom-right" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 0, 3, 0],
        width : [0, 1, 1, 1],
        color: "transparent"
      }
    },

    "button-box-hovered-bottom-right" :
    {
      include : "button-box-bottom-right",

      style :
      {
        color : "textfield-selected"
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON BOTTOM LEFT
    ---------------------------------------------------------------------------
    */
    "button-box-bottom-left" :
    {
      include : "button-box",

      style :
      {
        radius : [0, 0, 0, 3],
        width : [0, 0, 1, 1]
      }
    },

    "button-box-pressed-bottom-left" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [0, 0, 0, 3],
        width : [0, 0, 1, 1]
      }
    },

    "button-box-pressed-hovered-bottom-left" :
    {
      include : "button-box-pressed-hovered",

      style :
      {
        radius : [0, 0, 0, 3],
        width : [0, 0, 1, 1]
      }
    },

    "button-box-hovered-bottom-left" :
    {
      include : "button-box-hovered",

      style :
      {
        radius : [0, 0, 0, 3],
        width : [0, 0, 1, 1]
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON TOP LEFT
    ---------------------------------------------------------------------------
    */
    "button-box-top-left" :
    {
      include : "button-box",

      style :
      {
        radius : [3, 0, 0, 0],
        width : [1, 0, 0, 1]
      }
    },

    "button-box-pressed-top-left" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [3, 0, 0, 0],
        width : [1, 0, 0, 1]
      }
    },

    "button-box-pressed-hovered-top-left" :
    {
      include : "button-box-pressed-hovered",

      style :
      {
        radius : [3, 0, 0, 0],
        width : [1, 0, 0, 1]
      }
    },

    "button-box-hovered-top-left" :
    {
      include : "button-box-hovered",

      style :
      {
        radius : [3, 0, 0, 0],
        width : [1, 0, 0, 1]
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON MIDDLE
    ---------------------------------------------------------------------------
    */
    "button-box-middle" :
    {
      include : "button-box",

      style :
      {
        radius : 0
        //width : [1, 0, 1, 1]
      }
    },

    "button-box-pressed-middle" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : 0
        //width : [1, 0, 1, 1]
      }
    },

    "button-box-pressed-hovered-middle" :
    {
      include : "button-box-pressed-hovered",

      style :
      {
        radius : 0
        //width : [1, 0, 1, 1]
      }
    },

    "button-box-hovered-middle" :
    {
      include : "button-box-hovered",

      style :
      {
        radius : 0
        //width : [1, 0, 1, 1]
      }
    },


    /*
    ---------------------------------------------------------------------------
      BUTTON LEFT
    ---------------------------------------------------------------------------
    */
    "button-box-left" :
    {
      include : "button-box",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-pressed-left" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-pressed-hovered-left" :
    {
      include : "button-box-pressed-hovered",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-hovered-left" :
    {
      include : "button-box-hovered",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-focused-left" :
    {
      include : "button-box-focused",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-hovered-focused-left" :
    {
      include : "button-box-hovered-focused",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-pressed-hovered-focused-left" :
    {
      include : "button-box-pressed-hovered-focused",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

    "button-box-pressed-focused-left" :
    {
      include : "button-box-pressed-focused",

      style :
      {
        radius : [3, 0, 0, 3]
      }
    },

        /*
    ---------------------------------------------------------------------------
      BUTTON LEFT BORDER
    ---------------------------------------------------------------------------
    */
   "button-box-left-border" :
   {
     include : "button-box-left",

     style :
     {
       width : [1,0,1,1]
     }
   },

   "button-box-pressed-left-border" :
   {
     include : "button-box-pressed-left",

     style :
     {
      width : 1
     }
   },
       
    
    /*
    ---------------------------------------------------------------------------
      SPLITBUTTON
    ---------------------------------------------------------------------------
    */
    
    "splitbutton" :
    {      
      style :
    	{
    		radius : 3
    	}
    },
    
    "splitbutton-box-left" :
    {
      include : "button-box",
      
      style :
      {
        radius : [3,0,0,3],
        width : [ville.global.stroke.widths.Thin, 0, ville.global.stroke.widths.Thin, ville.global.stroke.widths.Thin]
      }
    },
    
    "splitbutton-box-pressed-left" :
    {
      include : "button-box-pressed",

      style :
      {
        radius : [3,0,0,3],
        width : [ville.global.stroke.widths.Thin, 0, ville.global.stroke.widths.Thin, ville.global.stroke.widths.Thin]
      }
    },

    "splitbutton-box-hovered-left" :
    {
      include : "button-box-hovered",
      style :
      {
        radius : [3,0,0,3],
        width : [ville.global.stroke.widths.Thin, 0, ville.global.stroke.widths.Thin, ville.global.stroke.widths.Thin]
      }
    },

    "splitbutton-box-arrow" :
    {
      include : "button-box",
      
      style :
      {
        radius : [0,3,3,0]
      }
    },

    "splitbutton-box-hovered-arrow" :
    {
      include : "button-box-hovered",
      
      style :
      {
        radius : [0,3,3,0]
      }
    },

    "splitbutton-box-pressed-arrow" :
    {
      include : "button-box-pressed",
      
      style :
      {
        radius : [0,3,3,0]
      }
    },


    /*
    ---------------------------------------------------------------------------
      SEPARATOR
    ---------------------------------------------------------------------------
    */

    "separator-horizontal" :
    {
      style :
      {
        widthLeft : 1,
        colorLeft : "border-separator"
      }
    },

    "separator-vertical" :
    {
      style :
      {
        widthTop : 1,
        colorTop : "border-separator"
      }
    },


    /*
    ---------------------------------------------------------------------------
      SCROLL KNOB
    ---------------------------------------------------------------------------
    */
    "scroll-knob" :
    {
      style :
      {
        radius : 3,
        width : 1,
        color : "button-border",
        backgroundColor : "scrollbar-bright"
      }
    },

    "scroll-knob-pressed" :
    {
      include : "scroll-knob",

      style :
      {
        backgroundColor : "scrollbar-dark"
      }
    },

    "scroll-knob-hovered" :
    {
      include: "scroll-knob",

      style :
      {
        color : "button-border-hovered"
      }
    },

    "scroll-knob-pressed-hovered" :
    {
      include: "scroll-knob-pressed",

      style :
      {
        color : "button-border-hovered"
      }
    },

    /*
    ---------------------------------------------------------------------------
      SLIDER KNOB
    ---------------------------------------------------------------------------
    */
   
    "slider-knob" :
   {
    include : "radiobutton-checked", 
    
    style :
     {
       radius : ville.global.border.radius.Circular
     }
   },

   "slider-knob-pressed" :
   {
     include : "slider-knob",

     style :
     {
       backgroundColor : "scrollbar-dark"
     }
   },

   "slider-knob-hovered" :
   {
     include: "slider-knob",

     style :
     {
       color : "button-border-hovered"
     }
   },

   "slider-knob-pressed-hovered" :
   {
     include: "slider-knob-pressed",

     style :
     {
       color : "button-border-hovered"
     }
   },

    /*
    ---------------------------------------------------------------------------
      SPLITPANE KNOB
    ---------------------------------------------------------------------------
    */
    "splitpane-knob" :
    {
      style : 
      {
        width : [0,2,0,0],
        color : "gray",
        style : "dotted"
      }
    },

    /*
    ---------------------------------------------------------------------------
      HOVER BUTTON
    ---------------------------------------------------------------------------
    */
    "button-hover" :
    {
      style :
      {
        radius : 3
      }
    },
  
    
    /*
    ---------------------------------------------------------------------------
      WINDOW
    ---------------------------------------------------------------------------
    */
    "window" :
    {
      include : "shadow64",

      style :
      {
        radius : ville.global.border.radius.XLarge,
        width : ville.global.stroke.widths.Thin,
        color : "NeutralStroke1"
      }
    },

    "window-active" :
    {
      include : "window",

      style :
      {
        shadowLength : [1,2],
        shadowBlurRadius : 2
      }
    },


    "window-caption" : {
      style :
      {
        width : 0
      }
    },

    "window-statusbar" :
    {
      include : "statusbar",

      style :
      {
        width : 0
      }
    },
    
    "window-button-minimize-icon" :
    {
      style :
      {
        width : [0,8,2,0],
        color : "NeutralStroke1"
      }
    },
    
    "window-button-minimize-icon-hover" :
    {
      include : "window-button-minimize-icon",
      
      style :
      {
        color : "black"
      }
    },
    
    "window-button-maximize-icon" :
    {
      style :
      {
        radius : 3,
        width : [2,1,1,1],
        color : "NeutralForeground1"
      }
    },
    
    "window-button-maximize-icon-hover" :
    {
      include : "window-button-maximize-icon",
      
      style :
      {
        color : "black"
      }
    },
    
    "window-button-close-icon" :
    {
      style :
      {
        color : "NeutralStroke1"
      }
    },
    
    "window-button-close-icon-hover" :
    {     
      style :
      {
        color : "black"
      }
    },
   
   "window-button-restore-icon" :
    {
      style :
      {
        radius : 3,
        width : [2,1,1,1],
        color : "NeutralForeground1",
        shadowColor : "NeutralForeground1",
        shadowLength : [1, 1],
        shadowBlurRadius : 0,
        shadowSpreadRadius : 0
      }
    },
    
    "window-button-restore-icon-hover" :
    {
      include : "window-button-restore-icon",
      
      style :
      {
        color : "black"
      }
    },


    /*
    ---------------------------------------------------------------------------
      GROUP BOX
    ---------------------------------------------------------------------------
    */
    
    "white-box" :
    {
      style :
      {
        width: 1,
        color: "white-box-border",
        radius: 3,
        backgroundColor : "white",
        shadowLength: 0,
        shadowBlurRadius : 0,
        shadowColor : "#999999"
      }
    },
    
    "connected-top-legend" :
    {
    	include : "white-box",
    	
    	style :
	    {
	      width: [1,1,0,1],
	      radius: [ 3, 3, 0, 0 ]
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
    
    "blue-top-box" :
    {
      include : "white-box",
      
      style :
      {
        width: [2,1,1,1],
        colorTop: "box-border-blue",
        radius: [ 4, 4, 3, 3 ]
      }
    },
    
    "orange-top-box" :
    {
      include : "blue-top-box",
      
      style :
      {
        colorTop: "box-border-orange"
      }
    },
    
    "green-top-box" :
    {
      include : "blue-top-box",
      
      style :
      {
        colorTop: "box-border-green"
      }
    },


    /*
    ---------------------------------------------------------------------------
      TEXT FIELD
    ---------------------------------------------------------------------------
    */

    "sq-test" :
    {
      radius : ville.global.border.radius.Circular
    },

    "textfield-common" :
    {
      style :
      {
        radius : ville.global.border.radius.Medium,
        width : ville.global.stroke.widths.Thin,
        color : "NeutralStroke1"
      }
    },

    "textfield-span" :
    {
      include : "textfield-common",
      style :
      {
        width : 0,
        color : "TransparentStroke"
      }
    },

    "textfield" :
    {
      include : "textfield-common",
      style :
      {
        color : ["NeutralStroke1", "NeutralStroke1", "NeutralStrokeAccessible", "NeutralStroke1"],
        transitionProperty: ['border', 'box-shadow'],
        transitionDuration: ville.global.duration.Normal,
        transitionTimingFunction : ville.global.curve.DecelerateMid
      }
    },

    "textfield-focused" :
    {
      include : "textfield-common",
      style :
      {
        color : ["NeutralStroke1Pressed", "NeutralStroke1Pressed", "CompoundBrandStroke", "NeutralStroke1Pressed"],
        innerWidthBottom : 1,
        innerColorBottom : "CompoundBrandStroke",
        transitionProperty: ['border','box-shadow'],
        transitionDuration: ville.global.duration.UltraFast,
        transitionTimingFunction : ville.global.curve.AccelerateMid
      }
    },

    "textfield-disabled" :
    {
      include : "textfield-common",
      style :
      {
        color : "NeutralStrokeDisabled"
      }
    },

    "textfield-invalid" :
    {
      include : "textfield-common",
      style :
      {
        color : "NeutralStrokeDisabled"
      }
    },

    "inset" :
    {
      style :
      {
        width : 1,
        color : "neutralPrimary",
        radius : 2
      }
    },

    "inset-line" :
    {
      style :
      {
        backgroundImage: "ville/theme/fluent/decoration/slider/line.png",
        backgroundRepeat: 'repeat',
        backgroundPositionX: "center",
        backgroundPositionY: "center"
      }
    },

    "focused-inset" :
    {
      include : "inset",
      style :
      {
        color : "themePrimary",
        width : 2
      }
    },

    "focused-inset-line" :
    {
      include : "inset-line",
      style :
      {
        backgroundImage: "ville/theme/fluent/decoration/slider/line-selected.png"
      }
    },
    
    "form-focused-inset" :
    {
      style :
      {
        width : [1,1,1,2],
        color: [ "textfield-selected", "textfield-selected", "textfield-selected", "box-border-blue" ],
        radius: [ 3, 2, 2, 3 ]
      }
    },

    "border-invalid" :
    {
      include : "inset",
      style :
      {
        width : 0
      }
    },

    "invalid-line" :
    {
      include : "inset-line",
      style :
      {
        backgroundImage: "ville/theme/fluent/decoration/slider/line-invalid.png"
      }
    },

    "comboboxfield" :
    {
      include : "textfield-common",
      style :
      {
        color : ["NeutralStroke1", "NeutralStroke1", "NeutralStrokeAccessible", "NeutralStroke1"],
        transitionProperty: ['border'],
        transitionDuration: ville.global.duration.Normal,
        transitionTimingFunction : ville.global.curve.DecelerateMid
      }
    },

    "comboboxfield-focused" :
    {
      include : "textfield-common",
      style :
      {
        color : ["NeutralStroke1Pressed", "NeutralStroke1Pressed", "CompoundBrandStroke", "NeutralStroke1Pressed"],
        transitionProperty: ['border'],
        transitionDuration: ville.global.duration.UltraFast,
        transitionTimingFunction : ville.global.curve.AccelerateMid
      }
    },

    /*
    "comboboxfield-focused" :
    {
      style :
      {
        after : 
        {
          position: "absolute",
          content: "''",
          borderBottomWidth: "2px",
          borderBottomStyle: "solid",
          borderBottomColor: ville.global.color.Brand[80],
          borderBottomLeftRadius: "4px",
          borderBottomRightRadius: "4px",
          left: "-1px",
          bottom: "-1px", 
          right: "-1px",
          clipPath: "inset(calc(100% -2px) 0px 0px)",
          height: "max(2px, 4px)",
          boxSizing: "border-box",
          borderRadius: "inherit",
          transform: "scaleX(0)",
          transitionProperty: "transform",
          transitionDuration: ville.global.duration.Normal,
          transitionDelay: ville.global.curve.DecelerateMid
        },
        focusWithin :
        {
          after :
          {
            transform: "scaleX(1)",
            transitionProperty: "transform",
            transitionDuration: ville.global.duration.UltraFast,
            transitionDelay: ville.global.curve.AccelerateMid
          }
        }
        
      }
    },*/
    
    "combobox-inset" :
    {
      include : "inset",
      
      style :
      {
        width : [1,0,1,1],
        radius : [2,0,0,2]
      }
    },

    "combobox-focused-inset" :
    {
      include : "focused-inset",
      
      style :
      {
        width : [1,0,1,1],
        radius : [3,0,0,3]
      }
    },

    "combobox-border-invalid" :
    {
      include : "combobox-inset",
      
      style :
      {
        color : "#dbb1b1"
      }
    },

    "combobox-popup" : 
    {
      include : "shadow16",
      style :
      {
        radius : ville.global.border.radius.Medium,
        width : ville.global.stroke.widths.Thin,
        color : "NeutralStroke1"
      }
    },
    
    "selectbox-popup" :
    {
    	include : "popup",
    	
    	style :
    	{
        color : "textfield-selected"
    	}
    },

    "selectbox-arrow" :
    {    	
    	style :
    	{
        backgroundImage: ville.theme.fluent.Image.URLS["chevron-down"],
        backgroundRepeat: "no-repeat",
        backgroundPositionX: 1,
        backgroundPositionY: 1
    	}
    },
    
    "combobox-listitem" :
    {
    	
    	style :
    	{
    	  width : [0,0,0,0],
        color : "border-super-light"
    	}
    },


    /*
    ---------------------------------------------------------------------------
      LIST ITEM
    ---------------------------------------------------------------------------
    */

    "lead-item" :
    {
      style :
      {
        width : 1,
        style : "dotted",
        color : "border-lead"
      }
    },




    /*
    ---------------------------------------------------------------------------
      TOOL TIP
    ---------------------------------------------------------------------------
    */

    "tooltip" :
    {
      style :
      {
        width : 1,
        color : "tooltip-text",
        shadowLength : 1,
        shadowBlurRadius : 2,
        shadowColor : "shadow"
      }
    },


    "tooltip-error" :
    {
      style : {
        radius: 5,
        backgroundColor: "invalid"
      }
    },




    /*
    ---------------------------------------------------------------------------
      TOOLBAR
    ---------------------------------------------------------------------------
    */

    "toolbar-separator" :
    {
      style :
      {
        //widthLeft : 1,
        colorLeft : "button-border"
      }
    },


    /*
    ---------------------------------------------------------------------------
      MENU
    ---------------------------------------------------------------------------
    */
    "menu-popup" : 
    {
      include : "popup",
      style :
      {
        transitionProperty: ['visibility'],
        transitionDuration: ville.global.duration.Slower,
        transitionTimingFunction : ville.global.curve.DecelerateMid
      }
    },

    "menu-separator" :
    {
      style :
      {
        widthTop: 1,
        colorTop : "NeutralStroke1"
      }
    },

    "menu-radiobutton" :
    {
      style :
      {
        radius : 10,
        width : 0,
        color : "transparent",
        innerColor: "NeutralStroke1",
        innerWidth: 0
      }
    },

    "menu-checkbox-checked" :
    {
      include: "checkbox-checked",
      style :
      {
        radius : 0,
        width : 0,
        color : "transparent",
        innerColor: "transparent",
        innerWidth: 0
      }
    },


    /*
    ---------------------------------------------------------------------------
      MENU BAR
    ---------------------------------------------------------------------------
    */
    "menubar-button-hovered" :
    {
      style :
      {
        width : 1,
        color : "border-main",
        radius : 3,
        backgroundColor : "white"
      }
    },


    "menubar-button-pressed" :
    {
      include : "menubar-button-hovered",

      style :
      {
        radius : [3, 3, 0, 0],
        width : [1, 1, 0, 1]
      }
    },


    /*
    ---------------------------------------------------------------------------
      DATE CHOOSER
    ---------------------------------------------------------------------------
    */
   
    "datechooser-button" :
    {},

    "datechooser-date-pane" :
    {
      style :
      {
        widthTop: 1,
        colorTop : "border-light",
        style : "solid"
      }
    },


    "datechooser-weekday" :
    {
      style :
      {
        widthBottom: 1,
        colorBottom : "border-light",
        style : "solid"
      }
    },

    "datechooser-week" :
    {
      style :
      {
        widthRight: 1,
        colorRight : "border-light",
        style : "solid"
      }
    },

    "datechooser-week-header" :
    {
      style :
      {
        widthBottom : 1,
        colorBottom : "border-light",
        widthRight: 1,
        colorRight : "border-light",
        style : "solid"
      }
    },





    /*
    ---------------------------------------------------------------------------
      TAB VIEW
    ---------------------------------------------------------------------------
    */
   

    "tabview-page-button-top" :
    {
      style :
      {
        width : [0, 0, 4, 0],
        color : "BrandBackground1",
        radius : 0
      }
    },

    "tabview-page-button-bottom" : {
      include : "tabview-page-button-top",

      style :
      {
        width : [4, 0, 0, 0]
      }
    },

    "tabview-page-button-left" : {
      include : "tabview-page-button-top",

      style :
      {
        width : [0, 0, 0, 4]
      }
    },

    "tabview-page-button-right" : {
      include : "tabview-page-button-top",

      style :
      {
        width : [0, 4, 0, 0]
      }
    },

    "tabview-page-button-top-hovered" :
    {
      include : "tabview-page-button-top",
      
      style :
      {
        color : "NeutralStroke1Hover",
      }
    },

    "tabview-page-button-bottom-hovered" :
    {
      include : "tabview-page-button-bottom",
      
      style :
      {
        color : "NeutralStroke1Hover",
      }
    },

    "tabview-page-button-right-hovered" :
    {
      include : "tabview-page-button-right",
      
      style :
      {
        color : "NeutralStroke1Hover",
      }
    },

    "tabview-page-button-left-hovered" :
    {
      include : "tabview-page-button-left",
      
      style :
      {
        color : "NeutralStroke1Hover",
      }
    },

    "tabview-page-button-top-disabled" :
    {
      include : "tabview-page-button-top",
      
      style :
      {
        color : "NeutralStrokeDisabled",
      }
    },

    "tabview-page-button-bottom-disabled" :
    {
      include : "tabview-page-button-bottom",
      
      style :
      {
        color : "NeutralStrokeDisabled",
      }
    },

    "tabview-page-button-right-disabled" :
    {
      include : "tabview-page-button-right",
      
      style :
      {
        color : "NeutralStrokeDisabled",
      }
    },

    "tabview-page-button-left-disabled" :
    {
      include : "tabview-page-button-left",
      
      style :
      {
        color : "NeutralStrokeDisabled",
      }
    },

    "tabview-page-button-line" : 
    {
      style :
      {
        radius : 3
      }
    },
    
    
    /*
    ---------------------------------------------------------------------------
      ville.fluent
      
      TAB VIEW SPACEBAR
    ---------------------------------------------------------------------------
    */

    "tabviewspacebar-page-button-top" :
    {
      style :
      {
        width : [0, 0, 3, 0],
        backgroundColor: "background",
        //color : "white-box-border"
        color : "tabviewspacebar-bar-selected"
      }
    },

    "tabviewspacebar-page-button-bottom" : {
      include : "tabviewspacebar-page-button-top",

      style :
      {
        width : [3, 0, 0, 0]
      }
    },

    "tabviewspacebar-page-button-left" : {
      include : "tabviewspacebar-page-button-top",

      style :
      {
        width : [0, 3, 0, 0]
      }
    },
    "tabviewspacebar-page-button-right" : {
      include : "tabviewspacebar-page-button-top",

      style :
      {
        width : [0, 0, 0, 3]
      }
    },
    
    "tabviewspacebar-bar-top" : "tabview-bar-top",
    
    "tabviewspacebar-bar-bottom" : "tabviewspacebar-bar-top",
    
    "tabviewspacebar-bar-right" : "tabviewspacebar-bar-top",
    
    "tabviewspacebar-bar-left" : "tabviewspacebar-bar-top",
    
    /*
    ---------------------------------------------------------------------------
      ville.fluent
      
      TAB VIEW SPOT
    ---------------------------------------------------------------------------
    */

    "tabviewspot-page-button-top" :
    {
      include : "button-box",
      
      style :
      {
        backgroundColor: "tabviewspot-button-checked"
      }
    },
    
    "tabviewspot-page-button-top-hovered" :
    {
      include : "button-box",
      
      style :
      {
        backgroundColor: "tabviewspot-button-hovered"
      }
    },
    
    "tabviewspot-bar-top" : "tabview-bar-top",
    
    "tabviewspot-bar-bottom" : "tabviewspacebar-bar-top",
    
    "tabviewspot-bar-right" : "tabviewspacebar-bar-top",
    
    "tabviewspot-bar-left" : "tabviewspacebar-bar-top",


    /*
    ---------------------------------------------------------------------------
      TABLE
    ---------------------------------------------------------------------------
    */
   
   "table-standard" :
   {
      style :
      {
        radius : 3,
        width : 1,
        color : "NeutralBackground1",
        style : "solid"
      }
    },

    "table-pane" :
    {
      width : [0,1,0,0],
      color : "NeutralStroke2"
    },

    "statusbar" :
    {
      style :
      {
        width : [1,0,0,0],
        color : "NeutralStroke2",
        style : "solid" 
      }
    },

    "table-scroller-focus-indicator" :
    {
      style :
      {
        width : 2,
        color : "table-focus-indicator",
        style : "solid"
      }
    },

    "table-header" :
    {
      style :
      {
        //radius : [3,0,0,0],
        widthBottom : 1,
        color : "NeutralStroke2"
        
      }
    },

    "table-header-column-button" : "table-header",
    /*{
      include : "table-header",
      style : {
        width : 0,
        color : "NeutralStroke2"
      }
    },*/

    "select-column-order-vert" :
    {
    	style : {
    		radius : 1,
        widthLeft : 2,
        widthRight : 2,
        widthTop : 3,
        widthBottom : 2,
	      innerWidthTop: 0,
	      innerWidthLeft: 3,
	      innerWidthRight: 3,
	      innerWidthBottom: 0,
        colorTop : "gray",
        colorBottom : "gray",
        colorLeft : "gray",
        innerColorLeft: "table-header",
        innerColorRight: "table-header",
        colorRight : "gray"
    	}
    },

    "select-column-order-hovered-vert" :
    {
    	style : {
    		radius : 1,
        widthLeft : 2,
        widthRight : 2,
        widthTop : 3,
        widthBottom : 2,
	      innerWidthTop: 0,
	      innerWidthLeft: 3,
	      innerWidthRight: 3,
	      innerWidthBottom: 0,
        colorTop : "black",
        colorBottom : "black",
        colorLeft : "black",
        innerColorLeft: "table-header",
        innerColorRight: "table-header",
        colorRight : "black"
    	}
    },
    
    "select-column-order" :
    {
    	style : {
    		radius : 1,
        widthLeft : 0,
        widthRight : 0,
        widthTop : 2,
        widthBottom : 2,
	      innerWidthTop: 2,
	      innerWidthLeft: 0,
	      innerWidthRight: 0,
	      innerWidthBottom: 2,
	      colorTop : "gray",
        innerColorTop: "table-header",
        innerColorBottom: "table-header",
        colorBottom : "gray"
    	}
    },
    
    "select-column-order-hover" :
    {
    	include: "select-column-order",
    	style : {
	        color : "black",
	        innerColor: "black"
    	}
    },

    "table-header-cell" :
    {
      style :
      {
        widthRight : 0,
        widthBottom : 0,
        color : "NeutralStroke2"
      }
    },

    "table-header-cell-first" :
    {
      include : "table-header-cell",
      style : {
        radius : [0,0,0,0]
      }
    },

    "progressive-table-header" :
    {
      include : "button-box",

      style :
      {
        radius : 0,
        width : [1, 0, 1, 1]
      }
    },

    "progressive-table-header-cell" :
    {
      style :
      {
        widthRight: 1,
        color : "button-border"
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
        radius : ville.global.border.radius.Circular,
        width : 1,
        color : "NeutralBackground6"
      }
    },
    
    "progressbar-trans" :
    {
      style :
      {
        radius : ville.global.border.radius.Circular,
        width : 1,
        color : "NeutralBackground6"
      }
    },



    /*
    ---------------------------------------------------------------------------
      RADIO BUTTON
    ---------------------------------------------------------------------------
    */

    "radiobutton" :
    {
      style :
      {
        radius : ville.global.border.radius.Circular,
        width : ville.global.stroke.widths.Thin,
        color : "NeutralStrokeAccessible"
      }
    },

    // Not used any more
    "radiobutton-checked" :
    {
      include: "radiobutton",
      style :
      {
        color : "CompoundBrandStroke",
        innerWidth: ville.global.stroke.widths.Thick,
        innerColor: "NeutralBackground2"
        /*inset : true,
        shadowColor : "CompoundBrandForeground1",
        shadowVerticalLength : 14,
        shadowBlurRadius : 0,
        shadowSpreadRadius : 2*/
      }
    },

    "radiobutton-invalid" :
    {
      include : "radiobutton",
      style :
      {
        color : "PaletteRedBorder2"
      }
    },


    /*
    ---------------------------------------------------------------------------
      CHECK BOX
    ---------------------------------------------------------------------------
    */

   "checkbox" :
    {
      include : "radiobutton",
      
      style :
      {
        radius : ville.global.border.radius.Small,
        innerWidth: 0
      }
    },
    
    "checkbox-checked" :
    {
    	include : "checkbox",
    	
    	style :
    	{
    		innerWidth : 0,
        color : "CompoundBrandBackground"
    	}
    },

    "checkbox-checked-disabled" : "checkbox-checked",   

    "checkbox-focused" :
    {
      include : "checkbox",
      style :
      {
        color : "textfield-selected"
      }
    },

    "checkbox-checked-focused" :
    {
    	include : "checkbox-checked",
    	
    	style :
    	{
        innerWidth : 0,
        color : "textfield-selected"
    	}
    },

    "checkbox-invalid" :
    {
      include : "checkbox",
      style :
      {
        color : "invalid"
      }
    },

    "checkbox-checked-invalid" :
    {
      include : "checkbox-checked",
      style :
      {
        color : "invalid"
      }
    },

    "checkbox-undetermined" :
    {
      include : "checkbox",
      style :
      {
        innerWidth : [6,3],
        innerColor: "white"
      }
    },

    "checkbox-undetermined-focused" :
    {
    	include : "checkbox-undetermined",
    	
    	style :
    	{
    		color : "textfield-selected"
    	}
    },

    "checkbox-undetermined-disabled" :
    {
      include : "checkbox-undetermined",
      style :
      {
        color : "text-disabled"
      }
    },

    "checkbox-undetermined-invalid" :
    {
      include : "checkbox-undetermined",
      style :
      {
        color : "invalid"
      }
    }
  }
});
