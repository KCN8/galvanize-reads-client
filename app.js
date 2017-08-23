const localURL = 'http://localhost:3000/'
const baseURL = 'https://whispering-coast-43590.herokuapp.com/'

$(document).ready( () => {
  $.get(localURL + 'authors')
  .then ( authors => {
    console.log(authors);
    for (var i = 0; i < authors.length; i++) {
      $('main').append(
        `<div class="card col-lg-6">
          <img class="card-img-top" src="${authors[i].portrait}" alt="Image of author">
          <div class="card-body">
            <p class="card-text">${authors[i].first_name} ${authors[i].last_name}</p>
          </div>
        </div>`
      )
    }
  })
})
