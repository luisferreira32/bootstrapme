import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app.tsx';
import './index.css';

// needed to inject the app
// oxlint-disable-next-line typescript/no-non-null-assertion
const root = document.querySelector('#root')!;

createRoot(root).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
