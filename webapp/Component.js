sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel"
  ], function (UIComponent, JSONModel) {
    "use strict";
  
    return UIComponent.extend("ui5.walkthrough.Component", {
      metadata: {
        manifest: "json"
      },
  
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
  
        // Load custom CSS
        sap.ui.core.includeStyleSheet(sap.ui.require.toUrl("ui5/walkthrough/css/style.css"));
  
        // Example: Set global model
        const oModel = new JSONModel({}); 
        this.setModel(oModel);
      }
    });
  });
  