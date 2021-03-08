import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Main } from './components/Main/Main';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
