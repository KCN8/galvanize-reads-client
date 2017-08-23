const localURL = 'http://localhost:3000/'
const baseURL = 'https://whispering-coast-43590.herokuapp.com/'

$(document).ready( () => {
  $.get(localURL + 'authors')
  .then ( authors => {
    console.log(authors);
    for (var i = 0; i < authors.length; i++) {
      $('main').append(
        `<div class="card col-lg-12">
          <div class="card-body">
            <a href="#" id="${authors[i].id}" class="authorAnchor">
              <img class="card-img-top" src="${authors[i].portrait}" alt="Image of author">
              <h4 class="card-title">${authors[i].first_name} ${authors[i].last_name}</h4>
            </a>
            <p class="card-text">${authors[i].biography}</p>
          </div>
        </div>`
      )
    }

    $('.authorAnchor').click( function (event) {
      event.preventDefault()
      let authorID = $(this).attr('id')
      $.get(localURL + 'authors/' + authorID)
      .then(author => {
        $('main').empty()
        $('main').append(
          `<div class="card col-lg-12">
            <div class="card-body">
                <img class="card-img-top" src="${author[0].portrait}" alt="Image of author">
                <h4 class="card-title">${author[0].first_name} ${author[0].last_name}</h4>
              <p class="card-text">${author[0].biography}</p>
            </div>
          </div>`
        )
      })
    })

    $('.navbar-brand').click( function(event) {
      window.location.reload();
    })

  })
})
