/* ************************************************************************
   SQville
   Authors:
     * Chris Eskew (sqville) sqville@gmail.com
************************************************************************ */

/**
 * @childControl embed {qx.ui.embed.Html} inline icon of the widget
 */
qx.Mixin.define("ville.wax.MMenuButtonEmbed",
{
  properties :
  {
  	/** Control the text alignment */
    iconProps :
    {
      check : "Map",
      nullable : true,
      themeable : true,
      apply : "_applyIconProps"
    },

    /** Control the text alignment */
    embed :
    {
      check : "Object",
      nullable : true,
      themeable : true,
      apply : "_applyEmbed"
    },

    embedProps :
    {
      check : "Map",
      nullable : true,
      themeable : true,
      apply : "_applyEmbedProps"
    }
  	
  },
  
  members :
  {
  	
  	// property apply
    _applyIconProps (value, old) 
    {
      this.getChildControl("icon").set(value);
    },

    // property apply
    _applyEmbedProps (value, old) 
    {
      if (this.getEmbed() != null) {
        this.getEmbed().set(value);
      }
    },

    // property apply
    _applyEmbed (value, old) 
    {
      value.setAnonymous(true);
      this._add(value, { column: 0 });
      if (this.getIcon() != null) {
        value.exclude();
      }
    }
  }
});
