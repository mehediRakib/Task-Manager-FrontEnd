import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/css/style.css'
import './assets/css/animate.min.css'
import './assets/css/index.css'
import {Provider} from "react-redux";
import store from "./Redux/store/store.js";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Provider store={store}>
       <App/>
   </Provider>
  </React.StrictMode>,
)
