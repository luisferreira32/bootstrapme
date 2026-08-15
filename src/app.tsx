import type { JSX } from 'react';
import { useState } from 'react';
import heroImg from './assets/hero.png';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { en } from './i18n/en';
import { NextSteps } from './next-steps';
import './app.css';

const initialCounterState = 0;
const incrementCounterValue = 1;

export const App = (): JSX.Element => {
  const [count, setCount] = useState(initialCounterState);

  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>{en['app.getStarted']}</h1>
          <p>{en['app.editFile']}</p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => {
            setCount((_c) => _c + incrementCounterValue);
          }}
        >
          {en['app.countButton']} {count}
        </button>
      </section>

      <div className="ticks" />

      <NextSteps />

      <div className="ticks" />
      <section id="spacer" />
    </>
  );
};
