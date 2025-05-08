sap.ui.define([
	"sap/ui/core/mvc/XMLView"
], (XMLView) => {
	"use strict";

	XMLView.create({
		viewName: "ui5.walkthrough.view.Documento"
	}).then((oView) => oView.placeAt("content"));
});
