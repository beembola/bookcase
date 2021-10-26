import {useState} from "react";
import booklist  from '../models/books.json'
import Book from "./Book";

function Booklist (){
const [books,setBook] =useState(booklist);
console.log(books[0].volumeInfo.title);

< book setBook = {setBook}/>

return books.map((book) => 

 <Book  image ={book.volumeInfo.imageLinks.thumbnail} 
  title ={ book.volumeInfo.title}  
    author ={ book.volumeInfo.authors[0]} 
    amount={book.saleInfo.retailPrice?.amount}
     
    description= {book.volumeInfo.description} />);
}
export default Booklist;