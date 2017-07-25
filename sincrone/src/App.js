import React, { Component } from 'react';
import Menu from './menu';
import home from './home';
import about from './about';
import { Route } from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import Fetch from './fetch';


class App extends Component {
  render() {
    const data_content = this.props.data_api.map((item, index)=> {
      return <div key={index} id={item.id}>
        <img src={require(`./${item.img}`)} />
        <h1>{item.name}</h1>
      </div>}
    );

    return (
      <div className="App">
        <Menu/>
          <Route path="/about" component={about} />
          <Route path="/home" component={home} />

        <Fetch/>
        {data_content}
      </div>
    );
  }
}




export default connect(
  state => ({
    data_api:state.moki
  }),
  dispach => ({

  })

)(App);
