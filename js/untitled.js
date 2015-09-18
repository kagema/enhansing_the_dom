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

    }

    function action () {
      window.addEventListener('resize', function (evt) {
        if(data.overlay) {
          data.overlay.style.width =  document.documentElement.clientWidth + 'px';
          data.overlay.style.height =  document.documentElement.clientHeight + 'px';

          centerElement(data.img); 
        }
      }, false);

      data.list.addEventListener('click', function (evt) {
        if(evt.target.tagName === 'IMG') {
          var imgSrc = evt.target.getAttribute('src');
          data.img = document.createElement('img');
          data.img.setAttribute('src', imgSrc);

          data.img.addEventListener('load', function (evt) {
            centerElement(data.img);
            data.overlay.appendChild(data.img);
          }, false);

          
          appendBeforeFirstScript(data.overlay);

        }
      }, false);

      data.overlay.addEventListener('click', function (evt) {
        this.parentElement.removeChild(this);
        this.removeChild(data.img);
      }, false);
    }

    /**
     * find last element in and if it's SCRIPT tag
     * if goes up and if there are stack of SCRIPT elements, it append passed 
     * element before first SCRIPT element
     */
    
    function appendBeforeFirstScript (overlay) {

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

    function centerElement (elem) {
      console.log('privet', elem.width, document.documentElement.clientHeight);
      if(elem.width > document.documentElement.clientWidth) {
        console.log('width');
        elem.ratio = document.documentElement.clientWidth / elem.width;
        elem.width *= elem.ratio;
        elem.height *= elem.ratio;
      }

      if(elem.height > document.documentElement.clientHeight) {
        console.log('height');
        elem.ratio = document.documentElement.clientHeight / elem.height;
        elem.width *= elem.ratio;
        elem.height *= elem.ratio;
      }
    }


    return {
      'init' : init
    };
  }());

  app.init();
}());