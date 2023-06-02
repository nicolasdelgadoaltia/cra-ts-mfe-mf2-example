import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import VotingCard from './components/VotingCard';

const AppComp: React.FC = () => (
  <div className="App">
    <header className="App-header">
      <h2>MFE 2 child</h2>
      <VotingCard>Voting card content</VotingCard>
    </header>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
