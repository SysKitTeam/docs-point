import React from 'react';
import styles from './styles.module.css';

interface LandingTileGridProps {
  children: React.ReactNode;
}

export default function LandingTileGrid({ children }: LandingTileGridProps) {
  return (
    <div className={styles.grid}>
      {children}
    </div>
  );
}