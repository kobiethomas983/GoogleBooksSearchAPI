import axios from 'axios';

const URL = "http://localhost:8080";
const books = "books";
const BooksAPIURL = `${URL}/${books}`;
class BookService{
    
    uploadAllBooks(name) {
        console.log(BooksAPIURL);
       return axios.get(`http://localhost:8080/api/v1/googlebooks/bookname/${name}`);
    }
    uploadBook(isbn){
        console.log('in upload book method...');
        return axios.get(`http://localhost:8080/api/v1/googlebooks/bookname/showbook/${isbn}`);
    }

}

export default new BookService();