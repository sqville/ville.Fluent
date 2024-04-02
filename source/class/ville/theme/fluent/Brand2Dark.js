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
qx.Theme.define("ville.theme.fluent.Brand2Dark",
{  
  extend : ville.theme.fluent.Dark,
  
  colors :
  {
    NeutralForeground2BrandHover : ville.global.color.Brand2[100],
    NeutralForeground2BrandPressed : ville.global.color.Brand2[90],
    NeutralForeground2BrandSelected : ville.global.color.Brand2[100],
    NeutralForeground3BrandHover : ville.global.color.Brand2[100],
    NeutralForeground3BrandPressed : ville.global.color.Brand2[90],
    NeutralForeground3BrandSelected : ville.global.color.Brand2[100],
    BrandForegroundLink : ville.global.color.Brand2[100],
    BrandForegroundLinkHover : ville.global.color.Brand2[110],
    BrandForegroundLinkPressed : ville.global.color.Brand2[90],
    BrandForegroundLinkSelected : ville.global.color.Brand2[100],
    CompoundBrandForeground1 : ville.global.color.Brand2[100],
    CompoundBrandForeground1Hover : ville.global.color.Brand2[110],
    CompoundBrandForeground1Pressed : ville.global.color.Brand2[90],
    BrandForeground1 : ville.global.color.Brand2[100],
    BrandForeground2 : ville.global.color.Brand2[110],
    BrandForegroundInverted : ville.global.color.Brand2[80],
    BrandForegroundInvertedHover : ville.global.color.Brand2[70],
    BrandForegroundInvertedPressed : ville.global.color.Brand2[60],
    BrandForegroundOnLight : ville.global.color.Brand2[80],
    BrandForegroundOnLightHover : ville.global.color.Brand2[70],
    BrandForegroundOnLightPressed : ville.global.color.Brand2[50],
    BrandForegroundOnLightSelected : ville.global.color.Brand2[60],
    BrandBackground1 : ville.global.color.Brand2[70],
    BrandBackground1Hover : ville.global.color.Brand2[80],
    BrandBackground1Pressed : ville.global.color.Brand2[40],
    BrandBackground1Selected : ville.global.color.Brand2[60],
    CompoundBrandBackground : ville.global.color.Brand2[100],
    CompoundBrandBackgroundHover : ville.global.color.Brand2[110],
    CompoundBrandBackgroundPressed : ville.global.color.Brand2[90],
    BrandBackgroundStatic : ville.global.color.Brand2[80],
    BrandBackground2 : ville.global.color.Brand2[40],
    BrandBackgroundInverted : ville.global.color.White,
    BrandBackgroundInvertedHover : ville.global.color.Brand2[160],
    BrandBackgroundInvertedPressed : ville.global.color.Brand2[140],
    BrandBackgroundInvertedSelected : ville.global.color.Brand2[150],
    NeutralStrokeAccessibleSelected : ville.global.color.Brand2[100],
    NeutralStrokeOnBrand : ville.global.color.Grey[16],
    NeutralStrokeOnBrand2 : ville.global.color.White,
    NeutralStrokeOnBrand2Hover : ville.global.color.White,
    NeutralStrokeOnBrand2Pressed : ville.global.color.White,
    NeutralStrokeOnBrand2Selected : ville.global.color.White,
    BrandStroke1 : ville.global.color.Brand2[100],
    BrandStroke2 : ville.global.color.Brand2[50],
    CompoundBrandStroke : ville.global.color.Brand2[100],
    CompoundBrandStrokeHover : ville.global.color.Brand2[110],
    CompoundBrandStrokePressed : ville.global.color.Brand2[90],
    "Brand Shadow Ambient" : "#0000004d",
    "Brand Shadow Key" : "#00000040",

    // used in table code
    "table-header-cell" : "red",
    "table-row-background-focused-selected" : ville.global.color.Brand2[30], //BrandBackground2
    "table-row-background-focused" : ville.global.color.Brand2[30], //BrandBackground2
    "table-row-background-selected" : ville.global.color.Brand2[30], //BrandBackground2
    "table-row-background-even" : "transparent",
    "table-row-background-odd" : "transparent",
    "table-row-selected" : ville.global.color.White, //NeutralForeground1
    "table-row" : ville.global.color.White, //NeutralForeground1
    "table-row-line" : ville.global.color.Grey[32], //NeutralStorke2
    "table-column-line" : "transparent" //ville.global.color.Grey[88], //NeutralStorke2
  }
});
