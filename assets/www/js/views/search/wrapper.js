define( ["zepto", "underscore", "parse", "topbar/TopBarView"],
        function( $, _, Parse, TopBarView ) {

           var Wrap = Parse.View.extend( {
              events: {
                 /* mappare gli eventi swipe tra le bacheche*/
              },
             
              initialize: function() {
                 this.render();
              },
              render: function() {
                 var topbar = new TopBarView();
                 
                 /*var cont = new ContentView();
                 $(cont.el).addClass("container");
                 */
                  $(this.el).html( $(topbar.el) );
                  $(this.el).append( "<section class='container' style='text-align:center;color:green'><h1><p>This will be our</p><p>SearchView</p></h1></section>" );

                 return this;
              }
           } );

           return Wrap;

        } );