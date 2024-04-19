/* ************************************************************************
   SQville
   Authors:
     * Chris Eskew (sqville) sqville@gmail.com
************************************************************************ */


/**
 * A mixin that enables the font property, and thus, font handling abilities to the Image object
 * This mixin is needed to enable font icons to show up using the Font object
 * @childControl embed {qx.ui.embed.Html} inline icon of the widget
 */
qx.Mixin.define("ville.wax.MEmbed",
{
    
  /*
  *****************************************************************************
     PROPERTIES
  *****************************************************************************
  */
 
  properties :
  {
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

  /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */
  members :
  {
    // property apply
    _applyEmbedProps (value, old) 
    {
      this.getEmbed().set(value);
    },

    // property apply
    _applyEmbed (value, old) 
    {
      value.setAnonymous(true);
      this._addAt(value, 0);
      if (this.getIcon() != null) {
        value.exclude();
      }
    }
  }
});
