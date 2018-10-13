import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as contentful from 'contentful'
import 'semantic-ui-css/semantic.min.css';
import './semantic/dist/semantic.min.css';

var client  = contentful.createClient({
    space: '75z2171sm1m9',
    accessToken: 'e105aad71c1abf93c00ca718814bfd0c1f22e3c397fef55a629272faa10159d7' })
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
