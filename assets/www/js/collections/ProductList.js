define(["zepto", "underscore", "parse", "models/ProductModel"],
    function ($, _, Parse, ProductModel) {

    var ProductList = Parse.Collection.extend({
        model: ProductModel
      });

    return ProductList;

  });