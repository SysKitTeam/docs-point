import React from 'react';

export default function NotFoundContent(): React.JSX.Element {
  return (
    <main
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '60vh',
        padding: '2rem',
      }}
    >
      <div className="container" style={{ maxWidth: '480px' }}>
        <h1
          style={{
            fontSize: '4rem',
            fontWeight: 800,
            margin: 0,
            lineHeight: 1,
            color: 'var(--ifm-color-primary)',
          }}
        >
          404
        </h1>
        <p style={{ marginTop: '1rem' }}>
          The page you were looking for doesn't exist. But don't worry. We can
          Point you in the right direction:
        </p>
        <ul>
          <li>
            Start from the Point Docs{' '}
            <a href="https://docs.syskit.com/point/">Home Page</a>
          </li>
          <li>
            <a href="https://www.syskit.com/contact-us">Contact Us</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
