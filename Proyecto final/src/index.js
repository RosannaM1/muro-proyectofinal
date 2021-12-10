import React,{Suspense} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './firebase';
import 'bootswatch/dist/slate/bootstrap.min.css';
import firebaseConfig from './loginfirebase';
import {FirebaseAppProvider} from 'reactfire'

ReactDOM.render((

  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={'Conectando...'} >
      <App />
    </Suspense>
  </FirebaseAppProvider>),
  
    document.getElementById('root')
);
reportWebVitals();
