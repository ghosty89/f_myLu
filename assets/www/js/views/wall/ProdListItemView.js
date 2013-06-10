define(["zepto", "underscore", "parse", "handlebars",
   "text!tpl/prod_list_tpl.html", "models/ProductModel"],
        function($, _, Parse, Handlebars, template, ProductModel) {
           function onModelChange() {
              console.log('something changes');
              this.render();
           }
           var SingleProdListItem = Parse.View.extend({
              events: {
                 'touchend .mybutton': 'buttonPressed'
              },
              className: "single_prod_list_item",
              tagName: "li",
              template: Handlebars.compile(template),
              initialize: function() {
                 this.model.on('change', onModelChange, this);
                 this.render();
              },
              render: function() {
                 $(this.el).html(this.template(this.model.toJSON()));
                 return this;
              },
              buttonPressed: function(e) {
                 e.preventDefault();
                 console.log(this.cid);
                 context_model=this.model;
                 console.log(context_model);
                 Parse.history.navigate("product", {trigger: true});
                 console.log("ehi you guyz! don't touch da butt! " + this.cid);
              }
           });

           return SingleProdListItem;

        });