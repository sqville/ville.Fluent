/* ************************************************************************

SQville

   Authors:
     * Chris Eskew (sqville) sqville@gmail.com

************************************************************************ */

 qx.Class.define("ville.wax.icons.Cut",
 {
   extend : ville.wax.icons.Abstract,

   construct (iconstyle)
   {
    super();

    if (iconstyle != null) {
      this.setIconStyle(iconstyle);
    }

    var pathd = "M5.92 2.23a.5.5 0 0 0-.84.54L9.4 9.43l-1.92 2.96a3 3 0 1 0 .78.64L10 10.35l1.74 2.68a3 3 0 1 0 .78-.64L5.92 2.23ZM14 17a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4 15a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm7.2-6.49-.6-.92 3.48-5.36a.5.5 0 0 1 .84.54l-3.73 5.74Z";
    var pathdfilled = "M7.83 2.44a1 1 0 0 0-1.66 1.12l4.8 7.11-2.33 3.68A3.99 3.99 0 0 0 3 18a4 4 0 1 0 7.2-2.4l1.98-3.12 1.89 2.8A3.99 3.99 0 0 0 17 22a4 4 0 1 0-1.25-7.8l-3.62-5.38-4.3-6.38ZM5 18a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm10 0a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm-.48-9.21 3.33-5.26a1 1 0 0 0-1.7-1.07L13.3 6.98l1.22 1.81Z";
    this.setHtml(this.svgit(this.pathit(pathd)));
  }
 });