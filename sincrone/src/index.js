import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route} from 'react-router-dom';
import { createStore } from 'redux';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducer from './reducer';


const store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
