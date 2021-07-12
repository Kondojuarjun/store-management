import React from 'react';
import Login from './components/Login';
//import ManagerView from './components/Manager';
import ButtonAppBar from './components/Topbar'
function App() {
  return (
    <div className="App">
     <ButtonAppBar />
     <Login />
     {/*<ManagerView />*/}
    </div>
  );
}

export default App;
