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
      family: ville.global.font.family.Base,
      weight: ville.global.font.weight.Regular,
      size: ville.global.font.size.Base300,
      color: "NeutralForeground1",
      lineHeight: 1.426
    },

    "monospace" :
    {
      family : ville.global.font.family.Monospace,
      weight: ville.global.font.weight.Regular,
      size: ville.global.font.size.Base200,
      color: "NeutralForeground1",
      lineHeight: 1.16666
    },

    "numeric" :
    {
      family : ville.global.font.family.Numeric,
      weight: ville.global.font.weight.Regular,
      size: ville.global.font.size.Base300,
      color: "NeutralForeground1",
      lineHeight: 1.426
    },

    "button" : 
    {
      include : "default",
      weight: ville.global.font.weight.Semibold,
      lineHeight: 1.43
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
    },

    // Fluent UI Typography Styles
    "body1": 
    {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Base300,
      weight: ville.global.font.weight.Regular
    },
    
    "body1Strong": 
    {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Base300,
      weight: ville.global.font.weight.Semibold
    },
    body1Stronger: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Base300,
      weight: ville.global.font.weight.Bold
    },
    body2: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Base400,
      weight: ville.global.font.weight.Regular
    },
    caption1: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Base200,
      weight: ville.global.font.weight.Regular
    },
    caption1Strong: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Base200,
      weight: ville.global.font.weight.Semibold
    },
    caption1Stronger: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Base200,
      weight: ville.global.font.weight.Bold
    },
    caption2: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Base100,
      weight: ville.global.font.weight.Regular
    },
    caption2Strong: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Base100,
      weight: ville.global.font.weight.Semibold
    },
    subtitle1: {
      include : "default",
      size: ville.global.font.size.Base500,
      weight: ville.global.font.weight.Semibold
    },
    subtitle2: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Base400,
      weight: ville.global.font.weight.Semibold
    },
    subtitle2Stronger: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Base400,
      weight: ville.global.font.weight.Bold
    },
    title1: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Hero800,
      weight: ville.global.font.weight.Semibold
    },
    title2: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Hero700,
      weight: ville.global.font.weight.Semibold
    },
    title3: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Base600,
      weight: ville.global.font.weight.Semibold
    },
    largeTitle: {
      family: ville.global.font.family.Base,
      size: ville.global.font.size.Hero900,
      weight: ville.global.font.weight.Semibold
    },
    display: {
      include : "default",
      size: ville.global.font.size.Hero1000,
      weight: ville.global.font.weight.Semibold,
      letterSpacing : -3
    }
  }
});
