(function(){
  'use strict';
  
  var app = function() {
    
    
    var over = document.createElement('div'),
        list = document.querySelector('.img-list');

    function init() {
      list.addEventListener('click', function (e) {
        if (e.target.tagName === 'IMG') {
          overlay();
          createImage(e.target);
        }
      }, false);
      
      // 27 - ESC
      // 13 - ENTER
      document.addEventListener('keyup', function (e) {
        console.log(e);
        if (e.keyCode.toString() === '27') {
          over.parentNode.removeChild(over);
          console.log(e);
        }
      }, false);
    }

    // creating and adding picture to the overlay
    function createImage(img) {
      var imageSrc = img.src;
      var newImage = document.createElement('img');
      newImage.setAttribute('alt', 'overlay image');
      newImage.setAttribute('src', imageSrc);
      
      newImage.addEventListener('load', function (e) {
        if (this.height > window.innerHeight) {
          this.ratio = window.innerHeight / this.height;
          this.height = this.height * this.ratio;
          this.width = this.width * this.ratio;
        }

        if (this.width > window.innerWidth) {
          this.ratio =  window.innerWidth / this.width;
          this.height = window.innerHeight;
          this.width = this.width * this.ratio;
        }

        over.appendChild(newImage);
      }, false);
    }

    function overlay () {
      over.setAttribute('class', 'overlay');

      over.style.width = window.innerWidth + 'px';
      over.style.height =  window.innerHeight + 'px';
      document.body.appendChild(over);


    }

    return {
      init: init
    };

  }();

  app.init();
}());
