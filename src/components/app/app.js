import React, { Component } from 'react';

import AppHeader from '../app-header';
import ItemsList from '../items-list';
import SearchPanel from '../search-panel';

import './app.css';


export default class App extends Component {

render() {
    return (
        <div className="todo-app">
          <AppHeader/>
          <div className="search-panel d-flex">
            <SearchPanel/>
          </div>
          <ItemsList/>
        </div>
      );
    };

}
