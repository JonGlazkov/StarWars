import React from "react";

import { Characters } from '../pages/Characters';
import { Dashboard } from '../pages/Dashboard';
import { Planets } from '../pages/Planets'
import { Starships } from '../pages/Starships';


import { Routes, Route } from 'react-router-dom';


function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/characters" element={<Characters />} />
      <Route path="/planets" element={<Planets />} />
      <Route path="/starships" element={<Starships />} />
    </Routes>
  )
}

export default MainRoutes

