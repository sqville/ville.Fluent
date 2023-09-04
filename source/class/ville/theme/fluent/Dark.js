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
 * Dark - Fluent color theme
 */
qx.Theme.define("ville.theme.fluent.Dark",
{  
  colors :
  {
    NeutralForeground1 : ville.global.color.White,
    NeutralForeground1Hover : ville.global.color.White,
    NeutralForeground1Pressed : ville.global.color.White,
    NeutralForeground1Selected : ville.global.color.White,
    NeutralForeground2 : ville.global.color.Grey[84],
    NeutralForeground2Hover : ville.global.color.White,
    NeutralForeground2Pressed : ville.global.color.White,
    NeutralForeground2Selected : ville.global.color.White,
    NeutralForeground2BrandHover : ville.global.color.Brand[100],
    NeutralForeground2BrandPressed : ville.global.color.Brand[90],
    NeutralForeground2BrandSelected : ville.global.color.Brand[100],
    NeutralForeground3 : ville.global.color.Grey[68],
    NeutralForeground3Hover : ville.global.color.Grey[84],
    NeutralForeground3Pressed : ville.global.color.Grey[84],
    NeutralForeground3Selected : ville.global.color.Grey[84],
    NeutralForeground3BrandHover : ville.global.color.Brand[100],
    NeutralForeground3BrandPressed : ville.global.color.Brand[90],
    NeutralForeground3BrandSelected : ville.global.color.Brand[100],
    NeutralForeground4 : ville.global.color.Grey[60],
    NeutralForegroundDisabled : ville.global.color.Grey[36],
    NeutralForegroundInvertedDisabled : ville.global.color.WhiteAlpha[40],
    BrandForegroundLink : ville.global.color.Brand[100],
    BrandForegroundLinkHover : ville.global.color.Brand[110],
    BrandForegroundLinkPressed : ville.global.color.Brand[90],
    BrandForegroundLinkSelected : ville.global.color.Brand[100],
    NeutralForeground2Link : ville.global.color.Grey[84],
    NeutralForeground2LinkHover : ville.global.color.White,
    NeutralForeground2LinkPressed : ville.global.color.White,
    NeutralForeground2LinkSelected : ville.global.color.White,
    CompoundBrandForeground1 : ville.global.color.Brand[100],
    CompoundBrandForeground1Hover : ville.global.color.Brand[110],
    CompoundBrandForeground1Pressed : ville.global.color.Brand[90],
    BrandForeground1 : ville.global.color.Brand[100],
    BrandForeground2 : ville.global.color.Brand[110],
    NeutralForeground1Static : ville.global.color.Grey[14],
    NeutralForegroundStaticInverted : ville.global.color.White,
    NeutralForegroundInverted : ville.global.color.Grey[14],
    NeutralForegroundInvertedHover : ville.global.color.Grey[14],
    NeutralForegroundInvertedPressed : ville.global.color.Grey[14],
    NeutralForegroundInvertedSelected : ville.global.color.Grey[14],
    NeutralForegroundInverted2 : ville.global.color.Grey[14],
    NeutralForegroundOnBrand : ville.global.color.White,
    NeutralForegroundInvertedLink : ville.global.color.White,
    NeutralForegroundInvertedLinkHover : ville.global.color.White,
    NeutralForegroundInvertedLinkPressed : ville.global.color.White,
    NeutralForegroundInvertedLinkSelected : ville.global.color.White,
    BrandForegroundInverted : ville.global.color.Brand[80],
    BrandForegroundInvertedHover : ville.global.color.Brand[70],
    BrandForegroundInvertedPressed : ville.global.color.Brand[60],
    BrandForegroundOnLight : ville.global.color.Brand[80],
    BrandForegroundOnLightHover : ville.global.color.Brand[70],
    BrandForegroundOnLightPressed : ville.global.color.Brand[50],
    BrandForegroundOnLightSelected : ville.global.color.Brand[60],
    NeutralBackground1 : ville.global.color.Grey[16],
    NeutralBackground1Hover : ville.global.color.Grey[24],
    NeutralBackground1Pressed : ville.global.color.Grey[12],
    NeutralBackground1Selected : ville.global.color.Grey[22],
    NeutralBackground2 : ville.global.color.Grey[12],
    NeutralBackground2Hover : ville.global.color.Grey[20],
    NeutralBackground2Pressed : ville.global.color.Grey[8],
    NeutralBackground2Selected : ville.global.color.Grey[18],
    NeutralBackground3 : ville.global.color.Grey[8],
    NeutralBackground3Hover : ville.global.color.Grey[16],
    NeutralBackground3Pressed : ville.global.color.Grey[4],
    NeutralBackground3Selected : ville.global.color.Grey[14],
    NeutralBackground4 : ville.global.color.Grey[4],
    NeutralBackground4Hover : ville.global.color.Grey[12],
    NeutralBackground4Pressed : ville.global.color.Black,
    NeutralBackground4Selected : ville.global.color.Grey[10],
    NeutralBackground5 : ville.global.color.Black,
    NeutralBackground5Hover : ville.global.color.Grey[8],
    NeutralBackground5Pressed : ville.global.color.Grey[2],
    NeutralBackground5Selected : ville.global.color.Grey[6],
    NeutralBackground6 : ville.global.color.Grey[20],
    NeutralBackgroundInverted : ville.global.color.White,
    NeutralBackgroundStatic : ville.global.color.Grey[24],
    SubtleBackground : "#00000000",
    SubtleBackgroundHover : ville.global.color.Grey[22],
    SubtleBackgroundPressed : ville.global.color.Grey[18],
    SubtleBackgroundSelected : ville.global.color.Grey[20],
    SubtleBackgroundLightAlphaHover : ville.global.color.Grey14Alpha[80],
    SubtleBackgroundLightAlphaPressed : ville.global.color.Grey14Alpha[50],
    SubtleBackgroundLightAlphaSelected : "#00000000",
    SubtleBackgroundInverted : "#00000000",
    SubtleBackgroundInvertedHover : ville.global.color.BlackAlpha[10],
    SubtleBackgroundInvertedPressed : ville.global.color.BlackAlpha[30],
    SubtleBackgroundInvertedSelected : ville.global.color.BlackAlpha[20],
    TransparentBackground : "#00000000",
    TransparentBackgroundHover : "#00000000",
    TransparentBackgroundPressed : "#00000000",
    TransparentBackgroundSelected : "#00000000",
    NeutralBackgroundDisabled : ville.global.color.Grey[8],
    NeutralBackgroundInvertedDisabled : ville.global.color.WhiteAlpha[10],
    NeutralStencil1 : ville.global.color.Grey[34],
    NeutralStencil2 : ville.global.color.Grey[20],
    NeutralStencil1Alpha : ville.global.color.WhiteAlpha[10],
    NeutralStencil2Alpha : ville.global.color.WhiteAlpha[5],
    BackgroundOverlay : ville.global.color.BlackAlpha[50],
    ScrollbarOverlay : ville.global.color.WhiteAlpha[60],
    BrandBackground1 : ville.global.color.Brand[70],
    BrandBackground1Hover : ville.global.color.Brand[80],
    BrandBackground1Pressed : ville.global.color.Brand[40],
    BrandBackground1Selected : ville.global.color.Brand[60],
    CompoundBrandBackground : ville.global.color.Brand[100],
    CompoundBrandBackgroundHover : ville.global.color.Brand[110],
    CompoundBrandBackgroundPressed : ville.global.color.Brand[90],
    BrandBackgroundStatic : ville.global.color.Brand[80],
    BrandBackground2 : ville.global.color.Brand[40],
    BrandBackgroundInverted : ville.global.color.White,
    BrandBackgroundInvertedHover : ville.global.color.Brand[160],
    BrandBackgroundInvertedPressed : ville.global.color.Brand[140],
    BrandBackgroundInvertedSelected : ville.global.color.Brand[150],
    NeutralStrokeAccessible : ville.global.color.Grey[68],
    NeutralStrokeAccessibleHover : ville.global.color.Grey[74],
    NeutralStrokeAccessiblePressed : ville.global.color.Grey[70],
    NeutralStrokeAccessibleSelected : ville.global.color.Brand[100],
    NeutralStroke1 : ville.global.color.Grey[40],
    NeutralStroke1Hover : ville.global.color.Grey[46],
    NeutralStroke1Pressed : ville.global.color.Grey[42],
    NeutralStroke1Selected : ville.global.color.Grey[44],
    NeutralStroke2 : ville.global.color.Grey[32],
    NeutralStroke3 : ville.global.color.Grey[24],
    NeutralStrokeOnBrand : ville.global.color.Grey[16],
    NeutralStrokeOnBrand2 : ville.global.color.White,
    NeutralStrokeOnBrand2Hover : ville.global.color.White,
    NeutralStrokeOnBrand2Pressed : ville.global.color.White,
    NeutralStrokeOnBrand2Selected : ville.global.color.White,
    BrandStroke1 : ville.global.color.Brand[100],
    BrandStroke2 : ville.global.color.Brand[50],
    CompoundBrandStroke : ville.global.color.Brand[100],
    CompoundBrandStrokeHover : ville.global.color.Brand[110],
    CompoundBrandStrokePressed : ville.global.color.Brand[90],
    NeutralStrokeDisabled : ville.global.color.Grey[26],
    NeutralStrokeInvertedDisabled : ville.global.color.WhiteAlpha[40],
    TransparentStroke : "#00000000",
    TransparentStrokeInteractive : "#00000000",
    TransparentStrokeDisabled : "#00000000",
    StrokeFocus1 : ville.global.color.Black,
    StrokeFocus2 : ville.global.color.White,
    "Neutral Shadow Ambient" : "#0000003d",
    "Neutral Shadow Key" : "#00000047",
    "Neutral Shadow AmbientLighter" : "#0000001f",
    "Neutral Shadow KeyLighter" : "#00000024",
    "Neutral Shadow AmbientDarker" : "#00000066",
    "Neutral Shadow KeyDarker" : "#0000007a",
    "Brand Shadow Ambient" : "#0000004d",
    "Brand Shadow Key" : "#00000040",


    // from light version - may need to change
    "PaletteRedBorder2" : ville.global.color.Red.Primary,
    


    
    
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
    "table-row-background-focused-selected" : ville.global.color.Brand[20], //BrandBackground2
    "table-row-background-focused" : ville.global.color.Brand[20], //BrandBackground2
    "table-row-background-selected" : ville.global.color.Brand[20], //BrandBackground2
    "table-row-background-even" : "transparent",
    "table-row-background-odd" : "transparent",
    "table-row-selected" : ville.global.color.White, //NeutralForeground1
    "table-row" : ville.global.color.White, //NeutralForeground1
    "table-row-line" : ville.global.color.Grey[32], //NeutralStroke2
    "table-column-line" : "transparent", //ville.global.color.Grey[32], //NeutralStroke2

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
