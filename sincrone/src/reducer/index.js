/**
 * Created by vlad on 7/15/17.
 */

import {combineReducers} from 'redux';

import moki from './moki';
import data from './data';


export default combineReducers ({
  moki,
  data
});