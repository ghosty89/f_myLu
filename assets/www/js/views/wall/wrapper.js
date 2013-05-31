define( ["zepto", "underscore", "parse", "wall/ProdListView", "topbar/TopBarView"],
        function( $, _, Parse, ContentView, TopBarView ) {

           var Wrap = Parse.View.extend( {
              events: {
                 /* mappare gli eventi swipe tra le bacheche*/
              },
             
              initialize: function() {
                 this.render();
              },
              render: function() {
                 var topbar = new TopBarView();
                 var cont = new ContentView();
                 $(cont.el).addClass("container");
                 
                  $(this.el).html( $(topbar.el) );
                  $(this.el).append( $(cont.el) );

                 return this;
              }
             
           } );

           return Wrap;

        } );