define([ "dojo/_base/declare", "dijit/form/Button"], function(declare, Button){
    ready(function(){
        return dojo.declare(dijit.form.Button, {
          label: "Click me!"
        });
    });
