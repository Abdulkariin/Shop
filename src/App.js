import React from 'react';
import Home from './routes/home/home.component';
import Nativation from './routes/nativation/nativation.component';
import { Route, Routes, } from "react-router-dom";
import SignIn from './routes/sign-in/sign-in.component.jsx';



const Shop = () => (
  <div>
    <h1>I am the shop page</h1>
  </div>
);

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Nativation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
