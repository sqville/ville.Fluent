/* ************************************************************************

   SQville 

   Copyright:
     None

   License:
     MIT

   Authors:
     * Chris Eskew (sqville@gmail.com)

************************************************************************ */
/* ************************************************************************


************************************************************************* */
/**
 * Mapping class for all images used in the fluent theme.
 */
qx.Class.define("ville.global.curve",
{
  type: "static",

  statics :
  {    
    AccelerateMax: 'cubic-bezier(1,0,1,1)',
    AccelerateMid: 'cubic-bezier(0.7,0,1,0.5)',
    AccelerateMin: 'cubic-bezier(0.8,0,1,1)',
    DecelerateMax: 'cubic-bezier(0,0,0,1)',
    DecelerateMid: 'cubic-bezier(0.1,0.9,0.2,1)',
    DecelerateMin: 'cubic-bezier(0.33,0,0.1,1)',
    EasyEaseMax: 'cubic-bezier(0.8,0,0.1,1)',
    EasyEase: 'cubic-bezier(0.33,0,0.67,1)',
    Linear: 'cubic-bezier(0,0,1,1)'
  }
});
