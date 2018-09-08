import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { DatePicker } from 'antd';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<DatePicker />, mountedNode);
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
