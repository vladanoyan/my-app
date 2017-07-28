import React, { Component } from 'react';
import Menu from './menu';
import home from './home';
import about from './about';
import { Route } from 'react-router-dom';
import './App.css';
import {connect} from 'react-redux';
import Fetch from './fetch';
import {getData} from './reducer/action-data';

class App extends Component {
constructor(){
  super();
  this.state = {
    show:false
  }
}
  render() {
let data_content ='';
    const API_data=()=>{
      // this.setState({show: !this.state.show});
      this.props.API_data();

      const data_content = this.props.data_api.map((item, index)=> {
        return <div key={index} id={item.id}>
          <img src={require(`./${item.img}`)} />
          <h1>{item.name}</h1>
        </div>}
      );


    }



    return (
      <div className="App">
        <Menu/>
          <Route path="/about" component={about} />
          <Route path="/home" component={home} />

        <Fetch/>
        { data_content }

        <button onClick={ API_data }>show API DATA</button>
      </div>
    );
  }
}




export default connect(
  state => ({
    data_api:state.data
  }),
  dispatch => ({
  API_data: ()=>{
    dispatch(getData());
  }
  })

)(App);
