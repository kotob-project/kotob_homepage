// src/components/Button.tsx
import { Link } from 'react-router-dom';

type Props = {
  label: string;
  href: string;
  variant?: 'primary' | 'outline';
};

export const Button = ({ label, href, variant = 'primary' }: Props) => {
  const isPrimary = variant === 'primary';

  return (
    <Link
      to={href}
      style={{
        display: 'inline-block',
        padding: '0.8rem 1.5rem',
        borderRadius: '4px',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '1rem',
        fontFamily: 'ui-monospace',
        transition: 'all 0.3s ease',
        backgroundColor: isPrimary ? '#fff' : 'transparent',
        color: isPrimary ? '#000' : '#fff',
        border: isPrimary ? '1px solid #fff' : '1px solid #fff',
      }}
    >
      {label}
    </Link>
  );
};