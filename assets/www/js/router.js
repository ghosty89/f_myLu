define(
        ["zepto",
            "underscore",
            "parse",
            "wall/wrapper",
            "search/wrapper",
            "product/wrapper"],
        function($, _, Parse, WallWrap, SearchWrap, ProdWrap) {

            var AppRouter = Parse.Router.extend({
                routes: {
                    "": "t_main",
                    "search": "search",
                    "settings": "settings",
                    "product": "product"

                },
                t_main: function() {
                    var page = new WallWrap({el: $('body')});
                },
                search: function() {
                    var page = new SearchWrap({el: $('body')});
                },
                settings: function() {
                    console.log("jamo! carica ssa view!! quela pe ji settings");
                },
                product: function() {
                    var page = new ProdWrap({el: $('body')});
                }
            });

            return AppRouter;

        });
