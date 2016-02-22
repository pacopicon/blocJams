// Example Album
var albumCezanne = {
     name: 'The Colors',
     artist: 'Paul Cezanne',
     label: 'Post-Impressionism',
     year: '1839',
     albumArtUrl: 'assets/images/album_covers/07.png',
     songs: [
         { name: 'Woman With a Green Hat', length: '5:37' },
         { name: 'Card Players', length: '4:25' },
         { name: 'Still Life With a Courtain', length: '6:12' },
         { name: 'Harlequin', length: '4:32'},
         { name: 'The House with the Cracked Walls', length: '3:26'}
     ]
 };

var albumPicasso = {
     name: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { name: 'Blue', length: '4:26' },
         { name: 'Green', length: '3:14' },
         { name: 'Red', length: '5:01' },
         { name: 'Pink', length: '3:21'},
         { name: 'Magenta', length: '2:15'}
     ]
 };

 var albumMarconi = {
     name: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { name: 'Hello, Operator?', length: '1:01' },
         { name: 'Ring, ring, ring', length: '5:01' },
         { name: 'Fits in your pocket', length: '3:21'},
         { name: 'Can you hear me now?', length: '3:14' },
         { name: 'Wrong phone number', length: '2:15'}
     ]
 };

var createSongRow = function(songNumber, songName, songLength) {
    var template =
        '<tr class="album-view-song-item">'
    + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
    + '  <td class="song-item-title">' + songName + '</td>'
    + '  <td class="song-item-duration">' + songLength + '</td>'
    + '</tr>'
    ;
 
    var $row = $(template);
    
    var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(playButtonTemplate);
        }
    };

    var offHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = songNumberCell.attr('data-song-number');

        if (songNumber !== currentlyPlayingSong) {
            songNumberCell.html(songNumber);
        }
    };
    
    $row.find('.song-item-number').click(clickHandler);
    $row.hover(onHover, offHover);
    return $row;
    
    var clickHandler = function() {
	var songNumber = $(this).attr('data-song-number');

	if (currentlyPlayingSong !== null) {
		// Revert to song number for currently playing song because user started playing new song.
		var currentlyPlayingCell = $('.song-item-number[data-song-number="' + currentlyPlayingSong + '"]');
		currentlyPlayingCell.html(currentlyPlayingSong);
	}
	if (currentlyPlayingSong !== songNumber) {
		// Switch from Play -> Pause button to indicate new song is playing.
		$(this).html(pauseButtonTemplate);
		currentlyPlayingSong = songNumber;
	} else if (currentlyPlayingSong === songNumber) {
		// Switch from Pause -> Play button to pause currently playing song.
		$(this).html(playButtonTemplate);
		currentlyPlayingSong = null;
	}
};
 };

var setCurrentAlbum = function(album) {
    var $albumTitle = $('.album-view-title');
    var $albumArtist = $('.album-view-artist');
    var $albumReleaseInfo = $('.album-view-release-info');
    var $albumImage = $('.album-cover-art');
    var $albumSongList = $('.album-view-song-list');
    
    $albumTitle.text(album.name);
    $albumArtist.text(album.artist);
    $albumReleaseInfo.text(album.year + ' ' + album.label);
    $albumImage.attr('src', album.albumArtUrl);
 
    $albumSongList.epmty();
 
    for (i = 0; i < album.songs.length; i++) {
        var $newRow = createSongRow(i + 1, album.songs[i].name, album.songs[i].length);
        $albumSongList.append($newRow); 
    }
};

//var findParentByClassName = function(element, targetClass) {
//    var currentParent = element.parentElement;
//    while (currentParent.className != targetClass) {
//        currentParent = currentParent.parentElement;
//    }
//    return currentParent;
//};

//var getSongItem = function(element) {
//    switch (element.className) {
//        case 'album-song-button':
//        case 'ion-play':
//        case 'ion-pause':
//            return findParentByClassName(element, 'song-item-number');
//        case 'album-view-song-item':
//            return element.querySelector('.song-item-number');
//        case 'song-item-title':
//        case 'song-item-duration':
//            return findParentByClassName(element, 'album-view-song-item').querySelector('.song-item-number');
//        case 'song-item-number':
//            return element;
//        default:
//            return;
//    }  
//};

//var clickHandler = function(targetElement) {
//    
//    var songItem = getSongItem(targetElement);
//    
//    if (currentlyPlayingSong === null) {
//        songItem.innerHTML = pauseButtonTemplate;
//        currentlyPlayingSong = songItem.getAttribute('data-song-number');
//    } else if (currentlyPlayingSong === songItem.getAttribute('data-song-number')) {
//        songItem.innerHTML = playButtonTemplate;
//        currentlyPlayingSong = null;
//    } else if (currentlyPlayingSong !== songItem.getAttribute('data-song-number')) {
//        var currentlyPlayingSongElement = document.querySelector('[data-song-number="' + currentlyPlayingSong + '"]');
//        currentlyPlayingSongElement.innerHTML = currentlyPlayingSongElement.getAttribute('data-song-number');
//        songItem.innerHTML = pauseButtonTemplate;
//        currentlyPlayingSong = songItem.getAttribute('data-song-number');
//    }
//    
//};

//var songListContainer = document.getElementsByClassName('album-view-song-list')[0];
//var songRows = document.getElementsByClassName('album-view-song-item');

// Album button templates
var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';

// Store state of playing songs
var currentlyPlayingSong = null;

$(document).ready(function() {
    setCurrentAlbum(albumPicasso);
     
//     for (i = 0; i < songRows.length; i++) {
//         
//         songRows[i].addEventListener('click', function(event) {
//             clickHandler(event.target);
//         });
//     }
     
//     var albums = [albumPicasso, albumCezanne, albumMarconi];
//     var i = 1;
//     albumImage.addEventListener("click", function(event) {
//         setCurrentAlbum(albums[i]);
//         i++;
//         if (i == albums.length) {
//             i = 0;
//         }
//     });
     
 });