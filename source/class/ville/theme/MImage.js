qx.Mixin.define("ville.theme.MImage",
{

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
  }
  
});