(function(){
  'use strict';
  
  var app = (function () {
    
    var data = {
      overlay: null,
      img: null,
      list: null
    };

    function init () {
      data.list = document.querySelector('.img-list');


      data.overlay = document.createElement('div');
      data.overlay.setAttribute('class', 'overlay');
      data.overlay.width = window.innerWidth + 'px';
      data.overlay.height = window.innerHeight + 'px';
      console.log(data);
    }

    function action () {
      document.addEventListener('resize', function () {
        if(data.overlay) {
          data.overlay.width =  document.documentElement.clientWidth + 'px';
          data.overlay.height =  document.documentElement.clientHeight + 'px'; 
        }
      }, false);

      data.list.addEventListener('click', function (evt) {
        if(evt.target.tagName === 'IMG') {
          
        }
      }, false);
    }

    /**
     * find last element in and if it's SCRIPT tag
     * if goes up and if there are stack of SCRIPT elements, it append passed 
     * element before first SCRIPT element
     */
    
    function appendBeforeLastScript (overlay) {
      
      var lastElement = document.body.lastElementChild;
      while(lastElement.tagName === 'SCRIPT') {
        lastElement = lastElement.previousSibling;
      }
      lastElement = lastElement.nextSibling;
      document.body.insertBefore(data.overlay, lastElement);
    }



    return {
      'init' : init
    };
  }());

  app.init();
}());