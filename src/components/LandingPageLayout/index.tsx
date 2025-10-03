import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';

interface LandingPageLayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export default function LandingPageLayout({ 
  children, 
  title = 'Syskit Point',
  description = 'Discover, Secure, and Control Your Microsoft 365 with Syskit Point'
}: LandingPageLayoutProps) {
  return (
    <Layout
      title={title}
      description={description}
      wrapperClassName={styles.landingPageWrapper}
    >
      <div className={styles.landingPageContainer}>
        <main className={styles.landingPageMain}>
          {children}
        </main>
      </div>
    </Layout>
  );
}