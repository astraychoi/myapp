/*
require(["plugins/jquery.min"],function(util){
    console.log(111);
});
*/

require.config({
    baseUrl: '',
    paths: {
        jquery: 'js/plugins/jquery.min'
    },
    shim: {
        jquery: {
            exports: '$'
        }
    }
});