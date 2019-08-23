import React, { Component } from 'react';
import BookService from '../Service/BookService';

class BookComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            //this should match the isbn
            id: this.props.match.params.id,
           book: {}
        }
    }

    componentDidMount(){
        this.loadBook();
    }

    loadBook(){
        console.log("in loadbook...");
        //check if the id exist if not just return else find path
        if(this.state.id == -1)
            return;

        BookService.uploadBook(this.state.id).then(
            response => {
                console.log(response);
                this.setState({
                    book: response.data
                });
            }
        );
    }

    editBook(id){ 
        this.props.history.push(`/books/${id}/edit`);
    }

    deleteBook(id){
        
        BookService.deleteBook(id)
        .then( () => this.props.history.push(`/books`));
        ;
    }
    render(){
        let{id,title,author,price} = this.state;
        return(
            <div className='card'>
                <img className="card-img-top" src="..." alt="Card image cap"></img>
                 <div className="card-body">
                    <h5 className="card-title">Title: {title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                <li className="list-group-item">Author: {author}</li>
                <li className="list-group-item">Price: {price}</li>
                </ul>
                <div className="card-body">
                    <a onClick={() =>this.editBook(id)} id="buttonOne" className="btn btn-success">Edit Book</a>
                    <a onClick={() => this.deleteBook(id)} id="buttonTwo" className="btn btn-danger">Delete Book</a>
                </div>
            </div>
           
        );
    }
}

export default BookComponent;