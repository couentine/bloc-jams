var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

var albumAcdc = {
    title: 'Back In Black',
    artist: 'AC-DC',
    label: 'Epic/Lagacy',
    year: '1980',
    albumArtUrl: 'assets/images/album_covers/22.jpg',
    songs: [
        {title: 'Hells Bells', duration: '5:12'},
        {title: 'Shoot to Thrill', duration: '5:17'},
        {title: 'What Do you Do for Money Honey', duration: '3:35'},
        {title: 'Giving the Dog a Bone', duration: '3:31'},
        {title: 'Let Put My Love Into You', duration: '4:15'},
        {title: 'Back In Black', duration: '4:15'},
        {title: 'You Shook Me All Night Long', duration: '3:30'},
        {title: 'Have a Drink on Me', duration: '3:58'},
        {title: 'Shake a Leg', duration: '4:05'},
        {title: 'Rock and Roll Ain\'t Noise Pollution', duration: '4:26'},
        
    ]
};

var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

 var setCurrentAlbum = function(album) {
     // #1

 
     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
 };
 

 window.onload = function() {
     setCurrentAlbum(albumPicasso);
     
     var albums = [albumPicasso, albumMarconi, albumAcdc];
     var index = 0;
     
     albumImage.addEventListener("click", function(event){
         setCurrentAlbum(albums[index]);
         index++;
         if (index == albums.length){
             index=0;
         }
    });

};