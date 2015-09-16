(function(){
  'use strict';
  
  var app = function() {
    
    var list = document.querySelector('.img-list');
    console.log(list);
    

    function init() {
      list.addEventListener('click', function (e) {
        console.log(e);
      }, false);
    }

    return {
      init: init
    };

  }();

  app.init();
}());
