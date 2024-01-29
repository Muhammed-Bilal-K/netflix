import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import {Action, Toptrending} from './urls';
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={Toptrending} title='Top Movies'/>
      <RowPost url={Action} title='Action' isSmall/>
    </div>
  );
}

export default App;
