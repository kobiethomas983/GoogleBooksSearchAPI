import React, {Component} from 'react';
import BookService from '../Service/BookService';

class EditBookComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            id:this.props.match.params.id,
            title:null,
            authoer:null,
            price:null
        }

        this.handleInput = this.handleInput.bind(this);
        this.saveBook = this.saveBook.bind(this);
    }

    componentDidMount(){
        this.editLoadBook();
    }

    handleInput(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    editLoadBook(){
        console.log("edit loading.....");
        
        BookService.uploadBook(this.state.id).then(
            response => {
                console.log(response);
                this.setState({
                    title: response.data.name,
                    author: response.data.author,
                    price: response.data.price
                });
            }
        );

    }

    saveBook(event){
        let editBook = {       
            name : this.state.title,
            author: this.state.author,
            price: this.state.price
        };
        
        event.preventDefault();
        BookService.updateBook(editBook,this.state.id)
        .then( () => this.props.history.push(`/books`));

    }

    render(){
        return(
            <div className="container">
                <h2>Edit Book: {this.state.id}</h2>
                <form onSubmit={this.saveBook}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control" name="title" value={this.state.title} onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label >Author</label>
                        <input type="text" class="form-control" name="author" value={this.state.author} onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" name="price" value={this.state.price} onChange={this.handleInput}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Save</button>
                </form>
            </div>
            
        );
    }
    
}

export default EditBookComponent;
   