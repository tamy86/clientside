import React from 'react';
//import logo from './logo.svg';
import './App.css';



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
*/

class App extends React.Component
{


  render()
  {
    return(
      <div>
       <Header/>
       
       <Content/>
       <Ordercontent/>
       <Contactus/>
       <Aboutus/>
       <Footer/>
       
      </div>
    );
  }
}

class Header extends React.Component
{
  render()
  {
    return(
      <div className="header">
        <Menu/>
      </div>
    );
  }
}

class Menu extends React.Component
{
  
  changeorder=()=>{
    document.getElementById("ordercontent").style.display="inherit";
    document.getElementById("content").style.display="none";
    document.getElementById("contactus").style.display="none";
    document.getElementById("aboutus").style.display="none";
  };
  
  changehome=()=>{
    document.getElementById("content").style.display="inherit";
    document.getElementById("ordercontent").style.display="none";
    document.getElementById("contactus").style.display="none";
    document.getElementById("aboutus").style.display="none";
  };

  changecontact=()=>{
    document.getElementById("contactus").style.display="inherit";
    document.getElementById("ordercontent").style.display="none";
    document.getElementById("content").style.display="none";
    document.getElementById("aboutus").style.display="none";
  };
  changeaboutus=()=>{
    document.getElementById("aboutus").style.display="inherit";
    document.getElementById("contactus").style.display="none";
    document.getElementById("ordercontent").style.display="none";
    document.getElementById("content").style.display="none";
  }
render(){
  return(
    
    <ul>
  <li><a onClick={this.changehome} class="active" href="#home">خانه</a></li>
  <li><a onClick={this.changeorder} href="#order">ثبت سفارش</a></li>
  <li><a onClick={this.changecontact} href="#contact">تماس با ما</a></li>
  <li><a onClick={this.changeaboutus} href="#about">درباره ما</a></li>
</ul>
    
  );
}  
}

class Content extends React.Component
{
  render(){
    return(
      <div id="content"  className="content">
          <h2 className="title">صفحه خانه</h2>
      </div>
    );
  }
}

class Ordercontent extends React.Component
{

  render(){
    return(
      <div id="ordercontent" className="ordercontent">
         <h2 className="title">صفحه سفارش</h2>
      </div>
    );
  }
}

class Contactus extends React.Component
{
  render()
  {
    return(
      <div id="contactus" className="contactus">
       <h2 className="title">صفحه تماس با ما</h2>
      </div>
    );
  }
}

class Aboutus extends React.Component
{
  render()
  {
    return(
      <div id="aboutus" className="aboutus">
        
        <h2 className="title">صفحه درباره ما</h2>
        
      </div>
    );
  }
}

class Footer extends React.Component
{
  render(){
    return(
      <div className="footer">
          <h4 className="footertext" >تمامی حقوق نزد صاحب اثر محفوذ میباشد</h4>
      </div>
    );
  }
}

export default App;
