qx.Mixin.define("ville.theme.MMenu",
{
  construct : function()
  {
    this.addListener("appear", function() {
      var menubounds = this.getBounds(); 
      var ptopstart = menubounds.top;
      var plftstart = menubounds.left;

      var popupup = {
        duration: parseInt(ville.global.duration.Slower.slice(0,-2)), 
        timing: ville.global.curve.DecelerateMid,
        keep : 100
      };

      if (this.hasState("submenu")) {
        var rtlftoffset = this.getHorizontalAnimationOffset();
        if (plftstart < this.getOpener().getContentLocation().left)
          plftstart += rtlftoffset;
        else
          plftstart -= rtlftoffset;
      
        popupup.keyFrames = {
          0: {left: plftstart + "px", opacity: 0},
          100: {left: menubounds.left + "px", opacity: 1}
        };

      } else {
        var updnoffset = this.getVerticalAnimationOffset();
        if (ptopstart < this.getOpener().getContentLocation().top)
          ptopstart += updnoffset;
        else
          ptopstart -= updnoffset;
          
        popupup.keyFrames = {
            0: {top: ptopstart + "px", opacity: 0},
            100: {top: menubounds.top + "px", opacity: 1}
          };
      }
      
      qx.bom.element.AnimationCss.animate(this.getContentElement().getDomElement(), popupup);
    });
  },

  properties :
  {
    verticalAnimationOffset :
    {
      check : "Integer",
      init : 16,
      themeable: true
    },

    horizontalAnimationOffset :
    {
      check : "Integer",
      init : 16,
      themeable: true
    }
  }
});