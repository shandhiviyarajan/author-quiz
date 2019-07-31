import React from 'react';
import './css/app.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

import Button from './Button';

const AuthorQuiz = ({ data }) => {


  return (
    <section className="author-quiz-app" >
      <Header />
      <main>
        <Button value="Sample" class="btn btn-lg btn-primary" />
        <Main {...data} />
      </main>
      <Footer />
    </section>
  );

}

export default AuthorQuiz;
