qx.Mixin.define("ville.wax.MTabView",
{  
  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
 
  properties :
  {
    dynamicMark :
    {
      check : "qx.ui.core.Widget",
      apply : "_applyDynamicMark"
    },

    dynamicMarkAnimationDuration :
    {
      check : "Integer",
      init : 300
    },

    dynamicMarkAnimationTiming :
    {
      check : "String",
      init : "ease"
    }
  
  },

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

  members :
  {
    // property apply
    _applyDynamicMark : function(value, old) {
      this.getChildControl("bar").add(value); 

      this.addListener("changeSelection", (e) => {
        var oldbounds = e.getOldData()[0].getButton().getBounds();
        var newbounds = e.getData()[0].getButton().getBounds();
        var tbvmarkdom = value.getContentElement().getDomElement();
        var oldtop = oldbounds.top + oldbounds.height - value.getHeight();
        var newtop = newbounds.top + newbounds.height - value.getHeight();
        var tabviewbarmarkmove = {
          duration: this.getDynamicMarkAnimationDuration(),
          timing: this.getDynamicMarkAnimationTiming(),  
          keyFrames : {
            0: {"left": oldbounds.left + "px", "top": oldtop + "px", "width": oldbounds.width + "px"},
            100: {"left": newbounds.left + "px", "top": newtop + "px", "width": newbounds.width + "px"}
          },
          keep : 100
        };
        qx.bom.element.AnimationCss.animate(tbvmarkdom, tabviewbarmarkmove);
      }); 

      this.addListenerOnce("appear", function() {
        var movetobounds = this.getSelection()[0].getButton().getBounds();
        value.getContentElement().setStyles({
          "left": movetobounds.left + "px", 
          "top": movetobounds.top + movetobounds.height - value.getHeight() + "px", 
          "width": movetobounds.width + "px", 
          "height": value.getHeight() + "px"
        });
      });
    }
  }
});