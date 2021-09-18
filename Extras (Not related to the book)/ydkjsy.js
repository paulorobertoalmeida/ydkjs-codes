class Page {
    constructor(text) {
      this.text = text;
    }
    print() {
      console.log(this.text);
    } 
  }
  
  class Notebook {
    constructor(){
      this.pages = [];
    }
    addPage(text) {
      var page = new Page(text);
      this.pages.push(page);
    }
    print() {
      for (let page of this.pages) {
        page.print();
      }
    }
  }
  
  var mathNotes = new Notebook();
  mathNotes.addPage("Aritmetic: + - * / ...");
  mathNotes.addPage("Trigonometry; sin, cos, tan ...");
  mathNotes.print();
  /* 
  Aritmetic: + - * / ...
  Trigonometry; sin, cos, tan ...
  */


function Publication(title, author, pubDate) {
  var publicAPI = {
    print() {
      console.log(`
      Title: ${title}
      By: ${author}
      ${pubDate}
      `);
    }
  };
  return publicAPI;
} 

function Book(bookDetails) {
  var pub = Publication(
    bookDetails.title,
    bookDetails.author,
    bookDetails.publishedOn
  );
  var publicAPI = {
    print() {
      pub.print();
      console.log(`
      Published: ${bookDetails.publiser}
      ISBN: ${bookDetails.ISBN}
      `);
    }
  };
  return publicAPI;
}

