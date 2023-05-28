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
 * Milliseconds (ms)
 */
qx.Class.define("ville.global.duration",
{
  type: "static",

  statics :
  {    
    UltraFast: "50ms",
    Faster: "100ms",
    Fast: "150ms",
    Normal: "200ms",
    Slow: "300ms",
    Slower: "400ms",
    UltraSlow: "500ms"
  }
});
