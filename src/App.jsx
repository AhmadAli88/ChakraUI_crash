import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MyAlert from './components/Alert';
import MyBox from './components/Box';
import MyCenter from './components/Center';
import MyContainer from './components/Container';
import MyFlex from './components/Flex';
import MyGrid from './components/Grid';
import MySimpleGrid from './components/SimpleGrid';
import MyStack from './components/Stack';
import MyWrap from './components/Wrap';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        {/* Default route, can display any of your components */}
        <Route path="/" element={<MyCenter />} />

        {/* Route to MyAlert */}
        <Route path="/alert" element={<MyAlert />} />

        {/* Route to MyBox */}
        <Route path="/box" element={<MyBox />} />
        <Route path="/container" element={<MyContainer />} />
        <Route path="/flex" element={<MyFlex />} />
        <Route path="/grid" element={<MyGrid />} />
        <Route path="/simple-grid" element={<MySimpleGrid />} />
        <Route path="/stack" element={<MyStack />} />
        <Route path="/wrap" element={<MyWrap />} />
      </Routes>
    </Router> 
  );
}

export default App;
