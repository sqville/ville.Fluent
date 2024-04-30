qx.Mixin.define("ville.theme.MTabView",
{  
  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
 
  properties :
  {
    dynamicMarkEnabled :
    {
      check : "Boolean",
      init : true,
      themeable : true,
      apply : "_applyDynamicMarkEnabled"
    },
    
    dynamicMark :
    {
      check : "qx.ui.core.Widget",
      apply : "_applyDynamicMark"
    },

    dynamicMarkAnimationDuration :
    {
      check : "Integer",
      init : 300,
      themeable : true
    },

    dynamicMarkAnimationTiming :
    {
      check : "String",
      init : "ease",
      themeable : true
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
    _applyDynamicMarkEnabled : function(value, old) {
      var children, i, l;
      if (value && this.getBarPosition() == 'top') {
        var tabviewbarline = new qx.ui.core.Widget().set({
          appearance : "tabview-dynamic-widget"
        });
        this.setDynamicMark(tabviewbarline);
        this.addState("dynamicMark");
        //pass state to children
        children = this.getChildren();
        for (i = 0, l = children.length; i < l; i++) {
          children[i].getButton().addState("dynamicMark");
        }
      } else {
        this.removeState("dynamicMark");
        children = this.getChildren();
        for (i = 0, l = children.length; i < l; i++) {
          children[i].getButton().removeState("dynamicMark");
        }
      }
    },
    
    // property apply
    _applyDynamicMark : function(value, old) {
      // TODO: add but exclude from sizing of the bar
      this.getChildControl("bar").add(value); 

      this.addListener("changeSelection", (e) => {
        if (e.getData().length && e.getOldData().length) {
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
        }
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