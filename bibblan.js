// let book = {
//   title: "Stolthet och fördom",
//   author: "Jane Austen",
//   numPages: "200",
// };

let book = {
  title: "",
  author: "",
  numPages: "",
};
//   console.log(book);
// let books = [book,book,book,book];
// console.log(books[1].title);
// books[1].title='Emma';
// console.log(books[1].title); //TODO: Hhmmm, varför fastnar ny titel inte?

// books[2].title ='Övertalning';
// books[3].title ='Förnuft och känsla';

let books = [
  { title: "Stolthet och fördom", author: "Jane Austen", numPages: "200" },
  { title: "Emma", author: "Jane Austen", numPages: "200" },
  { title: "Övertalning", author: "Jane Austen", numPages: "200" },
  { title: "Förnuft och känsla", author: "Jane Austen", numPages: "200" },
];

// console.log(books);
console.log(`Book found:`);
console.log(findbook(books, "Övertalning"));

//takes an array of book objects and a title, returns the book with that title or null if not found in library
function findbook(library, title) {
  for (book of library) {
    // console.log(library);
    // console.log(book);
    // console.log(book["title"]);
    if (book["title"] === title) {
      return book;
    }
  }
  return null;
}
