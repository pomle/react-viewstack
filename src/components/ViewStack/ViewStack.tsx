import React from 'react';
import css from './styles.css';

const style = document.createElement('style');
style.textContent = css;
document.head.appendChild(style);

interface ViewStackProps {
  children: React.ReactNode;
}

export default function ViewStack({ children }: ViewStackProps) {
  return <div className='pomle-react-viewstack'>{children}</div>;
}
