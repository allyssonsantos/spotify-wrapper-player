import 'jsdom-global/register';
import { expect } from 'chai';
import renderAlbumTracks from '../src/AlbumTracks';

describe('AlbumTracks', () => {
  const data = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/asd",
      "track_number": 1,
      "name": "Whitewash",
      "duration_ms": 23000
    }
  ];

  const data2 = [
    {
      "preview_url": "https://p.scdn.co/mp3-preview/asd",
      "track_number": 1,
      "name": "Whitewash",
      "duration_ms": 23000
    },
    {
      "preview_url": "https://p.scdn.co/mp3-preview/asd",
      "track_number": 1,
      "name": "Whitewash",
      "duration_ms": 23000
    }
  ];

  const markup = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/asd">
      <p class="music-number">1</p>
      <p class="music-title">Whitewash</p>
      <p class="music-duration">23000</p>
    </div>`;

  const markup2 = `
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/asd">
      <p class="music-number">1</p>
      <p class="music-title">Whitewash</p>
      <p class="music-duration">23000</p>
    </div>
    <div class="music" data-track-preview="https://p.scdn.co/mp3-preview/asd">
      <p class="music-number">1</p>
      <p class="music-title">Whitewash</p>
      <p class="music-duration">23000</p>
    </div>`;

  it('should create and append the markup given a correct data', () => {
    const element = document.createElement('div');
    renderAlbumTracks(data, element);

    expect(element.innerHTML).to.be.eql(markup);
  });

  it('should create and append the markup when more than 1 item', () => {
    const element2 = document.createElement('div');
    renderAlbumTracks(data2, element2);

    expect(element2.innerHTML).to.be.eql(markup2);
  });
});
