require.config( {
   // baseUrl:"/www_test4/",
   paths: {
      zepto: '../lib/jquery/zepto',
      underscore: '../lib/underscore/underscore-min',
      parse: "../lib/parse/parse-1.2.7.min",
      text: '../lib/require/text-1.0.6',
      async: '../lib/require/async',
      handlebars: '../lib/handlebars/handlebars',
      my_parse: '../lib/customLib/my_parse',
      /*models-collections-template base paths*/
      tpl: '../templates',
      models: '../js/models',
      collections: '../js/collections',
      /*views bare paths*/
      wall: '../js/views/wall',
      topbar: '../js/views/topbar',
      search: '../js/views/search',
      product: '../js/views/product'

   },
   shim: {
      'zepto': {
         exports: '$'
      },
      'underscore': {
         exports: '_'
      },
      'parse': {
          deps: ['zepto', 'underscore'],
          exports: 'Parse'

      },
      'handlebars': {
         exports: 'Handlebars'
      }
   }
} );

// We launch the App
require(['underscore', 'parse', 'router'],
    function (_, Parse, AppRouter) {


              document.addEventListener( "deviceready", run, false );
        

           function run() {
              Parse.initialize("MlOeVbLAzAwo33O2TIpNpgeueavgtV2cffZC5Lez", "javascriptKey");
              new AppRouter();
              Parse.history.start();
           }
        } );
