//dojo_basedeclare and dijitDialog are loaded from CDN
define([ "dojo_basedeclare", "dijitDialog" ], function(declare, Dialog){
//  declare our custom class
   return dojo.declare(dijit.Dialog, {
     title: "Hi"
   });
});
