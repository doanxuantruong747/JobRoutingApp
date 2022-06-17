import { useSearchParams } from 'react-router-dom';
import React, { useState, createContext } from 'react';
import { Routes, Route } from "react-router-dom";
import SearchAppBar from './component/SearchAppBar';
import DetailJob from './page/DetailJob';
import HomePage from "./page/HomePage";
import JobPage from "./page/JobPage";

export const Context = createContext()


function App() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [loginjobs, setLoginjobs] = useState(false)

  return (

    <Context.Provider value={setLoginjobs}>

      <SearchAppBar searchParams={searchParams} setSearchParams={setSearchParams} />
      <Routes >
        {!loginjobs ?
          <Route path='/' element={<HomePage />} />
          : <Route path='/' element={<JobPage searchParams={searchParams} />} />
        }
        <Route path='/job/:id' element={<DetailJob />} />
      </Routes>

    </Context.Provider>

  );
}

export default App;
