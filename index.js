function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
  //bc this is an async function the test needed a return in order to call the .then on line 19
  .then(response => response.json())
  .then(data => renderBooks(data))
}

function renderBooks(books) {
  const main = document.querySelector('main')
  books.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
  .then() //() => console.log("After fetched books"))
// add code inside the .then statement in order to see the same erorr
//from the test inside the console. 
})
