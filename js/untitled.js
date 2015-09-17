(function(){
  'use strict';
  
  var app = function () {
    
    var data = {
      overlay: null,
      img: null,
      list: null
    };

    function init () {
      data.overlay = document.createElement('div');
      data.overlay.setAttribute('class', 'overlay');
      data.overlay.width = window.innerWidth + 'px';
      data.overlay.height = window.innerHeight + 'px';
      document.body.appendChild(data.overlay);

    }

    function action () {
      window.addEventListener('resize', function () {
        if(data.overlay) {
          data.overlay.width = window.innerWidth + 'px';
          data.overlay.height = window.innerHeight + 'px'; 
        }
      }, false);
    }



    return {
      'init' : 'init'
    };
  };

  app.init();
}());