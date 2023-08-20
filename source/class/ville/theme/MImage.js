qx.Mixin.define("ville.theme.MImage",
{

  properties: {
    /** Any text string which can contain HTML, too */
    html: {
      check: "String",
      apply: "_applyHtml",
      event: "changeHtml",
      themeable: true,
      nullable: true
    },

    /** Any text string which can contain HTML, too */
    svgIcon: {
      check: "String",
      apply: "_applySvgIcon",
      event: "changeSvgIcon",
      themeable: true,
      nullable: true
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
      init: "regular",
      apply: "_applyIconStyle",
      event: "changeIconStyle",
      nullable : true,
      themeable : true
    }
  },
  
  members :
  {
    _svgregular : null,

    _svgfilled : null,
    
    _pathit (pathd)
    {
      return `
       <path d="${pathd}"></path>`
    },

    _svgit (pathtags)
    {
      var viewbox = this.getViewBox();
      return `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewbox}" fill="currentColor">
       ${pathtags}
      </svg>`
    },
    
    // overridden
    _applyTextColor(value) {
        var el = this.getContentElement();
        if (this.__wrapper) {
            el = el.getChild(0);
        }

        if (value) {
        el.setStyle(
            "color",
            qx.theme.manager.Color.getInstance().resolve(value)
        );
        } else {
            el.removeStyle("color");
        }
    },

    // property apply
    _applyHtml(value, old) {
      var elem = this.getContentElement();
      // Workaround for http://bugzilla.qooxdoo.org/show_bug.cgi?id=7679
      if (
        qx.core.Environment.get("engine.name") == "mshtml" &&
        qx.core.Environment.get("browser.documentmode") == 9
      ) {
        elem.setStyle("position", "relative");
      }

      // Insert HTML content
      elem.setAttribute("html", value || "");
    },

    // property apply
    _applyIconStyle(value, old) {
      if (this._svgregular != null) {
        var elem = this.getContentElement();
        if (value == "regular")
          elem.setAttribute("html", this._svgregular);
        else if (value == "filled" & this._svgfilled != null)
          elem.setAttribute("html", this._svgfilled);  
        else
          elem.setAttribute("html", this._svgregular);
      }
    },

    // property apply
    _applySvgIcon(value, old) {
      //prep regular
      //this._svgregular = this._svgit(this._pathit(value[0]));

      //prep filled if included
      //if (value[1])
        //this._svgfilled = this.svgit(this.pathit(value[1]));

      // Insert HTML content
      //elem.setAttribute("html", value || "");
      this.setHtml(this._svgit(this._pathit(value)));
    }
  }
  
});