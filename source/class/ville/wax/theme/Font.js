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
    "subtitle0": {
      include : "default",
      size: ville.global.font.size.Base500
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
    },

    "ville-logo-font" : {
      size: 32,
      family: ["sans-serif"],
      sources: [
        {
          family: "Providence",
          source: ["ville/wax/Providence.ttf"]
        }
      ]
    },

  }
});