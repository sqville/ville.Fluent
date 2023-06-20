/* ************************************************************************

   Copyright: 2021 sqville

   License: MIT license

   Authors: Chris Eskew (sqville) chris.eskew@sqville.com

************************************************************************ */
/*
* @asset(ville/wax/Providence.ttf)
*/

qx.Theme.define("ville.wax.theme.Font",
{
  extend : ville.theme.fluent.Font,

  fonts :
  {
    "ville-logo-header" : {
      size: 28,
      family: ["Providence","sans-serif"],
      sources: [
        {
          family: "Providence",
          source: ["ville/wax/Providence.ttf"]
        }
      ]
    },
    
    "ville-fluent-logo-display" : {
      size: 84,
      letterSpacing: 2,
      family: ["Providence","sans-serif"],
      sources: [
        {
          family: "Providence",
          source: ["ville/wax/Providence.ttf"]
        }
      ]
    },

    "ville-fluent-logo-footer" : {
      size: 28,
      letterSpacing: 2,
      family: ["Providence","sans-serif"],
      sources: [
        {
          family: "Providence",
          source: ["ville/wax/Providence.ttf"]
        }
      ]
    },

    "subtitle0": {
      include : "default",
      size: ville.global.font.size.Base500
    },

    "heading2": {
      include : "default",
      size: ville.global.font.size.Hero800,
      weight: ville.global.font.weight.Semibold,
    },
    
    "default-bold" :
    {
      include : "default",
      bold : true
    },

    "mainmenubutton" :
    {
      include : "default",
      size : 16
    },

    "mainmenubutton-bold" :
    {
      include : "mainmenubutton",
      bold : true
    },

    "mainmenubutton-hym" :
    {
      include : "default",
      size : 11
    },

    "mainmenuindicator" :
    {
      include : "default-bold",
      size : 14
    },

    "headeratom" :
    {
      include : "default-bold",
      size : 16
    },

    "control-headeratom" :
    {
    	include : "default-bold",
    	size : 32
    },

    "control-header" :
    {
    	include : "default",
    	size : 32
    },

    "area-header" :
    {
      include : "default",
      size : 21
    },

    "hym-app-header" :
    {
      include : "default",
      family : ["-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
      bold : true,
      size : 16
    },

    "hym-app-page-header" :
    {
      family : ["-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
      bold : true,
      size : 24
    },

    "hym-app-page-section-header" :
    {
      family : ["-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
      bold : true,
      size : 16
    },

    "hym-app-link" :
    {
      family : ["-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
      size : 14
    },

    "hym-form-button" :
    {
      family : ["-apple-system", "BlinkMacSystemFont", "Helvetica Neue", "arial", "Helvetica", "sans-serif"],
      size : 14,
      bold : true
    }

  }
});