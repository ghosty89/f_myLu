define(["zepto", "underscore", "parse", "handlebars", "text!tpl/prod_list_tpl.html", 
            "models/ProductModel", "collections/ProductList","wall/ProdListItemView"],
        function($, _, Parse, Handlebars, template, ProductModel, ProductList, ProdListItemView) {

           var ProdListItem = Parse.View.extend({
              
              className: "prod_list_item",
              tagName: "ul",
              template: Handlebars.compile(template),
              initialize: function() {

                 this.model = new ProductList([
                    new ProductModel({
                       name: "prod1",
                       price: 65.02
                    }),
                    new ProductModel({
                       name: "prod2",
                       price: 71.99
                    }),
                    new ProductModel({
                       name: "prod3",
                       price: 14.99
                    }),
                    new ProductModel({
                       name: "prod4",
                       price: 99.99
                    }),
                    new ProductModel({
                       name: "prod5",
                       price: 129.01
                    }),
                    new ProductModel({
                       name: "prod6",
                       price: 65.99
                    }),
                    new ProductModel({
                       name: "prod7",
                       price: 452.01
                    }),
                    new ProductModel({
                       name: "prod8",
                       price: 15.01
                    })
                 ]);
                 
                 this.render();
              },
              render: function() {
                 var html_fragment = $(this.el);
                 for (var i = 0; i < this.model.models.length; i++)
                 {
                    
                    var aux = new ProdListItemView({
                       model : this.model.models[i]
                    });
                    
                    html_fragment.append(aux.el);
                 }
                 return this;

              }
           });

           return ProdListItem;

        });