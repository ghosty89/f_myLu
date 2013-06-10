define(["zepto", "underscore", "parse", "handlebars", "text!tpl/prod_tpl.html", 
            "models/ProductModel", "collections/ProductList","wall/ProdListItemView"],
        function($, _, Parse, Handlebars, template, ProductModel, ProductList, ProdListItemView) {

           var ProdListItem = Parse.View.extend({
              
              className: "prod_item",
              tagName: "div",
              template: Handlebars.compile(template),
              initialize: function() {
                 this.model =context_model;
                 
                 this.render();
              },
              render: function() {
                 $(this.el).html(this.template(this.model.toJSON()));                 
                 return this;

              }
           });

           return ProdListItem;

        });