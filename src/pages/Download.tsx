// src/pages/Download.tsx
import { useState, useMemo } from 'react';
import { InstallCommand } from '../components/InstallCommand';

type InstallationMethod = 'Go (Recommended)' | 'Python' | 'Other (Binary)';

export const Download = () => {
  const [selected, setSelected] = useState<InstallationMethod>('Go (Recommended)');
  const methods: InstallationMethod[] = useMemo<InstallationMethod[]>(() => ['Go (Recommended)', 'Python', 'Other (Binary)'], []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Download kotob</h2>
      <p style={{ color: '#888', marginBottom: '2.5rem' }}>Choose your preferred installation method.</p>

      <div style={{
        display: 'flex',
        gap: '12px',
        marginBottom: '2rem',
        flexWrap: 'wrap'
      }}>
        {methods.map((method) => (
          <button
            key={method}
            onClick={() => setSelected(method)}
            style={{
              padding: '0.6rem 1.2rem',
              cursor: 'pointer',
              fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
              backgroundColor: selected === method ? '#fff' : '#111',
              color: selected === method ? '#000' : '#888',
              border: `1px solid ${selected === method ? '#fff' : '#333'}`,
              borderRadius: '6px',
              transition: 'all 0.2s ease',
              fontSize: '14px',
              fontWeight: selected === method ? 'bold' : 'normal',
            }}
          >
            {method}
          </button>
        ))}
      </div>

      <div style={{
        padding: '2.5rem',
        border: '1px solid #222',
        borderRadius: '12px',
        backgroundColor: '#0a0a0a',
        minHeight: '200px'
      }}>
        {selected === 'Go (Recommended)' && (
          <InstallCommand
            description="Install directly using the Go compiler (requires Go 1.16+)."
            command="go install github.com/kotob-project/kotob@latest"
          />
        )}

        {selected === 'Python' && (
        <div style={{ lineHeight: '1.6' }}>
            <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>
              Coming soon ...
            </p>
        </div>
        )}

        {selected === 'Other (Binary)' && (
          <div style={{ lineHeight: '1.6' }}>
            <p style={{ color: '#ccc', marginBottom: '1.5rem' }}>
              Download the pre-compiled binary for your architecture from GitHub Releases.
            </p>
            <a 
              href="https://github.com/kotob-project/kotob/releases"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#fff',
                textDecoration: 'underline',
                fontSize: '1rem'
              }}
            >
              View GitHub Releases →
            </a>
            
            <div style={{
              marginTop: '2rem',
              padding: '1rem',
              borderLeft: '2px solid #333',
              color: '#666',
              fontSize: '0.9rem'
            }}>
              Note: For macOS users, you may need to allow the app in "Security & Privacy" settings after the first run.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};