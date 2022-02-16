import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import PickAChat from './components/pages/PickAChat';
import Chat from './components/pages/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<PickAChat />} exact />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
