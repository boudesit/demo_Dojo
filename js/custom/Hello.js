//dojo_basedeclare and dijitDialog are loaded from CDN
define([ "dojo/_base/declare", "dijit/Dialog", "custom/customButton" ], function(declare, Dialog, customButton){
//  declare our custom class

var b = new customButton(

    label: "Click me!",
    onClick: function(){
        // Do something:
        dom.byId("greeting").innerHTML += " Thank you! ";
    }, "progButtonNode");

   return dojo.declare(dijit.Dialog, {
     title: "Hi",
     content: b
   });
});
