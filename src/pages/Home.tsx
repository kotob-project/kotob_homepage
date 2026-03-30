import { Button } from '../components/Button';
import '../App.css';

export const Home = () => {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', fontFamily: 'ui-monospace' }}>

      <main style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '6rem 2rem',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '6rem', marginBottom: '0.5rem', letterSpacing: '-0.1rem' }}>
          Kotob
        </h1>
        <p style={{ color: '#888', fontSize: '1.2rem', maxWidth: '600px' }}>
          A minimalist CLI translation tool. <br/>
          Transform text via Gemini API with zero friction.
        </p>

        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          {/* メインの導線 */}
          <Button label="Download" href="/download" variant="primary" />
          {/* ソースコードへの導線 */}
          <Button label="View source" href="https://github.com/kotob-project/" variant="outline" />
        </div>
      </main>
    </div>
  );
}