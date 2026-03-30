// src/components/Header.tsx
import Logo from '../assets/kotob_logo_dark.png';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '1rem 2rem',
      borderBottom: '1px solid #333',
      backgroundColor: '#000'
    }}>
      <div>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'white', textDecoration: 'none' }}>
          <img width={60} src={Logo} alt="Logo" />
          <span style={{ fontSize: '1.5rem', fontWeight: 'bold', letterSpacing: '0.1rem' }}>
            kotob
          </span>
        </Link>
      </div>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ color: '#ccc', textDecoration: 'none' }}>TOP</Link>
        <Link to="download" style={{ color: '#ccc', textDecoration: 'none' }}>Download</Link>
        <Link to="contributors" style={{ color: '#ccc', textDecoration: 'none' }}>Contributors</Link>
      </nav>
    </header>
  );
};