qx.Mixin.define("ville.theme.MMenu",
{
  construct : function()
  {
    this.addListener("appear", function() {
      var menubounds = this.getBounds(); 
      var ptopstart = menubounds.top;
      var plftstart = menubounds.left;

      var popupup = this.getOpenAnimation();

      if (this.hasState("submenu")) {
        var rtlftoffset = this.getHorizontalAnimationOffset();

        if (plftstart > this.getOpener().getContentLocation().left)
          rtlftoffset = -Math.abs(rtlftoffset);

        popupup.keyFrames = {
          0: {translate: [rtlftoffset + "px", null], opacity: 0},
          100: {translate: ["0px", null], opacity: 1}
        };

        qx.bom.element.AnimationCss.animate(this.getContentElement().getDomElement(), popupup);

      } else {
        if (this.getOpener()) {
          var updnoffset = this.getVerticalAnimationOffset();

          if (ptopstart > this.getOpener().getContentLocation().top)
            updnoffset = -Math.abs(updnoffset);
  
          popupup.keyFrames = {
            0: {translate: [null, updnoffset + "px"], opacity: 0},
            100: {translate: [null, "0px"], opacity: 1}
          };

          qx.bom.element.AnimationCss.animate(this.getContentElement().getDomElement(), popupup);
          
        }
      }
    });
  },

  properties :
  {
    openAnimation :
    {
      check : "Map",
      themeable: true
    },

    verticalAnimationOffset :
    {
      check : "Integer",
      themeable: true
    },

    horizontalAnimationOffset :
    {
      check : "Integer",
      themeable: true
    }
  }
});