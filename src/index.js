import React from 'react';
import ReactDOM from 'react-dom';
import AuthorQuiz from './AuthorQuiz';
import * as serviceWorker from './serviceWorker';


const authors = [{
    name: 'Shan Dhiviyarajan',
    imageUrl: '/images/1.jpg',
    books: ['Book1', 'Book2', 'Book3', 'Book4']
},

{
    name: 'Ushani Ramanayake',
    imageUrl: '/images/2.jpg',
    books: ['Book1', 'Book2', 'Book3', 'Book4']
},

{
    name: 'Vipula Anandapiya',
    imageUrl: '/images/3.jpg',
    books: ['Book1', 'Book2', 'Book3', 'Book4']
}

];

const state = {
    data: {
        author: authors[0],
        books: authors[0].books
    }
}


ReactDOM.render(<AuthorQuiz {...state} />, document.getElementById('root'));

serviceWorker.unregister();
