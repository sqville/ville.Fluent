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
    }
  },
  
  members :
  {
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
    }
  }
  
});