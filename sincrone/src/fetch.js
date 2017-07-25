
import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';


class Fetch extends Component {

  componentWillMount(){
    const status = function (response) {
      if(response.status !== 200){
        return Promise.reject(new Error(response.statusText));
      }
      return Promise.resolve(response);
    }
    const json = function(response) {
      return response.json()
    }

    fetch('http://www.mocky.io/v2/597772731100006b0bd899d9',
      {
        method:'post',
        models:''
      })
      .then(status)
      .then(json)

      .then((data)  => {
      this.props.API(data);
        console.log('data adding');

      }).catch(function (error) {

    })
  }


  render() {

      return (

      <div className="Fetch">
          <h1>Fetch</h1>

      </div>
    );
  }
}


export default connect(
  store => ({
    state:store.moki
  }),
  dispach => ({
    API:(data)=>{
      dispach({type:'ADD_API_DATA', payload:data});
    },

  })

)(Fetch);


