define(['jquery'],function($){
    var initHome={
        init:function(){
            initHome.abc();
        },

        abc:function(){
            $("body").html('haha');
        }
    }

    return {
        initHome:initHome.init
    }
})