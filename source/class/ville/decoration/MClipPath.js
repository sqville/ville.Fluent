/* ************************************************************************

   SQville

   License:
     MIT

   Authors:
     * Chris Eskew (sqville)

************************************************************************ */
/**
 * Mixin responsible for setting the clip-path of a widget.
 * This mixin is usually used by {@link ville.decoration.Decorator}.
 */
qx.Mixin.define("ville.decoration.MClipPath", {
    properties: {
      /** Color of the background */
      clipPath: {
        check: "String",
        nullable: true,
        apply: "_applyClipPath"
      }
    },
  
    members: {
      /**
       * Adds the clip-path style to the given map
       * @param styles {Map} CSS style map
       */
      _styleClipPath(styles) {
        var clippath = this.getClipPath();
  
        if (clippath) {
          styles["clip-path"] = clippath;
        }
      },
  
      // property apply
      _applyClipPath() {
        if (qx.core.Environment.get("qx.debug")) {
          if (this._isInitialized()) {
            throw new Error(
              "This decorator is already in-use. Modification is not possible anymore!"
            );
          }
        }
      }
    }
  });