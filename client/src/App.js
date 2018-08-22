import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import LibraryPage from './components/LibraryPage';
import ArtPage from './components/ArtPage';
import ArticlesPage from './components/ArticlesPage';
import ArticlePage from './components/ArticlesPage/ArticlePage';
import ShopPage from './components/ShopPage';
import StreamsPage from './components/StreamsPage';
import MastersPage from './components/MastersPage';
import MasterPage from './components/MastersPage/MasterPage';
import SupportPage from './components/SupportPage';


class App extends Component {
  render() {  
    return (
      <Router>
      <div>
        <Navigation/> 

          <Route path="/" exact={true} component={HomePage} />
          <Route path="/about-project" component={AboutPage} />
          <Route path="/library" component={LibraryPage} />
          <Route path="/art" component={ArtPage} />
          <Route path="/articles" component={ArticlesPage} />
          <Route path="/article/:id" component={ArticlePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/streams" component={StreamsPage} />
          <Route path="/masters" component={MastersPage} />
          <Route path="/master/:id" component={MasterPage} />
          <Route path="/support" component={SupportPage} />

        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;


// import React, { Component } from 'react';
// import {
//     Link,
// } from 'react-router-dom';

// import logo from './logo.svg';

// import './App.css';

// class App extends Component {
//   state = {
//     articles: []
//   };

//   componentDidMount() {
//     fetch('//localhost:5000/articles')
//    .then(response => response.json())
//     .then(data => 
//       this.setState({articles: data.reverse()}))
//   }

//   render() {
//     const listItems = this.state.articles.map((article, index) =>
//         <div className="card mb-5" key={article._id}>
//           <div className="card-body">
//             <div className="row">
//               <div className="col-12 col-md-3 mb-3">
//                 <img src={article.picture} alt="" />
//               </div>
//               <div className="col-12 col-md-8">
//                 <h5 className="card-title">{article.title}</h5>
//                 <p className="card-text ">{article.text}</p>
//                 <Link to={`/article/${article._id}`} className="btn btn-info">Читать дальше</Link>
//             </div>
//             </div>
//           </div>
//           <div className="card-footer text-primary">
//             <div className="row">
//               <div className="col-12 col-md-6 text-muted mb-2">{article.date}</div>
//               <div className="col-12 col-md-6 text-right">{article.hashtags}</div>
//             </div>
//           </div>  
//       </div>
//     );
//     return (
//     <section id="articlesPage" style={{minHeight: "100vh"}}>    
//       <div className="container text-right mt-5 mb-5">
//         {/*{this.state.newArticle ?

//           <div className="d-flex justify-content-center align-items-center mb-5">
//             <h1 className="text-center">СОЗДАТЬ СТАТЬЮ</h1>
//           <button className="btn btn-link bg-transparent border-0" onClick={()=>this.setState({newArticle : !this.state.newArticle})}>
//              <i className="fas fa-times-circle fa-3x text-info"></i>
//           </button>

//         </div>
//         : 
//           <div className="d-flex justify-content-center align-items-center mb-5">
            
//           <button className="btn btn-link bg-transparent border-0" onClick={()=>this.setState({newArticle : !this.state.newArticle})}>
//              <i className="fas fa-plus-circle fa-3x text-info"></i>
//           </button>
//         </div>
//       }
      
//       {this.state.newArticle ? <ArticleForm  /> : } */}

//       <h1 className="text-center mb-5">СТАТЬИ</h1>
//         <ul className="container text-left">{listItems}</ul>
//       </div>
//       </section>
//     );
//   }
// }

// export default App;
