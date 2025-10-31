import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { Provider } from 'react-redux';
import { store } from './app/store';

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';

createRoot(document.getElementById('root')).render(
 

   <Provider store={store}>
    <App />
  </Provider>

)
