import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import './App.css';


class Menu extends Component {
  constructor(props){
    super(props);
    this.state={
      isOpened: false,
      hover:false,
    }

  }

  toggleSubMenu() {
    this.setState({
      isOpened: !this.state.isOpened,
    });
  }


  render() {
    const secondNavclick = ()=>{
      this.setState({
        hover: !this.state.hover,
      });
    }
   const mouseOver = ()=>{
     if(window.innerWidth>768){
       this.setState({
         hover: true
       });
     }
     }
    const mouseOut = ()=>{
      if(window.innerWidth>768){
        this.setState({
          hover: false
        });
      }
    }
    const className = this.state.isOpened ? "container change" : "container";
    const classNameUl = this.state.isOpened ? "nav-ul nocontainer" :"nav-ul";
    const secondNav = this.state.hover ? "secondNav block" :"secondNav none";
    const classNameMain = this.state.isOpened ? "main-navbar block" :"main-navbar";
    return (
    <header>
      <nav>
        <div className="Brand"> <h1>BREND_NAME</h1></div>
        <div className={className} onClick={this.toggleSubMenu.bind(this)}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>

        <div className={classNameMain}>
        <ul className={classNameUl}>
          <li><NavLink activeClassName={"active"} exact={true} to="/">App</NavLink></li>

          <li><NavLink activeClassName={"active"}  to="/about">About</NavLink></li>
          <li onClick={secondNavclick} onMouseOver={mouseOver} onMouseOut={mouseOut}><a>Blog <span className="caret"></span></a>
            <nav className={secondNav}>
              <ul>
                <li><Link to="/">App</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
              </ul>
            </nav>
          </li>
          <li><NavLink activeClassName={"active"} to="/home">Home</NavLink></li>
        </ul>
        </div>
      </nav>
    </header>

    );
  }
}

export default Menu;
