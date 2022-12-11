import React from 'react';

const style = document.createElement('style');
style.textContent = `
.pomle-react-viewstack {
  height: 100%;
  overflow: hidden;
  position: relative;
}

.pomle-react-viewstack > * {
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
}
`;

document.head.appendChild(style);

interface ViewStackProps {
  children: React.ReactNode;
}

export default function ViewStack({ children }: ViewStackProps) {
  return <div className='pomle-react-viewstack'>{children}</div>;
}
