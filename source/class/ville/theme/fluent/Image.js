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
/* ************************************************************************


************************************************************************* */
/**
 * Mapping class for all images used in the fluent theme.
 *
 * @asset(qx/static/blank.png)
 * @asset(decoration/checkbox/*)
 * @asset(decoration/arrows/*)
 * @asset(decoration/slider/*)
 * @asset(decoration/tree/*)
 * @asset(decoration/table/*)
 * @asset(decoration/tabview/*)
 * @asset(decoration/colorselector/*)
 * @asset(decoration/treevirtual/*)
 * @asset(decoration/cursor/*)
 * @asset(decoration/close-24px.svg)
 */
qx.Class.define("ville.theme.fluent.Image",
{
  extend : qx.core.Object,

  statics :
  {    
    SVG :
    {
      "dismiss" : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path d="m4.4 4.55.07-.08a.75.75 0 0 1 .98-.07l.08.07L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1-.07-.98l.07-.08-.07.08Z"></path></svg>',
      "dismiss_patharr" : "m4.4 4.55.07-.08a.75.75 0 0 1 .98-.07l.08.07L12 10.94l6.47-6.47a.75.75 0 1 1 1.06 1.06L13.06 12l6.47 6.47c.27.27.3.68.07.98l-.07.08a.75.75 0 0 1-.98.07l-.08-.07L12 13.06l-6.47 6.47a.75.75 0 0 1-1.06-1.06L10.94 12 4.47 5.53a.75.75 0 0 1-.07-.98l.07-.08-.07.08Z",
      "checkMarkRegular" : '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4.53 12.97a.75.75 0 0 0-1.06 1.06l4.5 4.5c.3.3.77.3 1.06 0l11-11a.75.75 0 0 0-1.06-1.06L8.5 16.94l-3.97-3.97Z" fill="currentColor"></path></svg>',
      "chevronRightRegular" : '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.65 4.15c.2-.2.5-.2.7 0l5.49 5.46c.21.22.21.57 0 .78l-5.49 5.46a.5.5 0 0 1-.7-.7L12.8 10 7.65 4.85a.5.5 0 0 1 0-.7Z" fill="currentColor"></path></svg>',
      "chevronDownRegular" : '<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z" fill="currentColor"></path></svg>',
      "folderRegular" : '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 6.25V8h4.63c.2 0 .39-.08.53-.22l1.53-1.53-1.53-1.53a.75.75 0 0 0-.53-.22H5.25c-.97 0-1.75.78-1.75 1.75Zm-1.5 0C2 4.45 3.46 3 5.25 3h2.88c.6 0 1.17.24 1.59.66l1.84 1.84h7.19c1.8 0 3.25 1.46 3.25 3.25v9c0 1.8-1.46 3.25-3.25 3.25H5.25A3.25 3.25 0 0 1 2 17.75V6.25ZM3.5 9.5v8.25c0 .97.78 1.75 1.75 1.75h13.5c.97 0 1.75-.78 1.75-1.75v-9c0-.97-.78-1.75-1.75-1.75h-7.19L9.72 8.84c-.42.42-1 .66-1.6.66H3.5Z" fill="currentColor"></path></svg>',
      "folderOpenRegular" : '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 6.25c0-.97.78-1.75 1.75-1.75h2.88c.2 0 .39.08.53.22l2.06 2.06c.14.14.33.22.53.22h5.5c.97 0 1.75.78 1.75 1.75 0 .09.01.17.04.25H8.72c-1.34 0-2.58.71-3.25 1.87L3.5 14.28V6.25ZM2 17.79A3.25 3.25 0 0 0 5.25 21h11.04c1.33 0 2.57-.72 3.24-1.88l3.03-5.25A3.25 3.25 0 0 0 19.96 9a.75.75 0 0 0 .04-.25c0-1.8-1.45-3.25-3.25-3.25h-5.19L9.72 3.66c-.42-.42-1-.66-1.6-.66H5.26A3.25 3.25 0 0 0 2 6.25V17.79Zm6.72-7.3h11.03a1.75 1.75 0 0 1 1.51 2.63l-3.03 5.25c-.4.7-1.14 1.13-1.95 1.13H5.25a1.75 1.75 0 0 1-1.51-2.63l3.03-5.25c.4-.7 1.14-1.12 1.95-1.12Z" fill="currentColor"></path></svg>',
      "documentTextRegular" : '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M8.75 11.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 2.75a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm4.84-14.41L19.4 8.4A2 2 0 0 1 20 9.83V20a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4c0-1.1.9-2 2-2h6.17a.6.6 0 0 1 .08 0l.06.01c.22.02.43.06.63.14l.16.09c.02 0 .04.02.05.03l.05.02.08.05a2.07 2.07 0 0 1 .3.25ZM18 20.5a.5.5 0 0 0 .5-.5V10H14a2 2 0 0 1-2-2V3.5H6a.5.5 0 0 0-.5.5v16c0 .27.22.5.5.5h12Zm-.62-12L13.5 4.62V8c0 .28.22.5.5.5h3.38Z" fill="currentColor"></path></svg>',
      "tableSettingsRegular" : '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 6.25C3 4.45 4.46 3 6.25 3h11.5C19.55 3 21 4.46 21 6.25v5.77c-.46-.3-.97-.53-1.5-.7V10h-4v1.31c-.53.18-1.04.42-1.5.71V10h-4v4h2.02c-.3.46-.53.97-.7 1.5H10v4h1.31c.18.53.42 1.04.71 1.5H6.25A3.25 3.25 0 0 1 3 17.75V6.25ZM6.25 4.5c-.97 0-1.75.78-1.75 1.75V8.5h4v-4H6.25ZM4.5 10v4h4v-4h-4Zm11-1.5h4V6.25c0-.97-.78-1.75-1.75-1.75H15.5v4Zm-1.5-4h-4v4h4v-4Zm-9.5 11v2.25c0 .97.78 1.75 1.75 1.75H8.5v-4h-4Zm9.78-1.52a2 2 0 0 1-1.44 2.5l-.59.14a5.73 5.73 0 0 0 0 1.8l.55.13a2 2 0 0 1 1.45 2.51l-.19.63c.44.39.94.7 1.49.93l.49-.52a2 2 0 0 1 2.9 0l.5.52a5.28 5.28 0 0 0 1.48-.91l-.2-.69a2 2 0 0 1 1.44-2.5l.59-.14a5.72 5.72 0 0 0 0-1.8l-.55-.13a2 2 0 0 1-1.45-2.51l.19-.63c-.44-.4-.94-.7-1.49-.93l-.49.52a2 2 0 0 1-2.9 0l-.5-.52c-.54.22-1.04.53-1.48.9l.2.7ZM17.5 19c-.8 0-1.45-.67-1.45-1.5S16.7 16 17.5 16c.8 0 1.45.67 1.45 1.5S18.3 19 17.5 19Z" fill="currentColor"></path></svg>',
      "arrowResetRegular" : '<svg fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M6.78 2.72c.3.3.3.77 0 1.06L4.56 6h8.69a7.75 7.75 0 1 1-7.75 7.75.75.75 0 0 1 1.5 0 6.25 6.25 0 1 0 6.25-6.25H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5c.3-.3.77-.3 1.06 0Z" fill="currentColor"></path></svg>'
    },
    
    /**
     * Holds a map containig all the URL to the images.
     * @internal
     */
    URLS :
    {
      "blank" : "qx/static/blank.png",

      // checkbox
      "checkbox-checked" : "decoration/checkbox/checkbox-check.svg",
      "checkbox-brand-checked" : "decoration/checkbox/checkbox-brand-check.svg",
      "checkbox-undetermined" : "decoration/checkbox/undetermined.png",  //Replaced with -- pure Qx -- Decoration entry:: checkbox-undetermined
      "checkbox-checked-disabled" : "decoration/checkbox/checkbox-check-disabled.svg",

      // window
      //"window-minimize" : "decoration/window/minimize.gif", //Replaced with -- pure Qx -- Decoration entry:: window-button-minimize-icon
      //"window-maximize" : "decoration/window/maximize.gif", //Replaced with -- pure Qx -- Decoration entry:: window-button-maximize-icon
      //"window-restore" : "decoration/window/restore.gif", //Replaced with -- pure Qx -- Decoration entry:: window-button-restore
      //"window-close" : "decoration/window/close.gif",
      "window-dismiss" : "decoration/close-24px.svg",

      // cursor
      "cursor-copy" : "decoration/cursor/circle-add.svg",
      //"cursor-move" : "decoration/cursors/move.gif", //Replaced with -- pure Qx --
      "cursor-alias" : "decoration/cursor/alias.svg",
      "cursor-nodrop" : "decoration/cursor/nodrop.svg",

      // arrows
      "arrow-right" : "decoration/arrows/right.gif", //Replaced with -- pure Qx -- Decoration entry:: sqv-css-icon-arrow-right
      "arrow-left" : "decoration/arrows/left.gif", //Replaced with -- pure Qx -- Decoration entry:: sqv-css-icon-arrow-left
      "arrow-up" : "decoration/arrows/up.gif",
      "arrow-down" : "decoration/arrows/down.gif",
      "chevron-down" : "decoration/arrows/chevrondown.svg",
      "arrow-reset" : "decoration/arrows/ArrowResetRegular.svg",
      //"chevron-down" : "data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='" + qx.theme.manager.Color.getInstance().resolve("NeutralStrokeAccessible") + "' d='M15.85 7.65c.2.2.2.5 0 .7l-5.46 5.49a.55.55 0 0 1-.78 0L4.15 8.35a.5.5 0 1 1 .7-.7L10 12.8l5.15-5.16c.2-.2.5-.2.7 0Z'%3E%3C/path%3E%3C/svg%3E",
      //"arrow-forward" : "decoration/arrows/forward.gif", //Replaced by Qx code
      //"arrow-rewind" : "decoration/arrows/rewind.gif", //Replaced by Qx code
      "arrow-down-small" : "decoration/arrows/down-small.gif", //Embed option - Decoration entry:: sqv-css-icon-arrow-down-small
      "arrow-up-small" : "decoration/arrows/up-small.gif",  //Replaced by Decoration entry:: sqv-css-icon-arrow-up-small
      "arrow-up-invert" : "decoration/arrows/up-invert.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-up-invert
      "arrow-down-invert" : "decoration/arrows/down-invert.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-down-invert
      "arrow-right-invert" : "decoration/arrows/right-invert.gif", //Replaced by Decoration entry:: sqv-css-icon-arrow-right-invert

      // slider
      "line" : "decoration/slider/line.png",
      "line-selected" : "decoration/slider/line-selected.png",
      "line-invalid" : "decoration/slider/line-invalid.png",
      
      // split pane
      //"knob-horizontal" : "decoration/splitpane/knob-horizontal.png", //Replaced by pure Qx
      //"knob-vertical" : "decoration/splitpane/knob-vertical.png", // Replaced by pure Qx

      // tree
      "tree-folder" : "decoration/tree/folder.svg",
      "tree-folder-open" : "decoration/tree/folder-open.svg",
      "tree-file" : "decoration/tree/file.svg",
      //"tree-minus" : "decoration/tree/minus.gif", //Replaced
      //"tree-plus" : "decoration/tree/plus.gif", //Replaced

      // table
      "table-column-settings" : "decoration/table/TableSettingsRegular.svg",
      //"select-column-order" : "decoration/table/select-column-order.png", //Replaced by pure Qx
      //"table-ascending" : "decoration/table/ascending.png",  //Not used
      //"table-descending" : "decoration/table/descending.png", //Not used

	    // tree virtual
	    "tree-minus" : "decoration/treevirtual/minus.gif",
      "tree-plus" : "decoration/treevirtual/plus.gif",
      "treevirtual-line" : "decoration/treevirtual/line.gif",
      "treevirtual-minus-only" : "decoration/treevirtual/only_minus.gif",
      "treevirtual-plus-only" : "decoration/treevirtual/only_plus.gif",
      "treevirtual-minus-start" : "decoration/treevirtual/start_minus.gif",
      "treevirtual-plus-start" : "decoration/treevirtual/start_plus.gif",
      "treevirtual-minus-end" : "decoration/treevirtual/end_minus.gif",
      "treevirtual-plus-end" : "decoration/treevirtual/end_plus.gif",
      "treevirtual-minus-cross" : "decoration/treevirtual/cross_minus.gif",
      "treevirtual-plus-cross" : "decoration/treevirtual/cross_plus.gif",
      "treevirtual-end" : "decoration/treevirtual/end.gif",
      "treevirtual-cross" : "decoration/treevirtual/cross.gif",

      // menu
      //"menu-checkbox" : "decoration/menu/checkbox.gif", //Replaced with Qx + CSS
      //"menu-checkbox-invert" : "decoration/menu/checkbox-invert.gif", //Replaced with Qx + CSS
      //"menu-radiobutton-invert" : "decoration/menu/radiobutton-invert.gif", //Replaced with Qx + CSS
      //"menu-radiobutton" : "decoration/menu/radiobutton.gif", //Replaced with pure Qx

      // tabview
      "tabview-close" : "decoration/tabview/close.svg",
      "tabview-close-hovered" : "decoration/tabview/close-hovered.svg"
    }
  }
});
