import React, {Component} from 'react';

const books = [
  {
    id: 0,
    name: "для игры",
    picture: "https://pp.userapi.com/c841634/v841634035/7ac6/VS60bQodA9g.jpg",
    url: "https://www.dropbox.com/sh/i3tmhcp2vp13jyc/AABJvwoCk9sxopL1H7PiaymJa/%D0%B4%D0%BB%D1%8F%20%D0%B8%D0%B3%D1%80%D1%8B?dl=0&subfolder_nav_tracking=1"
  },
  {
    id: 1,
    name: "опции персонажей",
    picture: "https://pp.userapi.com/c841229/v841229600/1f3b9/xMKPa0-y6bU.jpg",
    url: "https://www.dropbox.com/sh/i3tmhcp2vp13jyc/AACJrRnwuixtooy4X8y4q8Moa/%D0%9E%D0%BF%D1%86%D0%B8%D0%B8%20%D0%BF%D0%B5%D1%80%D1%81%D0%BE%D0%BD%D0%B0%D0%B6%D0%B5%D0%B9?dl=0&subfolder_nav_tracking=1"
  },
  {
    id: 2,
    name: "опции правил",
    picture: "https://pp.userapi.com/c834402/v834402078/d2ee3/A9woiYgDrn4.jpg",
    url: "https://www.dropbox.com/sh/i3tmhcp2vp13jyc/AAAn7eP7wj7QZ60bYreeZp42a/%D0%9E%D0%BF%D1%86%D0%B8%D0%B8%20%D0%BF%D1%80%D0%B0%D0%B2%D0%B8%D0%BB?dl=0&subfolder_nav_tracking=1"
  },
  {
    id: 3,
    name: "основные книги",
    picture: "https://pp.userapi.com/c836431/v836431726/72962/QP0FhQTf6y8.jpg",
    url: "https://www.dropbox.com/sh/i3tmhcp2vp13jyc/AADubMkBl93zMVfTRSIhCHmta/%D0%9E%D1%81%D0%BD%D0%BE%D0%B2%D0%BD%D1%8B%D0%B5%20%D0%BA%D0%BD%D0%B8%D0%B3%D0%B8?dl=0&subfolder_nav_tracking=1"
  },
  {
    id: 4,
    name: "приключения",
    picture: "https://pp.userapi.com/c844321/v844321415/d5eb/LOscUX_ecds.jpg",
    url: "https://www.dropbox.com/sh/i3tmhcp2vp13jyc/AABbAMzV6zRdeRmDOdoCvG2Ra/%D0%9F%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D1%8F?dl=0&subfolder_nav_tracking=1"
  },
  {
    id: 5,
    name: "сеттинги",
    picture: "https://pp.userapi.com/c639728/v639728202/2e88f/OCTIvhajn98.jpg",
    url: "https://www.dropbox.com/sh/i3tmhcp2vp13jyc/AAA2PEI8LnUgoenjzzeL9h9Ga/%D0%A1%D0%B5%D1%82%D1%82%D0%B8%D0%BD%D0%B3%D0%B8?dl=0&subfolder_nav_tracking=1"
  },
  {
    id: 6,
    name: "чарники с игр",
    picture: "https://pp.userapi.com/c840325/v840325385/1ba55/oQn92HoWn1g.jpg",
    url: "https://www.dropbox.com/sh/i3tmhcp2vp13jyc/AAAihow3p7uyWX2J0FEM00eca/%D0%A7%D0%B0%D1%80%D0%BD%D0%B8%D0%BA%D0%B8%20%D1%81%20%D0%B8%D0%B3%D1%80?dl=0&subfolder_nav_tracking=1"
  }
]

class LibraryPage extends Component{

  componentDidMount() {
    window.scrollTo(0,0);
    }
  render(){	
     const libraryBooks = books.map((book, index)=>
        <div className="col-12 col-md-6 col-lg-4 mb-5" key={book.id}>
          <a href={book.url} target="_blank" className="text-white">
            <div className="wrapper"  style={ { backgroundImage: `url(${book.picture})` }}>
              <div className="card d-flex align-items-center justify-content-center rounded-0" >
                <h1 className="text-center pl-3 pr-3" style={{ textShadow: "black 0 0 10px"}}>{book.name.toUpperCase()}</h1>
              </div>
            </div>
          </a>
         </div>)
    return (
    	<section id="library" className='mt-5 mb-5' style={{minHeight:"100vh"}}>
        <h1 className="text-center mb-5">БИБЛИОТЕКА</h1>
        <div className="container">
          <div className="row">
            {libraryBooks}
          </div>
        </div>
       </section>
    )
  }
}

export default LibraryPage;




