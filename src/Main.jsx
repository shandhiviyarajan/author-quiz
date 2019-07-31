import React from 'react';
import Book from './Book';

const Main = ({ author, books }) => {
    return (<div className="container">

        <div className="row">

            <div className="col-md-4">
                <img src={author.imageUrl} alt="" />
                <p>
                    {author.name}
                </p>
            </div>
            <div className="col-md-8">
                <ul>
                    {books.map((title) => <li key={title}><Book title={title} key={title} /></li>)}
                </ul>

            </div>
        </div>
    </div>)

}



export default Main;