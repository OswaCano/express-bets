import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "./views/Home";
import EditBet from "./views/EditBet";
import ShowBet from "./views/ShowBet";
import DeleteBet from "./views/DeleteBet.jsx";
import CreateBet from "./views/CreateBet.jsx";

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/bets/create' element={<CreateBet/>}/>
        <Route path='/bets/details/:id' element={<ShowBet/>}/>
        <Route path='/bets/edit/:id' element={<EditBet/>}/>
        <Route path='/bets/delete/:id' element={<DeleteBet/>}/>
    </Routes>
  );
};

export default App;