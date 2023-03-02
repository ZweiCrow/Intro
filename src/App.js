import {Routes, Route} from "react-router-dom"

import './App.css';
import JSX from './Components/0-JSX';
import State from './Components/01-state-hook/state';
import Price from './Components/01-state-hook/lifeCycle';
import Heros from './Components/02-props';
import Counter from './Components/03-counter';
import Formulaire from './Components/04-formulaire';
import Cycle from './Components/05-class-props-cycle-state/cycle';
import Parent from './Components/05-class-props-cycle-state/classe';
import Header from "./Header";
import Article from "./Article";

function App() {
  return (
    <>
      <Header/>
      <main>
        <h1>Hello everyone</h1>
        <h2>let's learn how to cry (day 4)</h2>
        <Routes>
          <Route path="*" element={<JSX/>}/>
          <Route path="/state" element={<State/>}/>
          <Route path="/price" element={<Price/>}/>
          <Route path="/heros" element={<Heros/>}/>
          <Route path="/counter" element={<Counter/>}/>
          <Route path="/form" element={<Formulaire/>}/>
          <Route path="/cycle" element={<Cycle/>}/>
          <Route path="/parent" element={<Parent/>}/>
          <Route path="/article/:id" element={<Article/>}/>
        </Routes>
      </main>
    </>
  );
}

export default App;
