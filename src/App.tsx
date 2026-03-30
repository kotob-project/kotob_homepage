// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useMemo } from 'react';
import { Header } from './components/header';
import { routes } from './routes';


function App() {
  const filterdRoutes = useMemo(() => routes.filter((route) => route.isActive !== false), [routes]);
  return (
    <Router>
      <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'ui-monospace', overflowY: 'hidden'}}>
        <Header />
        
        <Routes>
          {filterdRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;