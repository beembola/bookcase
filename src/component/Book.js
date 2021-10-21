import React from "react"

const Book =(props) => {
    return (
        // <h1>{props.title}</h1> one 
        <div>
    <h1>{props.title}</h1> one 
    <h1>{props.author}</h1> two 
    <p>{props.amount}</p>
    <img src ={props.image} alt={props.title} />
</div>
    );
    }

export default Book;
