/* ************************************************************************

SQville

   License:
     MIT: https://opensource.org/licenses/MIT
     See the LICENSE file in the project's top-level directory for details.

   Authors:
     * Chris Eskew (sqville) sqville@gmail.com

************************************************************************ */

/**
 * NOTE: Instances of this class must be disposed of after use
 *
 */
 qx.Class.define("ville.wax.icons.CutRegular",
 {
   extend : ville.wax.icons.Abstract,

   construct ()
   {
    super();
    var pathd = "M5.92 2.23a.5.5 0 0 0-.84.54L9.4 9.43l-1.92 2.96a3 3 0 1 0 .78.64L10 10.35l1.74 2.68a3 3 0 1 0 .78-.64L5.92 2.23ZM14 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7.2-6.49-.6-.92 3.48-5.36a.5.5 0 0 1 .84.54l-3.73 5.74Z";
    this.setHtml(this.svgit(this.pathit(pathd)));
  }
 });