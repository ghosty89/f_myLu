/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var req = new XMLHttpRequest();
req.open("POST", "https://api.parse.com/1/classes/product", true);
req.setRequestHeader("X-Parse-Application-Id", "MlOeVbLAzAwo33O2TIpNpgeueavgtV2cffZC5Lez");
req.setRequestHeader("X-Parse-REST-API-Key", "AghaIGlrq6QbSEB6x7jWrUqXSQA9AYREu2ufMoTq");
req.setRequestHeader("Content-Type", "application/json");
req.send(JSON.stringify({name: "Roberta", role: "Cozza di scoglio"}));