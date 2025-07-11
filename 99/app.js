// books
let book1 = { name: "İnsan Ne İle Yaşar", author: "Tolstoy", price: "120.99" };
let book2 = { name: "Beyaz Geceler", author: "Dostoyoveski", price: "135.92" };
let book3 = { name: "Satranç", author: "Stefan Zweig", price: "89.76" };
let book4 = { name: "Vişne Bahçesi", author: "Anton Çehov", price: "154.75" };
let book5 = { name: "Galileo Galilei", author: "Bertolt Brecht", price: "98.50" };
let book6 = { name: "William", author: "Shakespeare", price: "105.99" };
let book7 = { name: "Yüzbaşının Kızı", author: "Puşkin", price: "89.05" };
let book8 = { name: "İnsan Ne İle Yaşar", author: "Tolstoy", price: "120.99" };
let book9 = { name: "Baba", author: "Jhon", price: "125" };
let book10 = { name: "Harman Yerinde Aşk", author: "D. H. Lawrance", price: "189.65" };
let book11 = { name: "Bir Delinin Hatıra Defteri", author: "Nikolay Gogol", price: "120.99" };

let bookshelf = [
  book1, book2, book3, book4, book5,
  book6, book7, book8, book9, book10, book11
];

// shelfs
function createShelf(id) {
  return { id: id, visible: false, book: null };
}

let shelfs = [
  [createShelf("4.1 SHELF"), createShelf("4.2 SHELF"), createShelf("4.3 SHELF")],
  [createShelf("3.1 SHELF"), createShelf("3.2 SHELF"), createShelf("3.3 SHELF")],
  [createShelf("2.1 SHELF"), createShelf("2.2 SHELF"), createShelf("2.3 SHELF")],
  [createShelf("1.1 SHELF"), createShelf("1.2 SHELF"), createShelf("1.3 SHELF")]
];

function distributeBooks(books, raflar) {
  let index = 0;

  for (let i = 0; i < raflar.length; i++) {
    for (let j = 0; j < raflar[i].length; j++) {
      if (index < books.length) {
        raflar[i][j].book = books[index];
        raflar[i][j].visible = true;
        index++;
      }
    }
  }
}

// output
function printShelves(raflar) {
  console.clear();
  for (let i = 0; i < raflar.length; i++) {
    let row = "";
    for (let j = 0; j < raflar[i].length; j++) {
      let shelf = raflar[i][j];
      if (shelf.visible && shelf.book) {
        row += `[ ${shelf.id} - "${shelf.book.name}" by ${shelf.book.author} ₺${shelf.book.price} ]\t`;
      } else {
        row += `[ ${shelf.id} - EMPTY ]\t`;
      }
    }
    console.log(row);
  }
}

distributeBooks(bookshelf, shelfs);
printShelves(shelfs);
