define(["zepto", "underscore", "parse", "handlebars",
   "text!tpl/top_bar_tpl.html"],
        function($, _, Parse, Handlebars, template) {

           var TopBar = Parse.View.extend({
              events:{
                'touchend .back' : 'goBack',
                'touchend .search-lens' : 'goOnSearchView',
                'touchend .settings' : 'goOnSettingsView'
              },
   
              className: "top_bar",
              tagName: "section",
              
              template: Handlebars.compile(template),
              
              initialize: function() {
                 
                 if(!this.model)
                    this.model=new Parse.Object();
                 this.render();
              },
              render: function() {
                 $(this.el).html(this.template(this.model.toJSON()));
                 return this;
              },
              goOnSearchView: function(e) {
                 e.preventDefault();
                 e.stopPropagation();
                 Parse.history.navigate('search',{trigger:true});
              },
              goOnSettingsView: function(e) {
                 e.preventDefault();
                 e.stopPropagation();
                 Parse.history.navigate('settings',{trigger:true});
              },
              goBack: function(e) {
                 e.preventDefault();
                 e.stopPropagation();
                
              }

           });

           return TopBar;

        });