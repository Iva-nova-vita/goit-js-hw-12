export default function renderGallery(data) {
  return data.reduce((string, item) => {
    return string+= `<li class="card">
                <a href="${item.largeImageURL}">
                    <img class="card__img" src="${item.webformatURL}" alt="${item.tags}"/>

                    <div class="card__info">
                        <div class="card__likes">
                            <div class="title">likes</div>
                            <div class="number">${item.likes}</div>
                        </div>
                        <div class="card__views">
                            <div class="title">views</div>
                            <div class="number">${item.views}</div>
                        </div>
                        <div class="card__comments">
                            <div class="title">comments</div>
                            <div class="number">${item.comments}</div>
                        </div>
                        <div class="card__downloads">
                            <div class="title">downloads</div>
                            <div class="number">${item.downloads}</div>
                        </div>
                    </div>
                </a>
            </li>
        `;
  }, '');
}
