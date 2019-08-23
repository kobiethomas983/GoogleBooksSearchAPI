import React, {Component} from 'react';
import listedBooks from './ShowAllBooks';
import listBook from './BookComponent';
import newBook from './NewBookComponent';
import editBook from './EditBookComponent';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';

class BooksApp extends Component{
    render(){
        return (
            <Router>
                <>
                <div className="container">
                <h1 className='app-header'>Books Search</h1>
                </div>
        
                <Switch>
                    <Route path='/' exact component={listedBooks}/>
                    <Route path='/books' exact component={listedBooks}/>
                    <Route path='/books/add' component={newBook}/>
                    <Route path='/books/:isbn' exact component={listBook}/>
                    <Route path='/books/:id/edit' component={editBook}/>
                </Switch>
                </>
                
            </Router>
            
            

        );
    }
}

export default BooksApp;