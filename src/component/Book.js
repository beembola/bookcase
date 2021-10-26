import React from "react"
const Book =(props) => {

    // function  addButton (props) {
    //     return props.setBook(props.books+1)
    // }
    return (
        // <h1>{props.title}</h1> one 
        <div className="bookContainer">
    <h1 className="bookCaseTitle">{props.title}</h1> 
    <h2 className="bookCaseAuthor" >by:{props.author}</h2> 
    <p className="amount" >£{props.amount}</p>
    <h3  className="bookDesc"> {props.description}</h3>
    <p className="ptag">jjjjjj {props.books} </p>
    {/* <button  onClick={() =>addButton() }
    className="button"> Add </button> */}
    <img className="bookImages "src ={props.image} alt={props.title}
     />
</div>
    
    );
    }

export default Book;
