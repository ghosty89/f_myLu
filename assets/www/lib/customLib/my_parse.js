define( ["zepto"],
        function( $ ) {

           var obj = {};

           obj.parse_get_class = function( q_class, ok, nok ) {
              $.ajax( {
                 type: 'GET',
                 url: "https://api.parse.com/1/classes/" + q_class,
                 headers: {
                    "X-Parse-Application-Id": "MlOeVbLAzAwo33O2TIpNpgeueavgtV2cffZC5Lez",
                    "X-Parse-REST-API-Key": "AghaIGlrq6QbSEB6x7jWrUqXSQA9AYREu2ufMoTq"
                 },
                 success: ok,
                 error: nok,
                 async: false
              } );
           };
           obj.parse_get_entry = function( q_id, q_class, ok, nok ) {
              $.ajax( {
                 type: 'GET',
                 url: "https://api.parse.com/1/classes/".concat( q_class !== null ? q_class.
                         concat( q_id !== null ? "/" + q_id : "" ) : "" ),
                 headers: {
                    "X-Parse-Application-Id": "MlOeVbLAzAwo33O2TIpNpgeueavgtV2cffZC5Lez",
                    "X-Parse-REST-API-Key": "AghaIGlrq6QbSEB6x7jWrUqXSQA9AYREu2ufMoTq"
                 },
                 success: ok,
                 error: nok,
                 async: false
              } );
           };

           return obj;
        } );