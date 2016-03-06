var defaultVolumeSeekbarPosition = function() {
    var $volumeSeekBar = $('.volume');
    var currentVolumePercentageString = currentVolume + '%';
    $volumeSeekBar.find('.fill').width(currentVolumePercentageString);
    $volumeSeekBar.find('.thumb').css({left: currentVolumePercentageString})
};

/* First version of filterTimeCode */
var songDurationInMinsAndSecs = function(songDuration) {
    var songDurationMinutes = Math.floor(songDuration/60); 
    var songDurationRemainingSeconds = Math.round(songDuration % 60);
    return songDurationMinutes + ":" + songDurationRemainingSeconds;
};

/* Last version of filterTimeCode */

var filterTimeCode = function(timeInSeconds) {
    var minutes = Math.floor(timeInSeconds/60); 
    var remainingSeconds = Math.round(timeInSeconds % 60);

    var output = minutes + ":";
    
    if (remainingSeconds < 10) {
        output += '0';   
    }
        
    output += remainingSeconds;
    
    return output;
};


  
+   var $volumeFill = $('.volume .fill');
+   var $volumeThumb = $('.volume .thumb');
+   $volumeFill.width(currentVolume + '%');
+   $volumeThumb.css({left: currentVolume + '%'});



var setCurrentTimeInPlayerBar = function(currentTime) {
    $('.current-time').text(currentTime);
};