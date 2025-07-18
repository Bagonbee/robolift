import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Ensure immediate visibility and proper theme initialization
document.documentElement.style.colorScheme = 'light dark';
document.body.style.opacity = '1';
document.body.classList.add('loaded');

// Prevent flash of unstyled content
const style = document.createElement('style');
style.textContent = `
  * { opacity: 1 !important; }
  body { opacity: 1 !important; }
  h1, h2, h3, h4, h5, h6, p, span, div, a { opacity: 1 !important; }
`;
document.head.appendChild(style);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);