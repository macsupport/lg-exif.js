/*! lg-share - v1.1.0 - 2017-10-03
* http://sachinchoolur.github.io/lightGallery
* Copyright (c) 2017 Sachin N; Licensed GPLv3 */

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    define(['jquery'], function (a0) {
      return (factory(a0));
    });
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    module.exports = factory(require('jquery'));
  } else {
    factory(jQuery);
  }
}(this, function ($) {

(function() {

    'use strict';

    var defaults = {
        exif: true
    };

    var Exif = function(element) {

        this.core = $(element).data('lightGallery');

        this.core.s = $.extend({}, defaults, this.core.s);
        if (this.core.s.exif) {
            this.init();
        }

        return this;
    };

    Exif.prototype.init = function() {
        var _this = this;
        var exifHtml = '<span id="lg-exif" class="lg-icon exif-icon"><i class="far fa-camera-alt"></i>' +
            '<ul class="lg-exif-info collection with-header" style="position: absolute;">';
        
        exifHtml += '</ul></span>';

        this.core.$outer.find('.lg-toolbar').append(exifHtml);
        this.core.$outer.find('.lg').append('<div id="lg-exif-overlay"></div>');
        $('#lg-exif').on('click.lg', function(){
            _this.core.$outer.toggleClass('lg-exif-active');
        });

        $('#lg-exif-overlay').on('click.lg', function(){
            _this.core.$outer.removeClass('lg-exif-active');
        });

        _this.core.$el.on('onAfterSlide.lg.tm', function(event, prevIndex, index) {

            setTimeout(function() {
var Exif = window.Exif;
  var URL = window.URL || window.webkitURL;
  var preview = document.getElementsByClassName('lg-img-wrap')[0];
 var showcase = document.getElementsByClassName('lg-exif-info')[0];
  var options = {
        done: function (tags) {
          var segments = [];
          var tag;

          for (tag in tags) {
            if (tags.hasOwnProperty(tag)) {
              segments.push('<strong>' + tag + '</strong>: ' + tags[tag]);
            }
          }

          showcase.innerHTML = '<li class="collection-header"><h6>EXIF Info <i class="far fa-camera-alt"></i></h6>  </li><li class="collection-item">' + segments.join('</li><li class="collection-item">') + '</li>';
        },
        fail: function (message) {
          showcase.innerHTML = '<p>' + message + '</p>';
        }
      };

  function readExif() {
    return new Exif(preview.getElementsByClassName('lg-image')[0], options);
  }


  readExif();

  $(document).on( 'click','.exif-icon', function () {
  //$('.exif-info').fadeIn();
 readExif();
 });
                

            }, 100);
        });
 
       
    };

   
    Exif.prototype.destroy = function() {

    };

    $.fn.lightGallery.modules.exif = Exif;

})();



}));
