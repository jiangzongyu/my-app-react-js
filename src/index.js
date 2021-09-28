import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
// import Test from './Test'
// import Hook from './Hook'
// import HookCompare from './HookCompare'
// import UseContent from './UseContent'

import FontColor from './fontColor'

// import UseMemo from './useMemo'

// import UseWinSize from "./UseWinSize";


ReactDOM.render(
  <React.StrictMode>
    {/*<App />*/}
    {/*<Test name='九月' />*/}
    {/*<Hook />*/}
    {/*<HookCompare />*/}
    {/*  <UseContent />*/}
      <FontColor/>
    {/*  <UseMemo />*/}
    {/*  <UseWinSize />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
