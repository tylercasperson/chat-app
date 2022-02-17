import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import EnterAChat from './components/pages/EnterAChat';
import Chat from './components/pages/Chat';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<EnterAChat />} exact />
        <Route path='/chat' element={<Chat />} />
      </Routes>
    </Router>
  );
}

export default App;
