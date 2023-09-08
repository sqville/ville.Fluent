/* ************************************************************************

   SQville

   Copyright:
     None

   License:
     MIT

   Authors:
     * Chris Eskew (sqville@gmail.com)

************************************************************************ */

/**
 * Light - Fluent color theme
 */
qx.Theme.define("ville.theme.fluent.Common",
{  
  colors :
  { 
    //****************************
    //*** From the Theme Designer
    //****************************
      "themePrimary": "#0078d4",
      "themeLighterAlt": "#eff6fc",
      "themeLighter": "#deecf9",
      "themeLight": "#c7e0f4",
      "themeTertiary": "#71afe5",
      "themeSecondary": "#2b88d8",
      "themeDarkAlt": "#106ebe",
      "themeDark": "#005a9e",
      "themeDarker": "#004578",
      "neutralLighterAlt": "#faf9f8",
      "neutralLighter": "#f3f2f1",
      "neutralLight": "#edebe9",
      "neutralQuaternaryAlt": "#e1dfdd",
      "neutralQuaternary": "#d0d0d0",
      "neutralTertiaryAlt": "#c8c6c4",
      "neutralTertiary": "#a19f9d",
      "neutralSecondary": "#605e5c",
      "neutralPrimaryAlt": "#3b3a39",
      "neutralPrimary": "#323130",
      "neutralDark": "#201f1e",
      //"black": "#000000",
      //"white": "#ffffff",

      "button-border" : "#8A8886",
      "button-box-bright-hovered" : "#F3F2F1",
      "button-box-bright-pressed" : "#EDEBE9",

    
    
    //************************
    //*** Color Pallette 1 ***
    //************************
    "primary" : [33, 133, 208], //#2185D0
    "secondary" : "#1b1c1d",
    "tertiary" : "#5bbd72",
    
    // main
    "background" : "#ffffff",
    "light-background" : "#E0ECFF",

    // backgrounds
    "background-selected" : "#6694E3",
    "background-selected-disabled" : "#CDCDCD",
    "background-selected-dark" : "#5685D6",
    "background-disabled" : "#F7F7F7",
    "background-disabled-checked" : "#BBBBBB",
    "background-pane" : "#ffffff",
    "background-invalid" : "#fff0f0",
    "background-group-item" : "#BABABA",

    // tabview
    "tabview-unselected" : "#1866B5",
    "tabview-button-border" : "#134983",
    "tabview-label-active-disabled" : "#D9D9D9",
    "tabviewspacebar-bar-selected" : "#888888",
    "tabview-text-normal" : "#444444",
    "tabviewspot-button-checked" : "#F2F2F2",
    "tabviewspot-button-hovered" : "#F7F7F7",
    
    // combobox
    "combobox-hovered" : "#F2F2F2",
    "combobox-item-selected" : "#F7F7F7",

    // list
    "group-item-" : "#ffffff",

    // text colors
    "link" : "#24B",
    "group-item" : "#ffffff",

    // scrollbar
    "scrollbar-bright" : "#F1F1F1",
    "scrollbar-dark" : "#EBEBEB",

    // form
    "button" : "rgba(0, 0, 0, 0.6)",
    "button-border-hovered" : "#939393",
    "invalid" : "#FF0000",
    "button-box-bright" : "#e0e0e0",
    "button-box-dark" : "#E3E3E3",
    "button-box-dark-pressed" : "#F5F5F5",
    "border-lead" : "#888888",
    "button-text" : "rgba(0, 0, 0, 0.6)",
    "button-text-hovered" : "rgba(0, 0, 0, 0.8)",
    "button-focus-shadow" : qx.core.Environment.get("css.rgba") ? "rgba(81, 167, 232, 0.8)" : "#51A7E8",   //SQv New
    
    //SQ New
    "textfield-selected" : qx.core.Environment.get("css.rgba") ? "rgba(133, 183, 217, 1)" : "#85b7d9",
	  "textfield-selected-darker" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.5)" : "#BDBEBE",
	
    //SQ New
    "progressbar-base" : qx.core.Environment.get("css.rgba") ? "rgba(229, 229, 229, 1)" : "#E5E5E5",
    "progressbar-gray" : qx.core.Environment.get("css.rgba") ? "rgba(136, 136, 136, 1)" : "#888888",
    "progressbar-complete" : qx.core.Environment.get("css.rgba") ? "rgba(33, 186, 69, 1)" : "#21BA45",
    "progressbar-warning" : qx.core.Environment.get("css.rgba") ? "rgba(242, 192, 55, 1)" : "#F2C037",
    "progressbar-error" : qx.core.Environment.get("css.rgba") ? "rgba(219, 40, 40, 1)" : "#DB2828",	
	
    //*** Primary Button colors
    "primary-button-box" : "#3b83c0",
    "primary-button-box-hovered" : "#458ac6",
    "primary-button-box-pressed" : "#3576ac",
    "primary-button-text" : "#ffffff",
    
    //*** Secondary Button colors
    "secondary-button-box" : "#1b1c1d",
    "secondary-button-box-hovered" : "#222425",
    "secondary-button-box-pressed" : "#0a0a0b",
    "secondary-button-inset-shadow" : "rgba(39, 41, 43, 0.15)",
    "secondary-button-text" : "primary-button-text",
    
    //*** Tertiary Button colors
    "tertiary-button-box" : "#5bbd72",
    "tertiary-button-box-hovered" : "#66C17B",
    "tertiary-button-box-pressed" : "#46AE5F",
    "tertiary-button-inset-shadow" : "rgba(39, 41, 43, 0.15)",
    "tertiary-button-text" : "primary-button-text",
    
    "ville-black" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 1)" : "#000000",
    "ville-arrow-gray" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.6)" : "#444444",
    "ville-arrow-med-gray" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.4)" : "#444444",

    // window
    "window-border" : "#2E3A46",
    "window-border-inner" : "white",

    // group box
    "white-box-border" : "#D8D8D8",
    "box-border-blue" : "#3b83c0",
    "box-border-orange" : "#e07b53",
    "box-border-green" : "#5bbd72",

    // shadows
    "shadow" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.4)" : "#999999",
    "shadow-light" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.2)" : "#CCCCCC",

    // borders
    // 'border-main' is an alias of 'background-selected' (compatibility reasons)
    "border-main" : "#6694E3",
    "border-light" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.15)" : "#D8D8D8",
    "border-light-darker" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.2)" : "#D8D8D8",
    "border-light-shadow" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.15)" : "#D8D8D8",
    "border-super-light" : qx.core.Environment.get("css.rgba") ? "rgba(0, 0, 0, 0.06)" : "#EEEEEE",

    // separator
    "border-separator" : "#808080",

    // text
    "text-combobox-listitem" : "rgba(0, 0, 0, 0.6)", //NOT USED
    "text" : "rgba(0, 0, 0, 0.87)",
    "text-darker" : "rgba(0, 0, 0, 0.9)",
    "text-disabled" : "rgba(0, 0, 0, 0.4)",
    "text-selected" : "#000000",
    "text-placeholder" : "rgba(0, 0, 0, 0.4)",

    // tooltip
    "tooltip" : "#FFFFE1",
    "tooltip-text" : "#000000",

    // table
    "table-border" : "#DEDEDE",
    "table-header" : "#F9FAFB",
    "table-focus-indicator" : [ 179, 217, 255 ],

    // used in table code
    "table-header-cell" : "red",
    "table-row-background-focused-selected" : ville.global.color.Brand[160], //BrandBackground2
    "table-row-background-focused" : ville.global.color.Brand[160], //BrandBackground2
    "table-row-background-selected" : ville.global.color.Brand[160], //BrandBackground2
    "table-row-background-even" : "transparent",
    "table-row-background-odd" : "transparent",
    "table-row-selected" : ville.global.color.Grey[14], //NeutralForeground1
    "table-row" : ville.global.color.Grey[14], //NeutralForeground1
    "table-row-line" : ville.global.color.Grey[88], //NeutralStorke2
    "table-column-line" : "transparent", //ville.global.color.Grey[88], //NeutralStorke2

    // used in progressive code
    "progressive-table-header" : "#AAAAAA",
    "progressive-table-row-background-even" : [ 250, 248, 243 ],
    "progressive-table-row-background-odd" : [ 255, 255, 255 ],
    "progressive-progressbar-background" : "gray",
    "progressive-progressbar-indicator-done" : "#CCCCCC",
    "progressive-progressbar-indicator-undone" : "#ffffff",
    "progressive-progressbar-percent-background" : "gray",
    "progressive-progressbar-percent-text" : "#ffffff"
  }
});
