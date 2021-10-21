import booklist  from './models/books.json'
import Book from "./component/Book";
import {useState} from "react";
import AddButton from './component/AddButton';

function App() {
  const [books,setBook] =useState(booklist);
  console.log(books[0].volumeInfo.title);
  return books.map((book) => 
   <Book title ={ book.volumeInfo.title}  
      author ={ book.volumeInfo.authors[0]} 
      amount={book.saleInfo.retailPrice?.amount} 
      image ={book.volumeInfo.imageLinks.thumbnail} 
      description= {book.volumeInfo.description} />);
       
}

export default App;
