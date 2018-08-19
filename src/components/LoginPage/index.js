import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom';

const accounts = [
  {
    id: 1,
    name: "goolpe",
    email: "gooolpe@gmail.com",
    password: "12345"
  },
  {
    id: 133,
    name: "goolpe2",
    email: "gooolpe2@gmail.com",
    password: "123453"
  }
]
class LoginPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      loginForm: true,
      email: '',
      password: '',
      nameId: false
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmail(event){
    this.setState({
      email: event.target.value
    })
  }
  handlePass(event){
    this.setState({
      password: event.target.value
    })
  }

  handleSubmit(event){
    event.preventDefault()
    const auth = accounts.map((account) =>
      {this.state.email === account.email && this.state.password === account.password &&
          this.setState({nameId: true}) } 
    );
  }

  componentDidMount() {
    window.scrollTo(0,0);
  }
  render(){	
    return (      
		  <section id="login" style={{height:"100vh"}}>
        <div className="container pt-5 pb-5 text-center" >
        {this.state.nameId ?
          <p>cool</p>
          :
          <div>
          { this.state.loginForm ?
            <div>
              <h1 className="mb-5">ВХОД</h1>
            <form onSubmit={this.handleSubmit} style={{width:"400px", margin: "auto"}}>
              <div className="form-group text-left">
                <label>Email</label>
                <input type="email" value={this.state.email} onChange={this.handleEmail} className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Введите email" required/>
              </div>
              <div className="form-group text-left">
                <label>Пароль</label>
                <input type="password" value={this.state.password} onChange={this.handlePass} className="form-control" id="InputPassword1" placeholder="Пароль для входа" required/>
              </div>
              <button type="submit" className="btn btn-info w-100 p-3">Войти</button>
            </form>    
            <Link to="/registration" className="nav-link">Зарегистрироваться</Link>
            <button className="btn btn-link nav-link w-100" onClick={()=> this.setState({loginForm: false})}>Не могу войти</button>
            </div>
            :
            <div>
              <h1 className="text-center mb-5">ОТПРАВИТЬ ДАННЫЕ ДЛЯ ВХОДА</h1>
              <form style={{width:"400px", margin: "auto"}}>
                <div className="form-group">
                  <label className="text-left" value={this.state.email} onChange={this.handleEmail}>Email</label>
                  <input type="email" className="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Введите email" required/>
                </div>
                <button type="submit" className="btn btn-info w-100 p-3">Отправить</button>
              </form>   
              <button className="btn btn-link nav-link w-100" onClick={()=> this.setState({loginForm: true})} >Вернуться на страницу входа</button> 
              <Link to="/registration" className="nav-link text-center">Зарегистрироваться</Link>
            </div>
          }
          </div>
           }
        </div>
      </section>
    );
  }
}

export default LoginPage;

