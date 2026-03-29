// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header';
import { Home } from './pages/Home'; // TOPページの中身をここに移したと想定
import { Download } from './pages/Download';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'ui-monospace', overflowY: 'hidden'}}>
        <Header />
        
        <Routes>
          {/* URLが "/" のときは Homeコンポーネントを表示 */}
          <Route path="/" element={<Home />} />
          
          {/* URLが "/download" のときは Downloadコンポーネントを表示 */}
          <Route path="/download" element={<Download />} />
          
          {/* URLが "/contributors" のときは（作っていれば）ここに追加 */}
          {/* <Route path="/contributors" element={<Contributors />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;