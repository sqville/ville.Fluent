/* ************************************************************************

   SQville Software

   http://sqville.com

   Copyright:
     None

   License:
     MIT

   Authors:
     * Chris Eskew (chris.eskew@sqville.com)

************************************************************************ */

/**
 * The ville.Fluent font theme.
 * 
 */
qx.Theme.define("ville.theme.fluent.Font",
{
  
  fonts :
  {
    "default" :
    {
      family: ["Segoe UI", "Segoe UI Web (West European)", "Segoe UI", "-apple-system", "BlinkMacSystemFont", "Roboto", "Helvetica Neue", "sans-serif"],
      color : "text",
      weight : "400",
      lineHeight : 1,
      size : 14
    },

    "bold" :
    {
      include : "default",
      weight : "600"
    },

    "datechooser" :
    {
      include : "default",
      size : 13
    },

    "datechooser-bold" :
    {
      include : "bold",
      size : 13
    },

    "button" : 
    {
      include : "bold",
      size : 14
    },

    "groupbox-legend" :
    {
      include : "bold"
    },

    "window-header" :
    {
      include : "default",
      size : 20
    },    
    
    "unicode-icons-sm" :
    {
    	size : 20,
    	family : ["arial", "helvetica", "Segoe UI Symbol"]
    },
    
    "input" :
    {
      include : "default",
      size : 14
    },
   

    "headline" :
    {
      include : "default",
      size : 24
    },

    "small" :
    {
      include : "default",
      size : 11
    },

    "monospace" :
    {
      size : 11,
      family : [ "DejaVu Sans Mono", "Courier New", "monospace" ]
    },
        
    // Theme Browser Content Formatting
    "control-header" :
    {
    	include : "default",
    	size : 24,
    	bold : true
    },
    
    "control-header2" :
    {
    	include : "default",
    	size : 20
    },

    // TreeVirtual Legacy
    "treevirtual" :
    {
      include : "default",
    	size : 8
    }
  }
});
