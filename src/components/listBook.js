import React from 'react';
import Shelf from './shelf';
import PropTypes from 'prop-types';
const ListBook = props => {
   
        const {books , changeShelf} = props;
        const Shelves =[
            { type: 'currentlyReading', title: 'Currently Reading' },
            { type: 'wantToRead', title: 'Want to Read' },
            { type: 'read', title: 'Read' }
        ];
        return ( 
            <div className="list-books-content">
                {Shelves.map((shelf,index)=>{
                    const shelfBooks = books.filter(book => book.shelf === shelf.type );
                    return(
                        <div className="bookshelf" key={index}>
                        <h2 className="bookshelf-title">{shelf.title}</h2>
                        <div className="bookshelf-books">
                        {/* shelf */}
                        <Shelf books={shelfBooks} changeShelf={changeShelf}/>
                        </div>
                        </div>
                    );
                })}
            <div>
                
              </div>
            </div>
         );
    
}
ListBook.propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };
export default ListBook;