import React, {Component} from 'react';
import BookService from '../Service/BookService';

class NewBookComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            name:'',
            author:'',
            price:0
        }
        this.handleInput = this.handleInput.bind(this);
        this.addNewBook = this.addNewBook.bind(this);
    }

    componentDidMount(){
        return;
    }

    
    handleInput(event){
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name] : value
        });
    }

    addNewBook(event){
        let newBook = {
            name: this.state.name,
            author: this.state.author,
            price: this.state.price
        };
        event.preventDefault();
        BookService.createBook(newBook)
        .then( () => this.props.history.push(`/books`));
    }

    render(){ 
        return(
            <div className="container">
                <form onSubmit={this.addNewBook}>
                    <div className="form-group">
                        <label>Title</label>
                        <input type="text" class="form-control" name="name" value={this.state.name} onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label >Author</label>
                        <input type="text" class="form-control" name="author" value={this.state.author} onChange={this.handleInput}/>
                    </div>
                    <div className="form-group">
                        <label>Price</label>
                        <input type="number" class="form-control" name="price" value={this.state.price} onChange={this.handleInput}/>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
            </div>
            
        )
    }
}

export default NewBookComponent;