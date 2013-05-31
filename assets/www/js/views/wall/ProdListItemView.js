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
                 Parse.history.navigate("product/" + this.model.cid, {trigger: true});
                 console.log("ehi you guyz! don't touch da butt! " + this.cid);
                 this.model.set({name: "il model che hai cambiato è il " + this.model.cid});
              }
           });

           return SingleProdListItem;

        });