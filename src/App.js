import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import './App.css';
import Login from './Login';
import Feed from './Feed';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser)
  return (
    <div className="App">
      <Header />
      
      <div className='app__body'>
          <Sidebar />
          <Feed />
      </div>
      
      
    </div>
  );
}

export default App;
