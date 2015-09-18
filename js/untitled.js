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
      data.overlay.style.width = window.innerWidth + 'px';
      data.overlay.style.height = window.innerHeight + 'px';

      action();
      console.log(data);
    }

    function action () {
      window.addEventListener('resize', function (evt) {
        console.log(evt);
        if(data.overlay) {
          data.overlay.style.width =  document.documentElement.clientWidth + 'px';
          data.overlay.style.height =  document.documentElement.clientHeight + 'px'; 
        }
      }, false);

      data.list.addEventListener('click', function (evt) {
        if(evt.target.tagName === 'IMG') {
          console.log(evt);
          appendBeforeLastScript(data.overlay);
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
      /**
       * if last element is SCRIPT we check previous siblings 
       * and if they are not SCRIPT elements, we insert our 
       * element just above it
       */
      
      if(lastElement.tagName === 'SCRIPT') {
        while(lastElement.tagName === 'SCRIPT') {
          lastElement = lastElement.previousElementSibling;
        }
        lastElement = lastElement.nextElementSibling;
        document.body.insertBefore(data.overlay, lastElement);
      } else {
        document.body.appendChild(overlay);
      }    
      
    }



    return {
      'init' : init
    };
  }());

  app.init();
}());