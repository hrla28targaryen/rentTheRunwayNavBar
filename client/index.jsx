import React from 'react'
import ReactDOM from 'react-dom';
import MainNavigation from './components/MainNavigation/MainNavigation.jsx';

ReactDOM.render(<MainNavigation />, document.getElementById('app'));
window.MainNavigation = MainNavigation;