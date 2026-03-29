// src/components/InstallCommand.tsx
import { motion } from 'framer-motion';

type Props = {
  command: string;
  description?: string;
};

export const InstallCommand = ({ command, description }: Props) => {
  return (
    <div
    style={{ marginTop: '1.5rem' }}>
      {description && <p style={{ color: '#ccc', marginBottom: '0.5rem' }}>{description}</p>}
      <div style={{
        position: 'relative',
        background: '#000',
        border: '1px solid #333',
        borderRadius: '4px',
        padding: '1.2rem',
      }}>
        <code style={{
          display: 'block',
          fontFamily: 'monospace',
          padding: '0.8rem',
          color: '#fff',
          fontSize: '1rem',
          borderRadius: '8px',
          wordBreak: 'break-all'
        }}>
          {command}
        </code>
      </div>
    </div>
  );
};