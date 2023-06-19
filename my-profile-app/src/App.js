
import './App.css';
import React from 'react';
import ProfilePhoto from './components/ProfilePhoto';
import FullName from './components/FullName';
import Address from './components/Address';

const App = () => {
  return (
    <div>
      <ProfilePhoto />
      <FullName />
      <Address />
    </div>
  );
};

export default App;

