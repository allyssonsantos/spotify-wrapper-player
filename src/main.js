import spotify from './Spotify';
import renderAlbums from './AlbumList';
import renderAlbumInfo from './AlbumInfo';
import renderAlbumTracks from './AlbumTracks';

const albums = spotify.search.albums('Buckethead');
const albumList = document.getElementById('album-list');

const album = spotify.album.getAlbum('0LBQdWnuV0CAXyPIngb0UX');
const albumInfo = document.getElementById('album-info');

albums.then(data => renderAlbums(data.albums.items, albumList));

album.then(data => renderAlbumInfo(data, albumInfo));
