export default function renderAlbumInfo(data, element) {
  const markup = `
    <img class="album-image" src="https://i.scdn.co/image/a13aadb368a956be48fe9089acb64333f0c0ca40" alt="">
    <p class="album-title">Make Yourself</p>
    <p class="album-artist">Incubus</p>
    <p class="album-counter">13 Músicas</p>
  `;

  element.innerHTML = markup;
}
