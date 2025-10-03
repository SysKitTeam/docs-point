import React from 'react';
import styles from './styles.module.css';

interface HomePageLayoutProps {
  children: React.ReactNode;
}

export default function HomePageLayout({ children }: HomePageLayoutProps): React.JSX.Element {
  return (
    <div className={styles.homePageWrapper}>
      {children}
    </div>
  );
}