import { BrowserRouter, Routes, Route } from 'react-router-dom'; //this is syntx is for routing v-6
import './App.css';
import { Register } from './pages/Register';
import { Home } from './pages/Home';
import Login from './pages/Login';

import firebase from 'firebase/compat/app';
import { firebaseConfig } from './firebase';
import Layout from './components/Layout';

firebase.initializeApp(firebaseConfig); //initialize firebaseConfig globally so that i dont need to call it in every file



function App() {
  return (
    <BrowserRouter>      {/*Setup react-routing v6 (updated structure) */}
      <div className="App">
        <Routes>
          <Route exact path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />

          <Route path='/' element={<Layout />}>  {/* to make protective route i wrap the home inside layout ; it calls two times 1st by after login redirecte after it goes to layout.js if condition is staisfied by using <Outlet /> it calls this routs once more and print the all inside elements */}
            <Route path='' element={<Home />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
