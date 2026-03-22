// you should have an array of objects named books where each object in the array should have a string title, another string authorName, and a number releaseYear.

const books = [
  {
    title: "The Jungle Book",
    authorName: "Rudiyard Kipling",
    releaseYear: 1893,
  },
  {
    title: "The Mungle Book",
    authorName: "Lard Kipling",
    releaseYear: 2013,
  },
  {
    title: "The Mumble Book",
    authorName: "Shri Kipling",
    releaseYear: 1993,
  },
];

function sortByYear(book1, book2) {
  if (book1.releaseYear < book2.releaseYear) {
    return -1;
  } else if (book1.releaseYear > book2.releaseYear) {
    return 1;
  } else {
    return 0;
  }
}
const filteredBooks = books.filter((e) => e.releaseYear <= 1950);
filteredBooks.sort(sortByYear);
console.log(filteredBooks);
