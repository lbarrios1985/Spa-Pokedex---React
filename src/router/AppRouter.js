import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages/Dashboard';
import { PokemonDetails } from '../pages/PokemonDetails';

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/"  element={<Dashboard />}></Route>
      <Route path="/pokemon/:id"  element={<PokemonDetails />}></Route>
    </Routes>
  )
}
