import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

class RegistrationPage extends Component{
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount() {
    window.scrollTo(0,0);
  }
  render(){	
    return (
    	<section id="registration" style={{height:"100vh"}}>
        <div className="container pt-5 pb-5" style={{width:"400px"}}>
          <h1 className="text-center mb-5">РЕГИСТРАЦИЯ</h1>
          <form>
            <div className="form-group">
              <label >Email</label>
              <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Введите email" required/>
            </div>
            <div className="form-group">
              <label>Пароль</label>
              <input type="password" className="form-control" id="InputPassword1" placeholder="Придумайте надежный пароль" required/>
            </div>
            <div className="form-group form-check">
              <input type="checkbox" className="form-check-input" id="Check1" required/>
              <label className="form-check-label" >Прочитал условия, блаблабла</label>
            </div>
            <button type="submit" className="btn btn-info w-100 p-3">Зарегистрироваться</button>
          </form>    
          <Link to="/login" className="nav-link text-center">Войти в аккаунт</Link>
        </div>
		  </section>
    );
}
}

export default RegistrationPage;

