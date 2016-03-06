var defaultVolumeSeekbarPosition = function() {
    var $volumeSeekBar = $('.volume');
    var currentVolumePercentageString = currentVolume + '%';
    $volumeSeekBar.find('.fill').width(currentVolumePercentageString);
    $volumeSeekBar.find('.thumb').css({left: currentVolumePercentageString})
};

  
+   var $volumeFill = $('.volume .fill');
+   var $volumeThumb = $('.volume .thumb');
+   $volumeFill.width(currentVolume + '%');
+   $volumeThumb.css({left: currentVolume + '%'});






<div class="control-group volume">
                     <span class="ion-volume-high icon"></span>
                     <div class="seek-bar">
                         <div class="fill"></div>
                         <div class="thumb"></div>
                     </div>
                 </div>