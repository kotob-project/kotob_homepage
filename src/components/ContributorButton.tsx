import React from 'react';

interface ContributorButtonProps {
  avatarURL: string;
  name: string;
  // クリックイベントの型を指定（返り値がない場合は void）
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ContributorButton: React.FC<ContributorButtonProps> = ({ avatarURL, name, onClick }) => {
  return (
    <button
      onClick={onClick}
  style={{
    display: 'inline-flex', // 画像と文字を並べるために追加
    alignItems: 'center',
    backgroundColor: '#000000',
    color: '#ffffff',
    marginRight: '20px',
    padding: '0px',
    border: '2px solid #ffffff',
    boxShadow: ' #414141 -6px 6px',
    cursor: 'pointer',
    transition: 'all 0.2s',
    borderRadius: '2px',

    // --- ここを追加 ---
    // 左(to right)から、不透明(1)から透明(0)へ

    // -----------------
  }}
      onMouseOver={(e) => {
        e.currentTarget.style.backgroundColor = '#333',
        e.currentTarget.style.transform = 'translate(5px,-5px)',
        e.currentTarget.style.boxShadow = '#414141 -11px 11px'}}
      onMouseOut={(e) => {
        e.currentTarget.style.backgroundColor = '#000000',
        e.currentTarget.style.transform = '',
        e.currentTarget.style.boxShadow = '#414141 -6px 6px'}}
    >
      <img
        src={avatarURL}
        alt={`${name}'s avatar`}
        style={{
          width: '128px',
          height: '128px',
          margin: '0px',
          marginRight: '8px',

          WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
          maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
        }}
      />
      <span style={{ fontSize: '24px', fontWeight: '500', marginRight: '8px' }}>{name}</span>
    </button>
  );
};

export default ContributorButton;