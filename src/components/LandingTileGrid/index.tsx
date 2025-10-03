import React from 'react';
import styles from './styles.module.css';

interface LandingTileGridProps {
  children: React.ReactNode;
  hasImages?: boolean;
}

export default function LandingTileGrid({ children, hasImages = true }: LandingTileGridProps) {
  const gridClass = hasImages ? styles.gridWithImages : styles.gridWithoutImages;
  
  return (
    <div className={gridClass}>
      {children}
    </div>
  );
}