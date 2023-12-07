import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Simple from './Components/Simple';
import New from './Components/New';


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' Component={New}/>
    </Routes>
    </>
  )
}

export default App