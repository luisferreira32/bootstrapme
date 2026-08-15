import type { JSX } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from './assets/vite.svg';
import { en } from './i18n/en';
import './app.css';

export const NextSteps = (): JSX.Element => (
  <section id="next-steps">
    <div id="docs">
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#documentation-icon" />
      </svg>
      <h2>{en['nextsteps.documentation']}</h2>
      <p>{en['nextsteps.yourQuestions']}</p>
      <ul>
        <li>
          <a href="https://vite.dev/" target="_blank" rel="noreferrer">
            <img className="logo" src={viteLogo} alt="" />
            {en['nextsteps.exploreVite']}
          </a>
        </li>
        <li>
          <a href="https://react.dev/" target="_blank" rel="noreferrer">
            <img className="button-icon" src={reactLogo} alt="" />
            {en['nextsteps.learnMore']}
          </a>
        </li>
      </ul>
    </div>
    <div id="social">
      <svg className="icon" role="presentation" aria-hidden="true">
        <use href="/icons.svg#social-icon" />
      </svg>
      <h2>{en['nextsteps.connectWithUs']}</h2>
      <p>{en['nextsteps.joinCommunity']}</p>
      <ul>
        <li>
          <a
            href="https://github.com/vitejs/vite"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#github-icon" />
            </svg>
            {en['nextsteps.github']}
          </a>
        </li>
        <li>
          <a href="https://chat.vite.dev/" target="_blank" rel="noreferrer">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#discord-icon" />
            </svg>
            {en['nextsteps.discord']}
          </a>
        </li>
        <li>
          <a href="https://x.com/vite_js" target="_blank" rel="noreferrer">
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#x-icon" />
            </svg>
            {en['nextsteps.xcom']}
          </a>
        </li>
        <li>
          <a
            href="https://bsky.app/profile/vite.dev"
            target="_blank"
            rel="noreferrer"
          >
            <svg className="button-icon" role="presentation" aria-hidden="true">
              <use href="/icons.svg#bluesky-icon" />
            </svg>
            {en['nextsteps.bluesky']}
          </a>
        </li>
      </ul>
    </div>
  </section>
);
