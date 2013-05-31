define(["zepto", "underscore", "parse"],
        function($, _, Parse) {
           var ProductModel = Parse.Object.extend("Product",{
              defaults: {
                 name: undefined,
                 price: 0,
                 more: undefined
              }
           });
           return ProductModel;
        });