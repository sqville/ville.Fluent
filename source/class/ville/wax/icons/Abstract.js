/* ************************************************************************

   Ville Software (SQville)

   Copyright: 2021 sqville

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (sqville) chris.eskew@sqville.com

************************************************************************ */

/**
 * NOTE: Instances of this class must be disposed of after use
 *
 */
 qx.Class.define("ville.wax.icons.Abstract",
 {
   extend : qx.ui.embed.Html,
 
   construct ()
   {
    super();
   },

   properties :
  {
    // overridden
    appearance: 
    {
      refine: true,
      init: "icon"
    },
    
    viewBox :
    {
      check : "String",
      init : "0 0 20 20",
      themeable : true
    },

    iconStyle :
    {
      check : ["regular", "filled"],
      nullable : true,
      init: "regular"
    },
  	
  },

   members :
   {
    pathit (pathd)
    {
      return `
       <path d="${pathd}"></path>`
    },

    svgit (pathtags)
    {
      var viewbox = this.getViewBox();
      return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewbox}" fill="currentColor">
       ${pathtags}
      </svg>`
    }
   }
 });