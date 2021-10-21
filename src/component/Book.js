import React from "react"

const Book =(props) => {
    return (
        // <h1>{props.title}</h1> one 
        <div>
    <h1 style={{background:"lightblue"}}>Title:{props.title}</h1> 
    <h2>Author:{props.author}</h2> 
    <p>Amount:{props.amount}</p>
    <h3>Summary: {props.description}</h3>
    <img src ={props.image} alt={props.title}
     />
</div>
    );
    }

export default Book;
