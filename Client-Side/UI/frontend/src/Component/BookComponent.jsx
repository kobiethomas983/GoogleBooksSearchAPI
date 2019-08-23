import React, { Component } from 'react';
import BookService from '../Service/BookService';

class BookComponent extends Component{
    constructor(props){
        super(props);
        this.state ={
            //this should match the isbn
            id: this.props.match.params.isbn,
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
    }
    render(){
      // let author = this.state.book.authors.split(",");
       //console.log(author);
        return(
            <div className="row justify-content-center">
                <div className="col-4">
                        <div className='card'>
                            <img className="card-img-top" src={this.state.book.thumbnail} alt="Card image cap"></img>
                                <div className="card-body">
                                    <h5 className="card-title">Title: {this.state.book.title}</h5>
                                    <p className="card-text">Category: {this.state.book.categories}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                <li className="list-group-item">Author: {this.state.book.authors}</li>
                                <li className="list-group-item">Rating: {this.state.book.averageRating}</li>
                                </ul>
                                <div className="card-body">
                            </div>
                        </div>
                </div>
         </div>
           
           
        );
    }
}

export default BookComponent;