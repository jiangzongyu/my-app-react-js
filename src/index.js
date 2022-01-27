import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Test from './Test'
// import Index from './Index'
import { Routers } from "./routers";
import 'element-theme-default';
// import HookCompare from './HookCompare'
// import UseContext from './UseContext'

// import FontColor from './fontColor'
// const { SyncLoopHook } = require('tapable')
// import UseMemo from './useMemo'

// import UseWinSize from "./UseWinSize";


ReactDOM.render(
  <Routers />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
