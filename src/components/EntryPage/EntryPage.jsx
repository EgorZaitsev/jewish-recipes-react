import React from 'react';
import AppBar from "../AppBar/AppBar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "../Home/Home.jsx";
import Recipes from "../Recipes/Recipes.jsx";
import SingleRecipe from "../SingleRecipe/SingleRecipe.jsx";
import Social from "../Social/Social.jsx";

const EntryPage = () => {
  return (
      <>
        <AppBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/recipes/' element={<Recipes/>}/>
          <Route path='recipes/post/:id' element={<SingleRecipe/>}/>
          <Route path='/social' element={<Social/>}/>
        </Routes>
      </>
  );
};

export default EntryPage;