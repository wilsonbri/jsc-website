import 'bootstrap/dist/css/bootstrap.min.css';
import * as $ from 'jquery';
import Popper from 'popper.js';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Router } from './Router/Router';

ReactDOM.render((
	<div style={{ backgroundColor: '#f1f1d4', backgroundImage: 'url("https://www.transparenttextures.com/patterns/45-degree-fabric-light.png")', minHeight: '100vh'}}>
		<Router />
	</div>
), document.getElementById('root') as HTMLElement);

registerServiceWorker();